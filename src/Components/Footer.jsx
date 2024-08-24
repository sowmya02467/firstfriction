import React from "react";
// import logo from '../assets/logo.png';
import loo from '../assets/footerlogotwo.png';
// import icons from '../assets/footericons.png';
import mailiconone from '../assets/msg.png';
import mailicontwo from '../assets/cell.png';
import mailiconthree from '../assets/cro.png';

import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import linkedin from "../assets/lin.png";
import twitter from "../assets/twitter.png";
import crome from '../assets/browser.png';
// import browser from '../assets/browser.png';
import mails from '../assets/mail.png';







export default function Footer() {
  return (
    <div className="bg-[#022956] w-[full]   mr-[50px]container mx-auto ">
      <div className="flex justify-between gap-8 items-start w-100% mx-auto px-[104px] py-8 h-[264px] ">
        <div className="flex flex-col items-start">
          <img src={loo} alt="FrictionLearn Logo" className="mb-4  w-[150px] h-[79px] ml-[30px]" />
          <h5 className="text-white text-[14px] font-medium">Where Skills Meet Opportunity</h5>
        <div className="  flex flex-row   justify-between gap-[10px] mt-[20px]">


        <a href="https://www.FrictionLearn.com" target="_blank">
    <img src={fb} alt="Facebook Icon" className="w-[26px] h[26px]"/>
</a>

<a href="https://www.linkedin.com/company/frictionlearn/" target="_blank">
    <img src={linkedin} alt="LinkedIn Icon" className="w-[26px] h[26px]"/>
</a>


<a href="https://www.instagram.com/frictionlearn/?utm_source=qr&igsh=MTB1eHdrdGVlc3hieg%3D%3D" target="_blank">
    <img src={insta} alt="Instagram Icon" className="w-[26px] h[26px]"/>
</a>


<a href="https://www.google.com/chrome" target="_blank">
    <img src={crome} alt="Chrome Icon" className="w-[26px] h[26px]"/>
</a>

<a href="mailto:frictionlearn@gmail.com">
    <img src={mails} alt="Mail Icon" className="w-[26px] h[26px]"/>
</a>


<a href="https://www.twitter.com" target="_blank">
    <img src={twitter} alt="Twitter Icon" className="w-[26px] h[26px]"/>
</a>



        </div>




        </div>

        <div className="text-white flex flex-col items-start">
          <h4 className="mb-4 text-[24px] font-bold">Contact us</h4>
          <div className="flex items-center mb-2">
            <img src={mailiconone} alt="" className="mr-2 w-[19px] h-[15px]" />
            <p className="text-[15px] font-normal ">frictionlearn@gmail.com</p>
          </div>
          <div className="flex items-center mb-2">
            <img src={mailicontwo} alt="" className="mr-2   w-[19px] h-[15px]" />
            <p   className="text-[15px] font-norma">+91 93464 67553</p>
          </div>
          <div className="flex items-center">
            <img src={mailiconthree} alt="" className="mr-2   w-[19px] h-[15px]" />
            <p  className="text-[15px] font-normal">www.frictionlearn.com</p>
          </div>
        </div>

        <div className="text-white flex flex-col items-start">
          <h4 className="mb-4  text-[24px] font-bold">Office Address</h4>
          <p  className="text-[15px] font-normal text-start">
            L.B Nagar, <br />
            Hyderabad, Telangana 500068
          </p>
        </div>

        <div className="text-white flex flex-col items-start">
          <h3 className="mb-4   text-[24px] font-bold ">Subscribe to our Newsletter</h3>
          <div className="flex  w-[283px] h-[38px]">
            <input
              type="text"
              placeholder="*Enter your email"
              className=" placeholder:text-[#FFFFFF]  placeholder:text-[14px] font-normal p-2 rounded-l-md bg-[#022956] border-white border-solid border "
            />
            <button className="p-2 bg-white text-[#022956] rounded-r-md font-semibold text-[12px]">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="text-center text-white  text-[12px]">
       <p  className=" text-white  text-[12px] pb-[20px]"> © 2024 All rights reserved by DTR Technologies Private Limited</p>
      </div>
    </div>
  );
}