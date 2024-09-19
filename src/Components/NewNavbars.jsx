import React ,{useState} from "react";
import friction from "../assets/friction.png";
import heart from "../assets/heart.png";
import cart from "../assets/cart.png";
import arr from "../assets/arr.png";
import newsearch from "../assets/newsearch.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom


function NewNavbars() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    
    <div className="w-full h-auto mx-auto">
    <nav className="bg-white border-b border-gray-200">
      {/* Top Section for Desktop and Mobile */}
      <div className="container mx-auto flex items-center justify-between py-3">
        <div className="md:hidden flex items-center justify-between">
          {/* Logo for Mobile */}
          <img src={friction} alt="FrictionLearn Logo" className="w-[138px] h-[69px]" />

          {/* Search Button */}
          <div className="flex items-center">
            <button className="flex items-center px-6 py-2 text-blue-600">
              <img src={newsearch} alt="Search" className="w-[32px] h-[32px] mr-2" />
            </button>
          </div>

          {/* Hamburger Menu */}
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Desktop: Logo (hidden on mobile) */}
        <div className="hidden md:flex items-center">
          <img
            src={friction}
            alt="FrictionLearn Logo"
            className="w-[194px] h-[101px] mt-[27px] ml-[50px]"
          />
        </div>

        {/* Search Bar (Visible on larger screens only) */}
        <div className="hidden md:flex items-center">
          <div className="relative w-full mx-auto flex rounded-full border border-gray-300 focus-within:ring-1 focus-within:ring-black">
            {/* All Categories Dropdown */}
            <select className="pl-4 pr-4 py-2 bg-gray-100 text-[#241443] border-r border-gray-300 focus:outline-none focus:bg-white focus:border-gray-500 text-[16px] font-semibold text-Poppins rounded-l-full">
              <option>All Categories</option>
              {/* Add more options as needed */}
            </select>

            {/* Search Input */}
            <input
              type="text"
              className="flex-grow pl-20 pr-20 py-2 border-none focus:outline-none focus:ring-0 text-[17px] font-semibold text-Poppins text-[#241443] placeholder-gray-400 rounded-full"
              placeholder="Find your courses, clubs, events etc...."
            />

            {/* Search Button */}
            <button className="flex items-center px-6 py-2 text-white text-[20px] font-semibold text-Poppins bg-[#241443] rounded-full hover:bg-[#3d2a71] transition-colors">
              <img src={newsearch} alt="Search" className="w-4 h-4 mr-2" />
              Search
            </button>
          </div>
        </div>

        {/* User Actions: Signup and Icons for Mobile */}

        {/* Desktop User Actions */}
        <div className="hidden md:flex items-center space-x-2 mr-[50px]">
          <button className="px-8 py-2 text-white bg-[#241443] rounded-full text-[18px] font-semibold text-Poppins hover:bg-[#3d2a71] transition-colors">
            Log In
          </button>
          <button className="px-8 py-2 text-[#241443] border border-[#241443] rounded-full text-[18px] font-semibold text-Poppins hover:bg-[#f1f1f1] transition-colors">
            Sign Up
          </button>
        </div>
      </div>

      {/* Cart and Heart Icons below Sign Up (Mobile Only) */}
      <div className="md:hidden flex justify-end space-x-4 ">
        <div className="relative">
          <img src={heart} alt="Wishlist" className="w-6 h-6" />
          <span className="absolute -top-2 -left-2 bg-[#FFD70E] text-black text-xs rounded-full px-1">
            0
          </span>
        </div>
        <div className="relative">
          <img src={cart} alt="Cart" className="w-6 h-6" />
          <span className="absolute -top-2 -left-2 bg-[#FFD70E] text-black text-xs rounded-full px-1">
            0
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4">
          <Link to="/" className="text-lg font-semibold text-[#241443] hover:underline">
            Home
          </Link>
          <Link to="/NewCourses" className="text-lg font-semibold text-[#241443] hover:underline">
            Courses
          </Link>
          <Link to="/Aboutus" className="text-lg font-semibold text-[#241443] hover:underline">
            About Us
          </Link>
          <Link to="/services" className="text-lg font-semibold text-[#241443] hover:underline">
            Services
          </Link>
          <Link to="/Signup" className="text-lg font-semibold text-[#241443] hover:underline">
            Contact Us
          </Link>
        </div>
      )}

      {/* Desktop Bottom Section: Navigation Links and Icons */}
      <div className="hidden md:flex justify-between items-center py-2 text-purple-800">
        {/* Navigation Links */}
        <div className="flex space-x-12 items-center mx-auto text-[#241443] font-Poppins font-semibold text-[23px]">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <div className="flex">
            <Link to="/Newcourses" className="hover:underline">
              Courses
            </Link>
            <img
              src={arr}
              alt=""
              className="w-[15px] h-[10px] ml-[8px] mt-[14px]"
            />
          </div>
          <Link to="/Aboutus" className="hover:underline">
            About Us
          </Link>
          <div className="relative">
      <div className="flex items-center">
        <Link to="/services" className="hover:underline">
          Services
        </Link>
        <img
          src={arr}
          alt=""
          className="w-[15px] h-[10px] ml-[8px] cursor-pointer"
          onClick={toggleDropdown} // Toggle dropdown on arrow click
        />
      </div>

      {/* Dropdown list */}
      {dropdownOpen && (
        <div className="absolute mt-2 bg-white shadow-md rounded-lg py-2 w-[200px] z-10">
          <ul>
            <li className="hover:bg-gray-100 px-4 py-2">
              <Link to="/NewCommunity">Community Section</Link>
            </li>
            <li className="hover:bg-gray-100 px-4 py-2">
              <Link to="/NewIncubation">Incubation Section</Link>
            </li>
            {/* Add more items as needed */}
          </ul>
        </div>
      )}
    </div>
          <Link to="/SignUp" className="hover:underline">
            Contact Us
          </Link>
        </div>

        {/* Desktop Icons */}
        <div className="flex items-center space-x-8 mr-[50px]">
          <div className="relative">
            <img src={heart} alt="Wishlist" className="w-[31px] h-[26px]" />
            <span className="absolute -top-2 -left-2 bg-[#FFD70E] text-black text-xs rounded-full px-1">
              0
            </span>
          </div>
          <div className="relative flex items-center">
            <img src={cart} alt="Cart" className="w-[28px] h-[31px]" />
            <span className="absolute -top-2 -left-2 bg-[#FFD70E] text-black text-xs rounded-full px-1">
              0
            </span>
            <span className="ml-2 text-[#241443] font-semibold">$0.36</span>
          </div>
        </div>
      </div>
    </nav>
    </div>

  );
}

export default NewNavbars;
