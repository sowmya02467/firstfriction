import React from "react";
import homeicon from "../assets/homeicon.png";
import searchicon from '../assets/searchicon.png';
import arr from '../assets/arr.png';

const Courses = () => {
  return (
    // header section
    <div className="w-full h-[921px] bg-white p-8">
    <header className="flex items-center justify-between">
      <div className="flex items-center space-x-2 ml-[102px]">
        <div className=" p-2 rounded-full">
          <img src={homeicon} alt="Home" className="w-6 h-6"/>
        </div>
        <span className="text-[24px]  font-bold">Home</span>
      </div>
      <button className="text-white px-4 py-2 rounded bg-[#022956] text-[16px] font-bold w-[236px] h-[42px] mr-[102px]">Get Started</button>
    </header>


    <div className=''>
    <h1 className="text-[40px] font-black font-Lato font-sans text-center mb-[25px] text-[#022956]">Explore Courses</h1>
    <p className="text-center text-[#F27329] text-[30px] font-semibold mb-8">
      Discover a variety of courses to advance your skills and knowledge.
    </p>
    </div>
    <div className='flex justify-between w-full h-[42px] mt-[50px]'>
  <div className="mb-8 max-w-lg inline-flex items-center w-[452px] h-[42px] border border-gray-600 rounded-full ml-[102px]">
    <img src={searchicon} alt="Search Icon" className="w-[20px] h-[20px] ml-[10px]" />
    <input
      type="text"
      placeholder="Search here"
      className="border-none outline-none w-[300px] h-[19px] rounded-lg shadow-2xl mr-[20px] ml-[20px]"
    />
  </div>
  <div className='mr-[104px] '>
    <button className="flex items-center bg-white border border-gray-600 px-4 py-2 rounded-full w-[159px] h-[42px]">
      <span>Sort</span>
      <img src={arr} alt="Arrow Icon" className="w-[11.13px] h-[7.13px] ml-[50px] " />
    </button>
  </div>
</div>


{/* Courses Grid */}
<div className="grid grid-cols-4 border-r border-b mt-[58px] ml-[96px]">
        {/* First row */}
        <div className="p-4 border-b border-r border-orange-600">
          <h2 className="text-[20px] font-semibold text-[#1D2228] mb-2">Code Career</h2>
          <ul className="list-none text-[#1D2228] text-[14px] mb-2 font-medium font-Lato font-sans">
            <li className="mb-2">Development</li>
            <li className="mb-2">Design</li>
            <li className="mb-2">Data Science & Analytics</li>
            <li className="mb-2">AI & ML</li>
            <li className="mb-2">More</li>
          </ul>
        </div>
        <div className="p-4 border-b border-r  border-orange-600">
          <h2 className="text-[20px] font-semibold text-[#1D2228] mb-2">Non-IT Career</h2>
          <ul className="list-none  text-[#1D2228] text-[14px] mb-2 font-medium font-Lato font-sans">
            <li className="mb-2">Mechanical Engineering</li>
            <li className="mb-2">Civil Engineering</li>
            <li className="mb-2">ECE</li>
            <li className="mb-2">EEE</li>
            <li className="mb-2">More</li>
          </ul>
        </div>
        <div className="p-4 border-b border-r  border-orange-600">
          <h2 className="text-[20px] font-semibold text-[#1D2228] mb-2">Nature Career</h2>
          <ul className="list-none  text-[#1D2228] text-[14px] mb-2 font-medium font-Lato font-sans">
            <li className="mb-2">Environmental Science</li>
            <li className="mb-2">Agriculture Technology</li>
            <li className="mb-2">Wildlife</li>
            <li className="mb-2">Botany</li>
            <li className="mb-2">More</li>
          </ul>
        </div>
        {/* Second row */}
        <div className="p-4 border-b border-0 border-t-0  border-orange-600">
          <h2 className="text-[20px] font-semibold text-[#1D2228] mb-2">Business Career</h2>
          <ul className="list-none  text-[#1D2228] text-[14px] mb-2 font-medium font-Lato font-sans">
            <li className="mb-2">Entrepreneurship</li>
            <li className="mb-2">Digital Marketing</li>
            <li className="mb-2">Finance & Accounting</li>
            <li className="mb-2">Project Management</li>
            <li className="mb-2">More</li>
          </ul>
        </div>
        <div className="p-4 border-0 border-r border-t-0  border-orange-600">
          <h2 className="text-[20px] font-semibold text-[#1D2228] mb-2">Lifestyle Career</h2>
          <ul className="list-none  text-[#1D2228] text-[14px] mb-2 font-medium font-Lato font-sans">
            <li className="mb-2">Health & Wellness</li>
            <li className="mb-2">Cooking</li>
            <li className="mb-2">Fashion Design</li>
            <li className="mb-2">Creative Arts</li>
            <li className="mb-2">More</li>
          </ul>
        </div>
        <div className="p-4 border-0 border-t-0 border-r  border-orange-600">
          <h2 className="text-[20px] font-semibold text-[#1D2228] mb-2">Competitive Exams</h2>
          <ul className="list-none  text-[#1D2228] text-[14px] mb-2 font-medium font-Lato font-sans">
            <li className="mb-2">Bank Exam</li>
            <li className="mb-2">SSC CGL</li>
            <li className="mb-2">GATE</li>
            <li className="mb-2">CLAT</li>
            <li className="mb-2">More</li>
          </ul>
        </div>
        {/* Third row */}
        <div className="p-4 border-0 border-t-0  border-orange-600">
          <h2 className="text-[20px] font-semibold text-[#1D2228] mb-2">Other</h2>
          <ul className="list-none  text-[#1D2228] text-[14px] mb-2 font-medium font-Lato font-sans">
            <li className="mb-2">Education</li>
            <li className="mb-2">Language Learning</li>
            <li className="mb-2">Law & Legal Studies</li>
            <li className="mb-2">Proptech</li>
            <li className="mb-2">Fintech</li>
          </ul>
        </div>
      </div>


</div>
  );
};

export default Courses;
