import React from "react";
import { Link } from "react-router";

const UserNavBar = () => {
  return (
    <nav className=" mt-4 p-2 //bg-amber-500 flex flex-row justify-between items-center pl-1">
      <span className="ml-10 font-extrabold text-[25px] ">JUBILib.</span>
      <ul className=" pl-15 pr-15 flex gap-x-15 bg-[#1a1c19] text-black rounded-[2rem] border-amber-200 py-[10px] px-[1.5em]">
        <Link to={"/"}>
          <li className=" text-white px-[1.5em] font-medium hover:bg-[#cdf44b] hover:text-[#1a1c19] //bg-amber-300 p-2 rounded-full">
            Home
          </li>
        </Link>
        <Link to={"/books"}>
          <li className="text-white font-medium hover:bg-[#cdf44b] hover:text-[#1a1c19]  //bg-amber-300 p-2 pl-5 pr-5 rounded-full">
            Books
          </li>
        </Link>
      </ul>
      <Link to="/admin-page">
        <button className="bg-[#cbfb45] font-medium text-black rounded-[2rem] border-amber-200 py-[10px] px-[1.5em] mr-10 hover:bg-[#cdf44b] hover:text-[#1a1c19] ">
          Admin
        </button>
      </Link>
    </nav>
  );
};

export default UserNavBar;
