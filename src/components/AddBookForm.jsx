import React from "react";
import PagesLayoutAdmin from "../layouts/PagesLayoutAdmin";
import { FaBook } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router";

const AddBookForm = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    //prevent form from refreshing
    e.preventDefault();

    const formData = e.target;

    console.log(formData);

    const payload = {
      title: formData.title.value,
      author: formData.author.value,
      genre: formData.genre.value,
      description: formData.description.value,
      year: formData.year.value,
      imageUrl: formData.imageUrl.value,
      isAvailable: formData.isAvailable.value == "on" ? true : false,
    };

    try {
      const res = await axios.post(
        "https://jubi-back-end.onrender.com/books",
        payload
      );

      alert("Added successfuly");
      navigate("/books")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PagesLayoutAdmin>
      <div className="bg-[#161614ee] p-3 min-h-screen">
        <form
          className="bg-white p-6 rounded-lg shadow-md m-20"
          onSubmit={handleSubmit}
        >
          <h3 className="text-xl font-semibold mb-4 text-[#00a63e] flex">
            Add New Book <FaBook className="w-6 h-6" />
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">Title*</label>
              <input
                type="text"
                name="title"
                // value=""
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Author*</label>
              <input
                type="text"
                name="author"
                // value=""
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Genre</label>
              <input
                type="text"
                name="genre"
                // value=""
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Year</label>
              <input
                type="number"
                name="year"
                // value=""
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              // value=""
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows="3"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Cover Image URL</label>
            <input
              type="url"
              name="imageUrl"
              // value=""
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex items-center mb-4">
            <input type="checkbox" name="isAvailable" className="mr-2" />
            <label className="text-gray-700">Available for borrowing</label>
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md"
          >
            Add Book
          </button>
        </form>
      </div>
    </PagesLayoutAdmin>
  );
};

export default AddBookForm;
