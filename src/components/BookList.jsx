import React from "react";
import BookCard from "../components/BookCard";

const books = [
  {
    id: 1,
    title: "The Big Bird",
    author: "John Doe",
    genre: "Fiction",
    year: 2021,
    description: "A thrilling tale of a mysterious bird.",
    imageUrl: "https://blog-cdn.reedsy.com/directories/gallery/254/large_f9aca907606b40f478a4ec40ade5f476.jpg",
    isAvailable: true,
  },
  {
    id: 2,
    title: "Whispers of the Forest",
    author: "Jane Smith",
    genre: "Fantasy",
    year: 2019,
    description: "An enchanting journey through an ancient forest.",
    imageUrl: "https://blog-cdn.reedsy.com/directories/gallery/250/large_c58c89de3e7f1d60d64f7e344999fc2f.jpg",
    isAvailable: false,
  },
  {
    id: 2,
    title: "Whispers of the Forest",
    author: "Jane Smith",
    genre: "Fantasy",
    year: 2019,
    description: "An enchanting journey through an ancient forest.",
    imageUrl: "https://blog-cdn.reedsy.com/directories/gallery/255/large_6cacd912f898ca2f94d083737783e23e.jpg",
    isAvailable: false,
  },
  {
    id: 2,
    title: "Whispers of the Forest",
    author: "Jane Smith",
    genre: "Fantasy",
    year: 2019,
    description: "An enchanting journey through an ancient forest.",
    imageUrl: "https://blog-cdn.reedsy.com/directories/gallery/255/large_6cacd912f898ca2f94d083737783e23e.jpg",
    isAvailable: false,
  },
  {
    id: 2,
    title: "Whispers of the Forest",
    author: "Jane Smith",
    genre: "Fantasy",
    year: 2019,
    description: "An enchanting journey through an ancient forest.",
    imageUrl: "https://blog-cdn.reedsy.com/directories/gallery/255/large_6cacd912f898ca2f94d083737783e23e.jpg",
    isAvailable: false,
  },
  {
    id: 2,
    title: "Whispers of the Forest",
    author: "Jane Smith",
    genre: "Fantasy",
    year: 2019,
    description: "An enchanting journey through an ancient forest.",
    imageUrl: "https://blog-cdn.reedsy.com/directories/gallery/255/large_6cacd912f898ca2f94d083737783e23e.jpg",
    isAvailable: false,
  },
];



const BookList = ({ isAdmin = false }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} isAdmin={isAdmin} />
      ))}
    </div>
  );
};

export default BookList;
