import React from 'react'
import { Link } from 'react-router'

const AdminNavBar = () => {
  return (
    <nav className=" p-2 bg-amber-200 flex flex-row justify-between items-center">
      <span>LOGO</span>
      <ul className="flex flex-row gap-x-[1rem]">

         <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/add-book"}>
          <li>AddBook</li>
        </Link>
        <Link to={"/edit-book"}>
          <li>EditBook</li>
        </Link>
        
      </ul>
      <Link to="/admin-page">
        <button className="bg-emerald-400 text-white rounded-[7px] border-2 border-amber-200 py-[10px] px-[2em]">
          Admin
        </button>
      </Link>
    </nav>
  )
}

export default AdminNavBar