import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';
import searchicon from '../assets/searchicon.png';
import arr from '../assets/arr.png';
import backgroundImage1 from '../assets/backgroundimgone.png';
import backgroundImage2 from '../assets/backgroundimgfour.png';
import backgroundImage3 from '../assets/backgroundimgthree.png';
import backgroundImage4 from '../assets/backgroundimgtwo.png';
import Header from "./Header";

const slides = [
  {
    backgroundImage: backgroundImage1,
    title: "Are You Ready to Excel?",
    subtitle: "Challenge yourself with courses that push your <br>  boundaries."
  },
  {
    backgroundImage: backgroundImage2,
    title: "Can You Innovate Fearlessly",
    subtitle: "Transform your ideas into successful startups with our<br> incubation program."
  },
  {
    backgroundImage: backgroundImage3,
    title: "Can You Shape Your Future?",
    subtitle: "Prepare yourself for the careers of tomorrow with our<br> tailored programs."
  },
  {
    backgroundImage: backgroundImage4,
    title: "Will You Turn Vision into Victory?",
    subtitle: "Develop and launch your business with our expert<br> guidance and support."
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div
        className="w-full h-[769px] bg-cover bg-center align-middle transition-all duration-1000"
        style={{ backgroundImage: `url(${slides[currentSlide].backgroundImage})` }}
      >
        {/* <Header /> */}
        <nav className="h-[95px] flex items-center">
          <div className="ml-[146px] mr-[47px] w-[157px] h-[64px]  hidden sm:block md:visible lg:visible">
            <img
              src={logo}
              alt="friction learn logo"
              className="w-[157px] h-[64px] transparent opacity-75"
            />
          </div>

          <div
            style={{ display: window.innerWidth <= 390 ? 'none' : 'block' }}
            className="flex justify-center items-center bg-white bg-opacity-75 rounded-md w-[790px] h-[62px] ml-[10px]"
          >
            <ul className="flex justify-between text-center gap-5 search mt-[-10px]">
              <li className="flex flex-col-reverse text-[#1D2228] text-[18px] font-bold ml-[20px] my-[28px]">
                <a href="/Courses" className="flex items-center">
                  Courses
                  <img src={arr} alt="" className="w-[11.13px] h-[7.13px] ml-[10px]" />
                </a>
              </li>
              <li className="text-[#1D2228] text-[18px] font-bold mr-[10px] ml-[10px] my-[28px]">
                <a href="/Community">Communities</a>
              </li>
              <li className="text-[#1D2228] text-[18px] font-bold my-[28px]">
                <a href="/Incubation">Incubation</a>
              </li>
              <div className="inline-flex items-center bg-white rounded-2xl border border-solid border-cyan-400 opacity-25 w-[328.14px] h-[42px] my-[21px]">
                <img src={searchicon} alt="Search Icon" className="w-[20px] h-[20px] ml-[10px]" />
                <input
                  type="text"
                  placeholder="Search for Courses"
                  className="border-none outline-none w-[300px] h-[19px] rounded-lg shadow-2xl mr-[20px] ml-[20px]"
                />
              </div>
            </ul>
          </div>

          <div
            style={{ display: window.innerWidth <= 390 ? 'none' : 'block' }}
            className="w-[261px] h-[64px] bg-[#FFFFFF] flex transparent opacity-75 rounded-md ml-[30px] hidden sm:flex"
          >
            <button
              className="w-[236px] h-[42px] mt-[11px] mb-[11px] mr-[12px] ml-[12px] bg-[#022956] text-[#FFFFFF] text-[16px] font-bold rounded-md"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </button>
          </div>
        </nav>


        <nav className="bg-gray-800 p-4  block  sm:hidden">
      <div className="flex items-center justify-between">
        <div className="text-white text-xl">
          {/* <img src={} alt="" /> */}
          {/* <img src={} alt="" /> */}
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="/" className="text-white hover:text-gray-400">Home</a></li>
            <li><a href="#aboutus" className="text-white hover:text-gray-400">About</a></li>
            <li><a href="#services" className="text-white hover:text-gray-400">Services</a></li>
            <li><a href="#contact" className="text-white hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-2 mt-4">
            <li><a href="/" className="text-white hover:text-gray-400">Home</a></li>
            <li><a href="#about" className="text-white hover:text-gray-400">About</a></li>
            <li><a href="#services" className="text-white hover:text-gray-400">Services</a></li>
            <li><a href="#contact" className="text-white hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>







        <div className="relative text-center mt-[201px]">
          <h2 className="text-[#FFFFFF] text-[40px] font-semibold sm:text-[20px] lg:text-[70px]">
            {slides[currentSlide].title}
          </h2>
          <h3
            className="text-[#FFFFFF] lg:text-[40px] lg:font-semibold sm:text-[40px] lg:mt-[50px]"
            dangerouslySetInnerHTML={{ __html: slides[currentSlide].subtitle }}
          ></h3>
        </div>

        <div className="flex justify-center mt-[50px]">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-[10px] h-[10px] mx-[5px] mt-[50px] ${
                index === currentSlide ? 'bg-white' : 'bg-gray-400'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
