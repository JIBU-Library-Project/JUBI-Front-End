import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import axios from "axios";
import SearchBar from "./SearchBar";

const BookList = ({ isAdmin = false }) => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://jubi-back-end.onrender.com/books");
      const data = res.data;
      setBooks(data.books); // ✅ Fix this line
      console.log(data.books);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = (deletedId) => {
    setBooks((prev) => prev.filter((book) => book.id !== deletedId));
  };

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title?.toLowerCase().includes(searchTerm) ||
      book.author?.toLowerCase().includes(searchTerm)
  );

  if (loading) return <p className="text-white">Loading...</p>;

  if (!books || books.length === 0)
    return <p className="text-red-500">No Books Found</p>;

  return (
    <div className="p-4">
      <SearchBar onSearch={handleSearch} />
      <div className="flex flex-wrap justify-center gap-5 mt-8">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              isAdmin={isAdmin}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No matching books found.
          </p>
        )}
      </div>
    </div>
  );
};

export default BookList;