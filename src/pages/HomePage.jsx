import PagesLayoutUser from "../layouts/PagesLayoutUser";
import libimg1 from "../assets/library-cuate.png"
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div>
      <PagesLayoutUser >
      <div className="//bg-gradient-to-br min-h-screen flex flex-col items-center justify-center px-6 py-16" >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-5xl font-extrabold text-[#ee6c39] leading-tight mb-6 animate-fade-in-up">
            Welcome to <span className="text-[#263238]">Jubi Library</span>
          </h1>
          <p className="text-gray-700 text-lg mb-8 animate-fade-in-up delay-200">
            Discover a world of knowledge, explore rare collections, and
            dive into the stories that shape minds and futures. Jubi Library
            is more than a place — it's an experience.
          </p>
        </div>

      
          <img src={libimg1} alt="Library Illustration" className="rounded-xl //shadow-lg max-w-md w-full" />
       
      </div>

      {/* Explore Books Button (Centered Below) */}
      <div className="mt-12">
        <Link to={"/books"}>
        <button className="bg-[#cbfb45] font-medium text-black rounded-[2rem] border-amber-200 py-[10px] px-[1.5em] mr-10 hover:bg-[#212419] hover:text-[#ffff] ">
          Explore Books
        </button>
        </Link>
      </div>
    </div>
      </PagesLayoutUser>
    </div>
  );
};

export default HomePage;
