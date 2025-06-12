import React from "react";
import BookListPage from "../pages/BookListPage";
import PagesLayoutAdmin from "../layouts/PagesLayoutAdmin";
import BookList from "../components/BookList";

const BookListAdmin = () => {
  return (
    <PagesLayoutAdmin>


      <div className="bg-[#000] ">
        <div>
          <h1 className="flex justify-center text-4xl pt-16 pb-16 font-bold text-white">
            List of Book Collection
          </h1>
        </div>

        
        <div className="min-w-full pb-20">
          <BookList isAdmin />
        </div>
      </div>
    </PagesLayoutAdmin>
  );
};

export default BookListAdmin;
