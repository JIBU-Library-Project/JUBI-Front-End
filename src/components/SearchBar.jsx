import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8 px-4">

      <div className="flex items-center bg-[#ffffff] border border-gray-700 rounded-full shadow-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#cdf44b] transition-all">
 <button
          type="submit"
          className="bg-[#4c4e42] text-white px-6 py-3 font-medium "
        >
          Search Book
        </button>

        <input
          type="text"
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search by title or author..."
          className="flex-1 bg-transparent text-blac placeholder-gray-400 px-6 py-3 focus:outline-none text-base"
        />
         
      </div>
    </div>
  );
};

export default SearchBar;