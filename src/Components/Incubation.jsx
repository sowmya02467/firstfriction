
import  React, {useState}  from "react";
import groupone from "../assets/grouponeinc.png";
import grouptwo from "../assets/grouptwoinc.png";
import groupthree from "../assets/groupthreeinc.png";
import Footer from "./Footer";
import Benefitstruride from "../assets/Benefitstruride.png";
import SectionIncub from "./SectionIncub";
import queryform from "../assets/queryform.png";
// import flogo from "../assets/flogo.png";
// import footercall from "../assets/footercall.png";
// import footercircle from "../assets/footercircle.png";
// import footerf from "../assets/footerf.png";
// import footerinsta from "../assets/footerinsta.png";
// import footerlinkd from "../assets/footerlinkd.png";
// import footermail from "../assets/footermail.png";
// import footerRmail from "../assets/footerRmail.png";
// import footertwi from "../assets/footertwi.png";
// import googlechrome from "../assets/googlechrome.png";
import headerbg from "../assets/headerbg.png";
import logo from "../assets/logo.png";
import incubation from "../assets/incubation.png";
// import howhelpone from "../assets/howhelpone.png";
// import howhelpfive from  "../assets/howhelpfive.png";
// import howhelptwo from "../assets/howhelptwo.png";
// import howhelpthree from "../assets/howhelpthree.png";
// import howhelpfour from "../assets/howhelpfour.png";
import closeicon from '../assets/vone.png';
import searchicon from '../assets/searchicon.png';
import Sectionincub from "./SectionIncub";

import arr from '../assets/arr.png';

export default function Incubation() {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };










  // const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="h-screen w-full items-center justify-center">
      <div 
        style={{ backgroundImage: `url(${headerbg})` }}
        className="h-[729px] w-full bg-cover bg-center">

        {/* navbar */}

        <nav className=" h-[95px] w-full ">
        <div className="max-w-7xl mx-[104px] px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 bg-opacity-75 ">
                  <img
                    className="h-[64px] w-[157px] mr-[47px] mt-[16px]  transparent opacity-75"
                    src={logo}
                    alt="FrictionLearn"
                  />
                </div>
                <div className="relative inline-flex items-center mt-[16px] w-[402px] h-[64px] text-center mx-[32px]  transparent opacity-75">
                  <div className="flex border rounded-md bg-white">
                  <li className="flex flex-col-reverse text-[#1D2228] text-[18px] font-bold ml-[20px] my-[18px]">
  <a href="/Courses" className="flex items-center">
    Courses
    <img src={arr} alt="" className="w-[11.13px] h-[7.13px] ml-[10px]" />
  </a>
</li>
                    <a
                      href="/Community"
                      className="text-[#1D2228] px-8 py-4 font-bold text-[18px] hover:bg-gray-300"
                    >
                    Communities
                    </a>
                    <a
                      href="#"
                      className="text-orange-500 px-8 py-4 font-bold text-[18px] hover:bg-gray-300"
                    >
                      Incubation
                    </a>
                  </div>
                </div>
              </div>
              {/* serach icom */}

               <div className="flex justify-end mt-5   ml-[110px] mr-[-70px]  w-[529px]  ">
  <div className={`relative flex items-center justify-end ml-[140px] bg-white bg-opacity-75 rounded-md h-[64px] px-4 ${isOpen ? 'w-[529px]' : 'w-[240px]'}`}>
    <div
      className={`flex items-center rounded-2xl border border-solid             transition-all duration-300 mr-[10px] ${isOpen ? 'w-[350px]' : 'w-[40px]'} h-[42px] ml-auto`}
      style={{ position: 'relative' }}
    >
      <img
        src={searchicon}
        alt="Search Icon"
        className="w-[20px] h-[20px] ml-2 cursor-pointer"
        onClick={handleToggle}
        style={{ order: 1 }}
      />
      <input
        type="text"
        placeholder="Search here"
        className={`border-none outline-none h-full transition-all duration-300   rounded-full  ${isOpen ? 'w-[312px] px-4' : 'w-0 px-0'}`}
        style={{ order: 2 }}
      />
      <img
        src={closeicon}
        alt="Close Icon"
        className="w-[20px] h-[20px] ml-2 cursor-pointer"
        onClick={handleToggle}
        style={{ order: 3, visibility: isOpen ? 'visible' : 'hidden' }}
      />
    </div>
    <button className=" w-[202px] h-[42px]   px-[20px] py-[10px] bg-[#022956] text-white rounded-md">Join Community</button>
  </div>
  
 </div> 


              </div>
            </div>
          
        </nav>

        {/* header   */}

        <div className=" mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className=" text-[71px] font-black text-white sm:text-5xl lg:text-6xl mt-[167px] mb-[36px]">
            Accelerate Your Startup Journey
          </h1>
          <p className="text-[35px] text-gray-300 font-semibold font-Lato font-sans mb-[103px]">
            Empowering innovators with resources, mentorship, and funding to
            succeed
          </p>
          <div className="mt-[103px]">
            <button className="bg-orange-500  text-white w-[219px] h-[52px] rounded-md font-bold text-[22px] font-Lato font-sans ">
              Join Incubation
            </button>
          </div>
        </div>
      </div>

      {/* what is incubation */}
    

       <div className="w-full h-[898px] mx-auto"> 
        <h1 className="font-bold text-[40px] text-[#022956] text-center mt-[61px]">
          
          What is Incubation
        </h1>
        <p className="font-semibold text-[28px] text-[#F27329] text-center mt-[38px]">
          Incubation provides startups with mentorship, resources, networking,
          and <br />
          funding to accelerate growth.
        </p>
        <div className="flex justify-center">
          <img
            src={incubation}
            alt="incubation"
            className="w-[787px] h-[512px]  mt-[98px]"
          ></img>
        </div>
      </div> 


      {/* how incubation work */}

      <SectionIncub />
 

    {/* why incubation section*/}

    <div className="w-full h-[730px] mx-auto p-4 flex flex-col items-center">
        <div className="text-center ">
          <h1 className="text-[40px] text-[#022956] font-bold mb-8">
            Why Incubation
          </h1>
          <p className="text-[28px] font-semibold text-[#F27329]  mt-[39px] mb-[132px]">
            Understand the vital benefits of incubation for startup growth.
          </p>
        </div>
        <div className="flex justify-center gap-[169px]  mx-[125px]">
          <div className="flex flex-col items-center">
            <img
              src={groupone}
              alt="groupone"
              className="w-[271px] h-[203px] mb-[68px] "
            />
            <p className="text-center text-[24px] font-medium">
              Gain insights and advice from
               seasoned industry leaders.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={grouptwo} alt="grouptwo" className=" w-[271px] h-[203px] mb-[68px]" />
            <p className="text-center text-[24px] font-medium">
              Utilize top-notch tools, tech,
               and facilities for growth.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={groupthree} alt="groupthree" className=" w-[271px] h-[203px] mb-[68px]" />
            <p className="text-center text-[24px] font-medium">
              Connect with investors, peers, 
              and potential partners effectively.
            </p>
          </div>
        </div>
    </div>

      {/* benifits of incubation section */}

      {/* <div className="w-[1440px] h-[1025px] mx-auto p-4 flex flex-col items-cente mt-[61px]">
        <div className="text-center mb-8">
          <h1 className="text-[40px] font-bold  text-[#022956] mb-[20px]">Benefits of Incubation </h1>
          <p className="text-[28px] font-semibold text-[#F27329] mb-[174px]">
            Unlock key advantages that drive startup success through incubation
          </p>
        </div>
        <div className="text-center">
          <img
            src={Benefitstruride}
            alt="Benefitstruride"
            className=" w-[1013px] h-[512px]"
          ></img>
        </div>
      </div>
         */}

      <div className="w-full h-auto mx-auto p-4 flex flex-col items-center mt-[61px]">
        <div className="text-center mb-8">
          <h1 className="text-[40px] font-black text-[#022956] mb-[20px]">
            Benefits of Incubation
          </h1>
          <p className="text-[28px] font-semibold text-[#F27329] mb-[146px]">
            Unlock key advantages that drive startup success through incubation
          </p>
        </div>
        <div className="text-center  mx-[107px]">
          <img
            src={Benefitstruride}
            alt="Benefitstruride"
            className="w-[1013px] h-[512px] max-w-none mb-[65px]"
          />
        </div>
      </div>

      {/* Query form section */}

      <div className="w-full h-[1160px]">
        <div className="text-center mt-[77px]">
          <h1 className="text-[40px] text-[#022956] font-black mb-[20px]">
            Query Form
          </h1>
          <p className="font-semibold text-[28px] text-[#F27329] mb-[66px]">
            Unlock key advantages that drive startup success through incubation
          </p>
        </div>

        <div className="flex  justify-center mx-[230px]">
          {/* left side */}
          <div className="flex flex-col flex-1 items-left ml-[230px]">
            <label
              htmlFor="name"
              className="block text-[#022956] text-[22px] font-semibold mb-[12px]"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-[440px] h-[52px] border border-[#022956] rounded-md mb-[33px]"
            />

            <label
              htmlFor="email"
              className="block text-[#022956] text-[22px] font-semibold  mb-[12px]"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-[440px] h-[52px] border border-[#022956] rounded-md mb-[33px]"
            />

            <label
              htmlFor="college-name"
              className="block text-[#022956] text-[22px] font-semibold  mb-[12px]"
            >
              College Name
            </label>
            <input
              type="text"
              id="college-name"
              className="w-[440px] h-[52px] border border-[#022956] rounded-md mb-[33px]"
            />

            <label
              htmlFor="student-or-other"
              className="block text-[#022956] text-[22px] font-semibold  mb-[12px]"
            >
              Student or Other
            </label>
            <input
              type="text"
              id="student-or-other"
              className="w-[440px] h-[52px] border border-[#022956] rounded-md  mb-[33px]"
            />

            <label
              htmlFor="message"
              className="block text-[#022956] text-[22px] font-semibold  mb-[12px]"
            >
              Message
            </label>
            <input
              type="text"
              id="message"
              className="w-[440px] h-[185px] border border-[#022956] rounded-md  mb-[33px]"
            />
            <div className=" flex justify-center">
              <button
                type="submit"
                className="w-[190px] h-[50px] text-white py-2 rounded-md bg-[#022956] mt-[20px] "
              >
                Submit
              </button>
            </div>
          </div>

          {/* right side */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={queryform}
              alt="Query Form"
              className="w-[455px] h-[711px]"
            />
          </div>
        </div>
      </div>

      {/* Footer section */}

      {/* <div className="w-full bg-[#022956] mt-[63px] py-[44px]">
        <div className="container mx-auto flex flex-wrap justify-between items-start px-4">
          <div className="flex flex-col items-start mx-auto mb-[25px]">
            <img
              src={flogo}
              alt="frictionlogo"
              className="w-[44px] h-[37px] mb-[10px]"
            />
            <p className="text-[23px] font-bold text-[#FFFFFF] mb-[10px]">
              FrictionLearn
            </p>
            <p className="font-medium text-[14px] text-[#FFFFFF] mb-[25px]">
              Where Skills Meet Opportunity
            </p>
            <div className="flex gap-[18px]">
              <img src={footerf} alt="facebook" className="w-[26px] h-[26px]" />
              <img
                src={footerlinkd}
                alt="linkedin"
                className="w-[26px] h-[26px]"
              />
              <img
                src={footerinsta}
                alt="instagram"
                className="w-[26px] h-[26px]"
              />
              <img
                src={footerRmail}
                alt="mailbox"
                className="w-[26px] h-[26px]"
              />
              <img
                src={googlechrome}
                alt="chrome"
                className="w-[26px] h-[26px]"
              />
              <img
                src={footertwi}
                alt="twitter"
                className="w-[26px] h-[26px]"
              />
            </div>
          </div>

          <div className="flex flex-col items-start mx-auto mb-[25px]">
            <h1 className="font-bold text-[24px] text-[#FFFFFF] mb-[21px]">
              Contact us
            </h1>
            <div className="flex gap-[10px] mb-[10px]">
              <img src={footermail} alt="mail" className="w-[19px] h-[15px]" />
              <p className="text-[15px] text-[#FFFFFF]">
                contact@frictionlearn.com
              </p>
            </div>
            <div className="flex gap-[10px] mb-[10px]">
              <img src={footercall} alt="call" className="w-[19px] h-[15px]" />
              <p className="text-[15px] text-[#FFFFFF]">+91 93464 67553</p>
            </div>
            <div className="flex gap-[10px]">
              <img
                src={footercircle}
                alt="circle"
                className="w-[19px] h-[15px]"
              />
              <p className="text-[15px] text-[#FFFFFF]">
                www.frictionlearn.com
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start mx-auto mb-[25px]">
            <h1 className="font-bold text-[24px] text-[#FFFFFF] mb-[21px]">
              Office Address
            </h1>
            <p className="text-[15px] text-[#FFFFFF]">
              H.no-3-11-368/Flat no; 401,
              <br />
              4th Floor, above old Indusind
              <br />
              Finance Bank, Back side of
              <br />
              Axis Bank, L.B Nagar,
              <br />
              Hyderabad, Telangana 500068
            </p>
          </div>

          <div className="flex flex-col items-start mx-auto">
            <h1 className="font-bold text-[24px] text-[#FFFFFF] mb-[28px]">
              Subscribe to our Newsletter
            </h1>
            <div className="flex">
              <input
                placeholder=" Enter your email "
                className="px-2 py-1 w-[200px] h-[37px] border border-[#022956] bg-white"
              />
              <button className="h-[37px] w-[90px] p-2 border border-[#022956] bg-white text-[#022956] flex items-center justify-center">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}
