import { useNavigate, useParams } from "react-router";
import PagesLayoutAdmin from "../layouts/PagesLayoutAdmin";
import { FaBook } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import axios from "axios";

const EditBookForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [book, setBook] = useState({});
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchSingleBook = async () => {
    setLoading(true);

    try {
      const res = await axios.get(
        `https://jubi-back-end.onrender.com/books/${params.id}`
      );

      setBook(res.data.matchBook);

      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    // prevent form refreshing
    e.preventDefault();

    console.log(formData);

    const payload = {
      title: formData.title ?? book?.title,
      author: formData.author ?? book?.author,
      genre: formData.genre ?? book?.genre,
      description: formData.description ?? book?.description,
      year: formData.year ?? book?.year,
      imageUrl: formData.imageUrl ?? book?.imageUrl,
      isAvailable: book.isAvailable,
    };

    try {
      const res = await axios.put(
        `https://jubi-back-end.onrender.com/books/${params.id}`,
        payload
      );

      alert("Added successfuly");
      navigate("/books");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleBook();
  }, []);

  return (
    <PagesLayoutAdmin>
      <div className="bg-[#161614ee] p-3 min-h-screen">
        <form
          className="bg-white p-6 rounded-lg shadow-md m-20"
          onSubmit={handleSubmit}
        >
          <h3 className="text-xl font-semibold mb-4 text-[#00a63e] flex">
            Edit New Book <FaBook className="w-6 h-6" />
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData?.title ?? book?.title}
                onChange={(e) =>
                  setFormData((prev) => {
                    return { ...prev, tittle: e.target.value };
                  })
                }
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Author:</label>
              <input
                type="text"
                name="author"
                value={formData?.author ?? book?.author}
                onChange={(e) =>
                  setFormData((prev) => {
                    return { ...prev, author: e.target.value };
                  })
                }
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Genre</label>
              <input
                type="text"
                name="genre"
                value={formData?.genre ?? book?.genre}
                onChange={(e) =>
                  setFormData((prev) => {
                    return { ...prev, genre: e.target.value };
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Year</label>
              <input
                type="number"
                name="year"
                value={formData?.year ?? book?.year}
                onChange={(e) =>
                  setFormData((prev) => {
                    return { ...prev, year: e.target.value };
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={formData?.description ?? book?.description}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, description: e.target.value };
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows="3"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Cover Image URL</label>
            <input
              type="url"
              name="imageUrl"
              value={formData?.imageUrl ?? book?.imageUrl}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, imageUrl: e.target.value };
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="isAvailable"
              className="mr-2"
              value={book.isAvailable ? "on" : "off"}
            />
            <label className="text-gray-700">Available for borrowing</label>
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md"
          >
            Save Changes
          </button>
        </form>
      </div>
    </PagesLayoutAdmin>
  );
};

export default EditBookForm;
