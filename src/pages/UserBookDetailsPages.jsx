import React from "react";
import BookDetails from "../components/BookDetails";
import { Link } from "react-router";

const UserBookDetailsPages = () => {
  return (
    <>
      <div
        className=" 
    flex py-2.5 flex-col justify-center align-text-top pr-4"
      >
        <nav className=" mt-4 p-2 //bg-amber-500 flex flex-row justify-between items-center pl-1">
          <span className="ml-10 font-extrabold text-[25px] ">JUBILib.</span>

          <Link to="/books">
            <button className="bg-[#06010c] font-medium text-white rounded-[rem] border-amber-200 py-[10px] px-[1.5em] mr-10 hover:bg-[#cdf44b] hover:text-[#1a1c19] ">
              Back to Books
            </button>
          </Link>
        </nav>
      </div>

      <BookDetails />
    </>
  );
};

export default UserBookDetailsPages;
