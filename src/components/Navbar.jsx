import { useNavigate } from "react-router-dom";

function Navbar({ getcategory }) {
  const navigate = useNavigate();
  return (
    <>
      <nav className="w-full h-[8rem] sm:h-[6rem] flex flex-col items-center gap-4 justify-center">
        <h1
          className="font-medium text-4xl font-PlayfairDisplay "
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          NewsToday
        </h1>
        <ul className="w-full grid grid-cols-3 grid-rows-1 sm:h-12 sm:flex sm:justify-evenly items-center border-2 border-t-gray-400 border-b-gray-400 font-serif font-medium">
          <li
            className="w-24  md:w-32 h-10 pt-2 rounded-lg hover:bg-white hover:text-black text-center cursor-pointer hover:scale-90 duration-150"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className="w-28 sm:w-32 h-10 pt-2 rounded-lg hover:bg-white hover:text-black text-center cursor-pointer hover:scale-90 duration-150"
            onClick={() => getcategory("entertainment")}
          >
            Entertainment
          </li>
          <li
            className="w-24 sm:w-32 h-10 pt-2  rounded-lg hover:bg-white hover:text-black text-center cursor-pointer hover:scale-90 duration-150 "
            onClick={() => getcategory("sports")}
          >
            Sports
          </li>
          <li
            className="w-24 sm:w-32 h-10 pt-2  rounded-lg hover:bg-white hover:text-black text-center cursor-pointer hover:scale-90 duration-150"
            onClick={() => getcategory("health")}
          >
            Health
          </li>
          <li
            className="w-24 sm:w-32 h-10 pt-2  rounded-lg hover:bg-white hover:text-black text-center cursor-pointer hover:scale-90 duration-150"
            onClick={() => getcategory("technology")}
          >
            Technology
          </li>
          <li
            className="w-24 sm:w-32 h-10 pt-2 rounded-lg hover:bg-white hover:text-black  text-center cursor-pointer hover:scale-90 duration-150"
            onClick={() => getcategory("tourism")}
          >
            Tourism
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
