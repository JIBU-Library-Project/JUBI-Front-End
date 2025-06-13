import React from 'react'
import PagesLayoutAdmin from '../layouts/PagesLayoutAdmin'
import libimg1 from "../assets/library-cuate.png"
import { Link } from 'react-router'

const AdminPage = () => {
  return (
    <div>
      <PagesLayoutAdmin>
         <div>
          <div className="//bg-gradient-to-br min-h-screen flex flex-col items-center justify-center px-6 py-16" >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-5xl font-extrabold text-[#ee6c39] leading-tight mb-6 animate-fade-in-up">
  Welcome to JubiLib <span className="text-[#263238]">Admin Dashboard</span>
</h1>

<ul className="list-disc list-inside text-gray-800 text-lg space-y-1 animate-fade-in-up delay-200">
  <li>Add new books</li>
  <li>Edit existing records</li>
  <li>Delete outdated entries</li>
</ul>

<p className="text-gray-600 text-sm mt-4 animate-fade-in-up delay-300 italic">
  Empower your shelves — one action at a time.
</p>
        </div>

      
          <img src={libimg1} alt="Library Illustration" className="rounded-xl //shadow-lg max-w-md w-full" />
       
      </div>

      {/* Explore Books Button (Centered Below) */}
      <div className="mt-12">
        <Link to={"/admin-booklist"}>
        <button className="bg-[#cbfb45] font-medium text-black rounded-[2rem] border-amber-200 py-[10px] px-[1.5em] mr-10 hover:bg-[#212419] hover:text-[#ffff] ">
          See Avaialble Books
        </button>
        </Link>
      </div>
    </div> 
         </div>
      </PagesLayoutAdmin>
    </div>
   
  )
}

export default AdminPage