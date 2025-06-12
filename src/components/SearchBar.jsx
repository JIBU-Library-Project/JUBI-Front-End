import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8 px-4">
      <div className="flex items-center bg-[#1F2937] border border-gray-700 rounded-full shadow-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
        <input
          type="text"
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search by title or author..."
          className="flex-1 bg-transparent text-white placeholder-gray-400 px-6 py-3 focus:outline-none text-base"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 font-medium "
        >
          Search Book
        </button>
      </div>
    </div>
  );
};

export default SearchBar;