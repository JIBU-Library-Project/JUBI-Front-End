import React from 'react';
import { Link } from 'react-router';
import logo from "../assets/LOGO.png"

const AdminNavBar = () => {
  return (
    <nav className="pt-5 pb-5 px-2 m-0 flex flex-col md:flex-row justify-between items-center sticky top-0 z-50 bg-[#e0e0e0]/20 backdrop-blur-[55px] shadow-md">
      {/* Logo */}
     <span className="ml-10 font-extrabold text-[25px] text-[#b60466]"><img src={logo} alt="" className="w-50"/></span>

      {/* Nav Links with Rounded Background */}
      <div className="my-3 md:my-0">
        <ul className=" backdrop-blur-[30px] pl-15 pr-15 flex gap-x-15 bg-[#ffffff]/30 text-black rounded-[2rem] //border-amber-200 py-[10px] px-[1.5em] border border-solid border-white">
          <li>
            <Link
              to="/admin-booklist"
              className=" px-4 py-2 font-medium hover:bg-[#cdf44b] hover:text-[#1a1c19] rounded-full transition"
            >
              All Books
            </Link>
          </li>
          <li>
            <Link
              to="/add-book"
              className=" px-4 py-2 font-medium hover:bg-[#cdf44b] hover:text-[#1a1c19] rounded-full transition"
            >
              Add Book
            </Link>
          </li>
        
          <li>
            <Link
              to="/edit-book"
              className=" px-4 py-2 font-medium hover:bg-[#cdf44b] hover:text-[#1a1c19] rounded-full transition"
            >
              Edit Book
            </Link>
          </li>
        </ul>
      </div>

      {/* Back to User Page Button */}
      <Link to="/">
        <button className="bg-[#cbfb45] font-medium text-black rounded-[2rem] border-amber-200 py-[10px] px-[1.5em] mr-10 hover:bg-[#cdf44b] hover:text-[#1a1c19]">
          Back to User Page
        </button>
      </Link>
    </nav>
  );
};

export default AdminNavBar;
