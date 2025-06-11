import React from "react";
import { Link } from "react-router";

const AdminNavBar = () => {
  return (
    <nav className=" mt-4 p-2 //bg-amber-500 flex flex-row justify-between items-center pl-1">
      <span className="ml-10 font-extrabold text-[25px] ">JUBILib.</span>
      <ul className=" pl-15 pr-15 flex gap-x-15 bg-[#1a1c19] text-black rounded-[2rem] border-amber-200 py-[10px] px-[1.5em]">
        <Link to={"/admin-booklist"}>
          <li className=" text-white px-[1.5em] font-medium hover:bg-[#cdf44b] hover:text-[#1a1c19] //bg-amber-300 p-2 rounded-full">
            All Books
          </li>
        </Link>
        <Link to={"/add-book"}>
          <li className=" text-white px-[1.5em] font-medium hover:bg-[#cdf44b] hover:text-[#1a1c19] //bg-amber-300 p-2 rounded-full">
            Add Book
          </li>
        </Link>
        <Link to={"/edit-book"}>
          <li className=" text-white px-[1.5em] font-medium hover:bg-[#cdf44b] hover:text-[#1a1c19] //bg-amber-300 p-2 rounded-full">
            Edit Book
          </li>
        </Link>
      </ul>
      <Link to="/">
        <button className="bg-[#cbfb45] font-medium text-black rounded-[2rem] border-amber-200 py-[10px] px-[1.5em] mr-10 hover:bg-[#cdf44b] hover:text-[#1a1c19] ">
          Back to User Page
        </button>
      </Link>
    </nav>
  );
};

export default AdminNavBar;
