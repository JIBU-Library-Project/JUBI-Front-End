import React from 'react';
import { Link } from 'react-router'; // use `react-router-dom`

const AdminNavBar = () => {
  return (
    <nav className=" bg-[#272822] pt-5 p-2 m pb-5 flex flex-col md:flex-row justify-between items-center align-middle">
      {/* Logo */}
      <span className="text-[#cdf44b] ml-10 font-extrabold text-[25px]">JUBILib.</span>

      {/* Nav Links with Rounded Background */}
      <div className="my-3 md:my-0">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 px- py-2 ">
          <li>
            <Link
              to="/admin-booklist"
              className="text-white px-4 py-2 font-medium hover:bg-[#cdf44b] hover:text-[#1a1c19] rounded-full transition"
            >
              All Books
            </Link>
          </li>
          <li>
            <Link
              to="/add-book"
              className="text-white px-4 py-2 font-medium hover:bg-[#cdf44b] hover:text-[#1a1c19] rounded-full transition"
            >
              Add Book
            </Link>
          </li>
        
          <li>
            <Link
              to="/edit-book"
              className="text-white px-4 py-2 font-medium hover:bg-[#cdf44b] hover:text-[#1a1c19] rounded-full transition"
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
