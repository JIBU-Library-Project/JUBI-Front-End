import React from "react";
import PagesLayoutUser from "../layouts/PagesLayoutUser";
import BookList from "../components/BookList";

const BookListPage = () => {
  return (
    <div>
      <PagesLayoutUser>
        <div className="bg-[#000]">
          
          <div>
            <h1 className="flex justify-center text-4xl pt-16 pb-16 font-bold text-white">
              Explore Our Book Collection
            </h1>
          </div>
          <div className="min-w-full pb-20">
            <BookList />
          </div>
        </div>
      </PagesLayoutUser>
    </div>
  );
};

export default BookListPage;
