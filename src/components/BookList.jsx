import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import axios from "axios";
import SearchBar from "./SearchBar";


const BookList = ({ isAdmin = false }) => {
  const [books, setBooks] = useState([]);
  // search incorperation
  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    setLoading(true);

    try {
      const res = await axios.get("https://jubi-back-end.onrender.com/books");
      const data = res.data;
      setBooks(data);
      console.log(data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // use effect need

  useEffect(() => {
    // call yout function here

    fetchBooks();
    // bring [] as shown
  }, []);

  //search inorperation line 2
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
    return <p className="text-red">No Books Found</p>;

 
  return (
    <div>
     
<div className="p-4">
  
      <SearchBar onSearch={handleSearch}  />

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-6 pt-4 p-5 overflow-hidden">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} isAdmin={isAdmin} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No matching books found.
          </p>
        )}
      </div>
    </div>


    </div>
  );
};

export default BookList;
