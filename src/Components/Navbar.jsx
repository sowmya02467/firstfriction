import React, { useState, useEffect } from "react";
import logo from '../assets/logo.png';
import searchicon from '../assets/searchicon.png';
import arr from '../assets/arr.png';

// Array of backgrounds and texts
const slides = [
  {
    backgroundImage: "url('../src/assets/backgroundimage.png')",
    title: "Are You Ready to Excel?",
    subtitle: "Challenge yourself with courses that push your boundaries."
  },
  {
    backgroundImage: "url('../src/assets/backgroundimgtwo.png')",
    title: "Can You Innovate Fearlessly",
    subtitle: "Transform your ideas into successful startups with our<br> incubation program."
  },
  {
    backgroundImage: "url('../src/assets/backgroundimgthree.png')",
    title: "Can You Shape Your Future?",
    subtitle: "Prepare yourself for the careers of tomorrow with our<br> tailored programs."
  },
  {
    backgroundImage: "url('../src/assets/backgroundimgfour.png')",
    title: "Will You Turn Vision into Victory?",
    subtitle: "Develop and launch your business with our expert<br> guidance and support."
  },
  // Add more slides as needed
];

export default function Navbar() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3000 milliseconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
<div className="w-[full] ">
  <div
    className="w-full h-[769px] bg-cover bg-center align-middle transition-all duration-1000"
    style={{ backgroundImage: slides[currentSlide].backgroundImage }}
  >
    <nav className="h-[95px] flex items-center "> {/* Added flex and items-center */}
          <div className="ml-[146px] mr-[47px] w-[157px] h-[64px]">
            <img
              src={logo}
              alt="friction learn logo"
              className="w-[157px] h-[64px]    transparent opacity-75" 
            />



          </div>

      {/* Element hidden on small screens and shown on screens 390px and wider */}
      <div
        style={{ display: window.innerWidth <= 390 ? 'none' : 'block' }}

      className=" flex justify-center items-center bg-white bg-opacity-75 rounded-md w-[790px] h-[62px] ml-[10px] ">
        <ul className="flex justify-between text-center gap-5 search mt-[-10px]">

        <li className="flex flex-col-reverse text-[#1D2228] text-[18px] font-bold ml-[20px] my-[28px]">
  <a href="Courses" className="flex items-center">
    Courses
    <img src={arr} alt="" className="w-[11.13px] h-[7.13px] ml-[10px]" />
  </a>
</li>

          <li className="text-[#1D2228] text-[18px] font-bold mr-[10px] ml-[10px] my-[28px]">
           <a href="Community"> Communities
            </a>
            </li>
          <li className="text-[#1D2228] text-[18px] font-bold my-[28px]">
           <a href="Incubation"> Incubation</a></li>

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

      {/* Element hidden on small screens and shown on screens 390px and wider */}
      <div
        style={{ display: window.innerWidth <= 390 ? 'none' : 'block' }}
      className="w-[261px] h-[64px] bg-[#FFFFFF] flex transparent opacity-75 rounded-md ml-[30px] hidden sm:flex">
        <button className="w-[236px] h-[42px] mt-[11px] mb-[11px] mr-[12px] ml-[12px] bg-[#022956] text-[#FFFFFF] text-[16px] font-bold rounded-md">
          Get Started
        </button>
      </div>
    </nav>

    <div className="relative ">
  <div className="text-center mt-[201px] ">
  <h2 className="text-[#FFFFFF] text-[40px] font-semibold sm:text-[20px] lg:text-[70px]">
        {slides[currentSlide].title}
        </h2>
    <h3 className="text-[#FFFFFF] lg:text-[40px]  lg:font-semibold 
    sm:text-[40px]
     lg:mt-[50px]" dangerouslySetInnerHTML={{ __html: slides[currentSlide].subtitle }}></h3>
  </div>
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