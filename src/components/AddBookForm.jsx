import React from "react";
import PagesLayoutAdmin from "../layouts/PagesLayoutAdmin";


const AddBookForm = () => {
  return (
    <div flex flex-row>
      <PagesLayoutAdmin>
        <div className="flex flex-row w-10xs text-center gap-2">

          <div className="foam"> 
            <h1 className="text-6xl font-sans">Welcome</h1>
             <p className="text-1.9xl font-sans">To our Library system</p>
          </div>
          
           
          

          <div>
            <h2 className="text-2xl font-bold text-center text-gray-800">AddBookForm</h2>
            <br></br>
            <p>message display</p>
            <br></br>

            <form className=" w-100  mx-auto p-4 bg-white shadow rounded">
              <div>
                <label className="block text-sm font-medium text-gray-700"> Title</label>
                <input type="text" placeholder="title" required className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <br />

              <div>
                <label className="block text-sm font-medium text-gray-700">Author</label>
                <input type="text" placeholder="publisher" required  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>

              <br />
              <div>
                <label className="block text-sm font-medium text-gray-700">Genre</label>
                <input type="text" placeholder="" required className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
              </div>

              <br />
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <input
                  type="textarea"
                  placeholder="Enter book decription"
                  required
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <br />

              <div>
                <label className="block text-sm font-medium text-gray-700">Year</label>
                <input type="number" placeholder="Year" required className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
              </div>
              <br />

              <div>
                <label className="block text-sm font-medium text-gray-700">Image</label>
                <input type="url" name="image" placeholder="Enter image here" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
              </div>

              <p>Availability:</p>
              <label>
                <input type="radio" name="availability" value="available" />
                Available
              </label>
              <br />
              <label>
                <input type="radio" name="availability" value="checked-out" />
                Checked Out
              </label>
              <br />
              <label>
                <input type="radio" name="availability" value="reserved" />
                Reserved
              </label>
              <div>
              <button className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200">submit</button>
              </div>
            </form>
          </div>
        </div>
      </PagesLayoutAdmin>
    </div>
  );
};

export default AddBookForm;
