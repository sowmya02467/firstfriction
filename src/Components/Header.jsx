import React from 'react'
import logo from '../assets/logo.png';
import searchicon from '../assets/searchicon.png';
import arr from '../assets/arr.png';
export default function Header() {
  return (
    <div>
          <nav className="h-[95px] flex items-center">
          <div className="ml-[146px] mr-[47px] w-[157px] h-[64px]">
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
    </div>
  )
}
