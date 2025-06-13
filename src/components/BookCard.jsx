import React from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { FaEdit } from "react-icons/fa";

const BookCard = ({ book, isAdmin }) => {
  const navigate = useNavigate();

  const handleView = () => {
    if (isAdmin) {
      navigate(`/admin/books/${book.id}`);
    } else {
      navigate(`/books/${book.id}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://jubi-back-end.onrender.com/books/${id}`
      );
      alert(res.data.message);
      fetch;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      id="book-card"
      className="bg-[#272822] shadow-lg rounded-xl overflow-hidden //pr-15 p-2 flex  w-90 flex-col gap-y-2 "
    >
      <div id="book-image">
        <img
          src={book.imageUrl}
          alt={book.title}
          className=" //bg-amber-100  w-100 h-100 //object-cover rounded-md //mb-4 "
        />
      </div>

      <div id="book-info-holder w-full">
        <div id="book-info" className="flex flex-col pt-5 text-[30px]">
          <h2 className="font-semibold text-[#cfc039] mb-1">
            {book.title.replace(/^The\s+/i, "")}
          </h2>
          <div
            id="book-child-container"
            className="flex w-full overflow-hidden "
          >
            <div id="book-childs" className="w-70">
              <p> {book.author}</p>
              <p>Genre: {book.genre}</p>
              <p>Year: {book.year}</p>
            </div>
            <div id="available">
              <p
                className={`text-[15px] font-semibold pt-6 pl-20 pr-5 //bg-amber-200 ${
                  book.isAvailable ? "text-green-600" : "text-red-500"
                }`}
              >
                {book.isAvailable ? "Available" : "Not Available"}
              </p>
            </div>
          </div>
        </div>

        <div id="book-actions" className="flex gap-3 mt-4">
          <button
            onClick={handleView}
            className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            {/* <Eye size={18} /> */}
            <span className="view">View</span>
          </button>

          {isAdmin && (
            <>
              <button
                className="text-yellow-600 hover:text-yellow-800 flex items-center gap-1"
                onClick={() => navigate(`/edit-book/${book.id}`)}
              >
                {/* <Edit size={18} /> */}
                <span className="FaEdit">Edit</span>
              </button>
              <button
                className="text-red-600 hover:text-red-800 flex items-center gap-1"
                onClick={() => handleDelete(book.id)}
              >
                {/* <Trash2 size={18} /> */}
                <span className="delete">Delete</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
