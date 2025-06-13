import PagesLayoutUser from "../layouts/PagesLayoutUser";
import { Link } from "react-router";
import img1 from "../assets/book-1.jpg";
import img2 from "../assets/book-2.jpg";
import img3 from "../assets/book-3.jpg";
import img4 from "../assets/book-4.jpg";
import lib from "../assets/lib.mp4";

const HomePage = () => {
  return (
    <>
      <PagesLayoutUser>
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            src={lib}
            className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
          ></video>

          {/* Black Overlay with Blur */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 //backdrop-blur-sm z-[-1]"></div>

          {/* Foreground Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
            {/* <h1 className="text-4xl md:text-6xl font-bold">
             <em className="//text-[#ffab40]"> Welcome</em> to Jubi Library
            </h1> */}
            <h1 className="text-4xl md:text-6xl font-bold">
             Welcome to Jubi Library
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Empowering Readers Everywhere
            </p>

            {/* Explore Books Button */}
            <div className="mt-12">
              <Link to="/books">
                <button className="bg-[#cbfb45] font-medium text-black rounded-full py-2 px-6 hover:bg-[#212419] hover:text-white transition duration-300">
                  Explore Books
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col  justify-center items-center pb-30 pt-20 bg-[#fffdf1] ">
          <div className="pb-10">
            <h1 className="text-[3rem] font-semibold mb-7  text-[#0c89d2] ">
              Most Popular Read Books
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 grow">
            <span>
              <img
                src={img2}
                alt=""
                className="w-100 transition duration-300 ease-in-out hover:scale-105"
              />
            </span>
            <span>
              <img
                src={img1}
                alt=""
                className="w-100 transition duration-300 ease-in-out hover:scale-105"
              />
            </span>
            <span>
              <img
                src={img3}
                alt=""
                className="w-100 transition duration-300 ease-in-out hover:scale-105"
              />
            </span>
            <span>
              <img
                src={img4}
                alt=""
                className="w-100 transition duration-300 ease-in-out hover:scale-105"
              />
            </span>
          </div>
        </div>
      </PagesLayoutUser>
    </>
  );
};

export default HomePage;
