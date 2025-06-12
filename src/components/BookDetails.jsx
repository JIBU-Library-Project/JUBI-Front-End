import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

// const dummyBooks = [
//   {
//     id: 1,
//     title: "The Big Bird",
//     author: "John Doe",
//     genre: "Fiction",
//     year: 2021,
//     description: "A thrilling tale of a mysterious bird.",
//     imageUrl:
//       "https://blog-cdn.reedsy.com/directories/gallery/256/large_753131580521b5596c3e0499958150f7.jpg",
//     isAvailable: true,
//   },
//   {
//     id: 2,
//     title: "Whispers of the Forest",
//     author: "Jane Smith",
//     genre: "Fantasy",
//     year: 2019,
//     description: "An enchanting journey through an ancient forest.",
//     imageUrl:
//       "https://blog-cdn.reedsy.com/directories/gallery/255/large_6cacd912f898ca2f94d083737783e23e.jpg",
//     isAvailable: false,
//   },
//   {
//     id: 2,
//     title: "Whispers of the Forest",
//     author: "Jane Smith",
//     genre: "Fantasy",
//     year: 2019,
//     description: "An enchanting journey through an ancient forest.",
//     imageUrl:
//       "https://blog-cdn.reedsy.com/directories/gallery/255/large_6cacd912f898ca2f94d083737783e23e.jpg",
//     isAvailable: false,
//   },
//   {
//     id: 2,
//     title: "Whispers of the Forest",
//     author: "Jane Smith",
//     genre: "Fantasy",
//     year: 2019,
//     description: "An enchanting journey through an ancient forest.",
//     imageUrl:
//       "https://blog-cdn.reedsy.com/directories/gallery/255/large_6cacd912f898ca2f94d083737783e23e.jpg",
//     isAvailable: false,
//   },
// ];

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState();
  const [loading, setLoading] = useState(true);

  const fetchSingleBook = async () => {
    setLoading(true);

    try {
      const res = await axios.get(
        `https://jubi-back-end.onrender.com/books/${id}`
      );

      setBook(res.data);
      console.log(res.data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleBook();
  }, []);

  if (loading) {
    return <p className="text-black">Loading...</p>;
  }

  if (!book) {
    return <p className="text-red-500">Book not found</p>;
  }

  return (
    <div className=" bg-amber-200 w-full h-min py-10">
      <div className="max-w-6xl mx-auto bg-[#ffff] rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row gap-24 p-8  md:p-12">
        {/* Book Cover */}
        <div className="flex-shrink-0 //md:w-1/2 flex justify-center items-start">
          <img
            src={book?.imageUrl}
            alt={book?.title || "Book cover"}
            className="w-full h-auto max-h-[600px] object-contain rounded-xl shadow-md"
          />
        </div>

        {/* Book Details */}
        <div className="flex-1 space-y-5">
          <h2 className="text-4xl font-extrabold text-gray-800">
            {book.title}
          </h2>
          <hr />

          <div className="text-lg space-y-2 text-gray-700">
            <p>
              <span className="font-semibold text-gray-900">Author:</span>{" "}
              {book.author}
            </p>
            <p>
              <span className="font-semibold text-gray-900">Genre:</span>{" "}
              {book.genre}
            </p>
            <p>
              <span className="font-semibold text-gray-900">Year:</span>{" "}
              {book.year}
            </p>{" "}
            <hr />
            <p
              className={
                book.isAvailable
                  ? "text-green-600 font-medium"
                  : "text-red-500 font-medium"
              }
            >
              Status: {book.isAvailable ? "Available" : "Not Available"}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800">Description</h3>
            <p className="text-gray-700 leading-relaxed">{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
