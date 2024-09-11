import React from "react";
import friction from "../assets/friction.png";
import heart from "../assets/heart.png";
import cart from "../assets/cart.png";
import arr from "../assets/arr.png";
import newsearch from "../assets/newsearch.png"

function NewNavbars() {
  return (
    <div className="w-full h-auto mx-auto">
      <nav className="bg-white border-b border-gray-200">
        {/* Top Section: Logo, Search Bar, Login, Signup */}
        <div className="container mx-auto flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={friction}
              alt="FrictionLearn Logo"
              className="w-[194px] h-[101px] mt-[27px] ml-[50px]"
            />
          </div>

          {/* Search Bar */}
          <div className="flex items-center ">
            <div className="relative w-full mx-auto flex rounded-full border border-gray-300 focus-within:ring-1 focus-within:ring-black">
              {/* All Categories Dropdown */}
              <select className="pl-4 pr-4 py-2 bg-gray-100 text-[#241443] border-r border-gray-300 focus:outline-none focus:bg-white focus:border-gray-500 text-[16px] font-semibold text-Poppins rounded-l-full">
                <option>All Categories</option>
                {/* Add more options as needed */}
              </select>

              {/* Search Input */}
              <input
                type="text"
                className="flex-grow pl-20 pr-20 py-2 border-none  focus:outline-none focus:ring-0 text-[17px] font-semibold text-Poppins text-[#241443] placeholder-gray-400 rounded-full"
                placeholder="Find your courses, clubs, events etc...."
              />

              {/* Search Button */}
              <button className="flex items-center px-6 py-2 text-white text-[20px] font-semibold text-Poppins bg-[#241443] rounded-full hover:bg-[#3d2a71] transition-colors">
  <img src={newsearch} alt="Search" className="w-4 h-4 mr-2" />
  Search
</button>
            </div>
          </div>

          {/* User Actions: Login, Signup */}
          <div className="flex items-center space-x-2 mr-[80px]">
            <button className="px-4 py-2 text-white bg-[#241443] rounded-full w-[136px] h-[51px] text-[18px] font-semibold text-Poppins hover:bg-[#3d2a71] transition-colors">
              Log In
            </button>
            <button className="px-4 py-2 text-[#241443] border border-[#241443] rounded-full w-[136px] h-[51px] text-[18px] font-semibold text-Poppins hover:bg-[#f1f1f1] transition-colors">
              Sign Up
            </button>
          </div>
        </div>

        {/* Bottom Section: Navigation Links, Heart, Cart */}
        <div className="bg-white">
          <div className="flex justify-between items-center py-2 text-purple-800">
            {/* Navigation Links */}
            <div className="flex space-x-8 items-center mx-auto text-[#241443] font-Poppins font-semibold text-[23px]">
              <a href="#home" className="hover:underline">
                Home
              </a>
              <div className="flex">
                <a href="#courses" className="hover:underline">
                  Courses
                </a>
                <img
                  src={arr}
                  alt=""
                  className="w-[15px] h-[10px] ml-[8px] mt-[14px]"
                />
              </div>
              <a href="#about" className="hover:underline">
                About Us
              </a>
              <div className="flex">
                <a href="#services" className="hover:underline">
                  Services
                </a>
                <img
                  src={arr}
                  alt=""
                  className="w-[15px] h-[10px] ml-[8px] mt-[14px]"
                />
              </div>
              <a href="#contact" className="hover:underline">
                Contact Us
              </a>
            </div>

            {/* Icons: Heart and Cart */}
            {/* <div className="flex items-center space-x-8 mr-[200px]">
              <div className="relative">
                <img src={heart} alt="Wishlist" className="w-[31px] h-[26px]" />
                <span className="absolute -top-2 -left-2 bg-[#FFD70E] text-black text-xs rounded-full px-1">
                  0
                </span>
              </div>
              <div className="relative">
                <img src={cart} alt="Cart" className="w-[28px] h-[31px]" />
                <span className="absolute -top-2 -left-2 bg-[#FFD70E] text-black text-xs rounded-full px-1">
                  0
                </span>
              </div>
            </div> */}

<div className="flex items-center space-x-8 mr-[200px]">
  <div className="relative">
    <img src={heart} alt="Wishlist" className="w-[31px] h-[26px]" />
    <span className="absolute -top-2 -left-2 bg-[#FFD70E] text-black text-xs rounded-full px-1">
      0
    </span>
  </div>

  <div className="relative flex items-center">
    <img src={cart} alt="Cart" className="w-[28px] h-[31px]24" />
    <span className="absolute -top-2 -left-2 bg-[#FFD70E] text-black text-xs rounded-full px-1">
      0
    </span>
    <span className="ml-2 text-[#241443] font-semibold">$0.36</span>
  </div>
</div>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default NewNavbars;
