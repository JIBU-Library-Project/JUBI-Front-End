import React from "react";
import { Link } from "react-router";
import logo from "../assets/LOGO.png"

const UserNavBar = () => {
  return (
    <nav className="pt-5 pb-5 px-2 m-0 flex flex-col md:flex-row justify-between items-center sticky top-0 z-50 bg-[#e0e0e0]/20 backdrop-blur-[55px] shadow-md">
      <span className="ml-10 font-extrabold text-[25px] text-[#b60466]"><img src={logo} alt="" className="w-50"/></span>
      <ul className=" backdrop-blur-[30px] pl-15 pr-15 flex gap-x-15 bg-[#ffffff]/30 text-black rounded-[2rem] //border-amber-200 py-[10px] px-[1.5em] border border-solid border-white">
        <Link to={"/"}>
          <li className=" text-gray px-[1.5em] font-medium hover:bg-[#cdf44b] hover:text-[#1a1c19] //bg-amber-300 p-2 rounded-full">
            Home
          </li>
        </Link>
        <Link to={"/books"}>
          <li className="text-black  font-medium hover:bg-[#cdf44b] hover:text-[#1a1c19]  //bg-amber-300 p-2 pl-5 pr-5 rounded-full">
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
