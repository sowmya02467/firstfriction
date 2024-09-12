import React, { useState } from 'react'
// import SectionTwo from "./SectionTwo";
import content from '../assets/Content.png';
import award from '../assets/award.png';
import bookimg from '../assets/bookimg.png';
import bulbimg from '../assets/bulbimg.png';

import aboutskillimg from "../assets/aboutskillimg.png";
import arrow from '../assets/arrow.png';

import mindgoalimgone from '../assets/maingoaltwo.png';
import mindgoalimgtwo from '../assets/maingoalimg.png';
import goalimgones from '../assets/goalimgone.png';
import goalimgtwo from '../assets/goalimgtwo.png';
import maingoalscircle from "../assets/maingoalsimg.png";

import whydoprojectone from '../assets/whydoprojectone.png';
import whydoprojecttwo from '../assets/whydoprojecttwo.png';
import whydoprojectthree from '../assets/whydoprojectthree.png';

import passportimage from '../assets/passportimage.png';
import correct from '../assets/correct.png';
import mentor from '../assets/mentor.png';


import elevenone from '../assets/mentorone.png';
import eleventwo from '../assets/mentortwo.png';

import elevensix from '../assets/mentorthree.png';

import tenone from '../assets/tenone.png';
import tentwo from '../assets/tentwo.png';
import tenthree from '../assets/tenthree.png';
import tenfour from '../assets/tenfour.png';
import tenfive from '../assets/tenfive.png';
import tensix from '../assets/tensix.png';


import groupone from '../assets/group.png';
import grouponeone from '../assets/groupone.png'
import grouptwo from '../assets/grouptwo.png';
import groupthree from '../assets/groupthree.png';
import group from '../assets/groupfour.png';

import sectionthreeimage1 from '../assets/sectionthreeimgone.png';
import sectionthreeimage2 from '../assets/sectionthreeimgtwo.png';
import sectionthreeimage3 from '../assets/sectionthreeimgthree.png';
import sectionthreeimage4 from '../assets/sectionthreeimgfour.png';
import sectionthreeimage5 from '../assets/sectionthreeimgfour.png';


import sectionFourimgone from '../assets/sfourone.png';
import sectionFourimgtwo from '../assets/sfourtwo.png';
import SectionTwo from './SectionTwo';
import Section from './Section';
import Footer from './Footer';
import starImage from '../assets/star.png';


import sectioneleventhone from "../assets/sectioneleventhone.png";
import sectioneleventhtwo from "../assets/sectioneleventhtwo.png";
import sectionelevenththree from "../assets/sectionelevenththree.png";
import sectioneleventhfour from "../assets/sectioneleventhfour.png";



import sectionfifth from "../assets/sectionfifth.png";
import sectionfifthone from "../assets/sectionfifthone.png";
import sectionfifthtwo from "../assets/sectionfifthtwo.png";
import sectionfifththree from "../assets/sectionfifththree.png";
import sectionfifthfour from "../assets/sectionfifthfour.png";
import sectionfifthfive from "../assets/sectionfifthfive.png";
import arrowone from "../assets/arrow.png";


// why choose us images 
import righticon from "../assets/righticon.png";
import choose from "../assets/choose.png";
import NewNavbars from './NewNavbars';
import NewHeader from './NewHeader';
import backgroundImage from '../assets/perplebackgroundimg.png';







const contents = [
  {
    title: 'Practical Skill Development',
    description: 'Gain real-world experience solving practical problems and building a portfolio.',
    img: group
  },
  {
    title: 'AI-Powered Learning Support',
    description: 'Enhance your learning experience with personalized, AI-driven educational support.',
    img: groupone
  },
  {
    title: 'Earn Your Certification with Gamification',
    description: 'Earn certifications to showcase expertise and enhance your professional qualifications.',
    img: grouponeone
  },
  {
    title: 'Real-Time Progress Tracking',
    description: 'Monitor your learning journey with instant updates on your course achievements and milestones.',
    img: grouptwo
  },
  {
    title: 'Events with Industry Leaders',
    description: 'Network with peers, industry leaders, and mentors through vibrant clubs, communities, and engaging events.',
    img: groupthree
  }
];


const images = [
  sectionthreeimage1,
  sectionthreeimage2,
  sectionthreeimage3,
  sectionthreeimage4,
  sectionthreeimage5
];

const collaborators = [
  tenone,
  tentwo,
  tenthree,
  tenfour,
  tenfive,
  tensix,
];

export default function NewHomepage() {
  const [hoveredImageIndex, setHoveredImageIndex] = useState(0);





















  return (



    // navbar section one
    <div className='w-full'>


      {/* navbar section */}
      <NewNavbars />



      {/* new heade seema */}

      <NewHeader />







      {/* section two */}


      <section className=" dark:bg-gray-900 ">
        <div className="py-4 px-4 mx-auto max-w-screen-lg lg:py-8">
          <div className="relative flex justify-center items-center h-[60px]  bg-center" >
            <h1 className="text-[30px] font-black text-[#FF5C00]">What We Offer</h1>
          </div>
          <p
            className="text-center  lg:text-[40px] sm:text-[20px] md:text-[30px]  text-[21px] font-semibold text-[#241443] 
  sm:font-semibold md:font-medium lg:font-semibold sm:w-[390px] md:w-full sm:h-auto"
          >
            Unlock Your Potential: Growth, Creativity, <br /> and Collaboration at FrictionLearn
          </p>





          <img
            src={content}
            alt=""
            className="align-middle w-full  mt-[50px]    
         
          
          "
          />
        </div>



      </section>





      {/* section three*/}

      <section className="w-full sm:h-auto sm:mb-[120px] ">

        <div className="flex justify-center items-center text-center mt-[182px]">
          <h2 className="text-[#FF5C00] text-[23px]  sm:font-semibold  lg:text-[40px] font-semibold text-center font-poppines">
            Trusted By Over <span className="text-[#241443]">13400+</span> Students & Organizations<br></br>
            Recommended Around the World
          </h2>
        </div>

        <div className="overflow-hidden whitespace-nowrap  mt-[100px]">
          <div className="inline-block animate-scroll ">
            {collaborators.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`logo ${index + 1}`}
                className="inline-block mx-4"
                style={{ height: '80px', width: 'auto', margin: '0 100px' }} // Adjust size as needed
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex  flex-col justify-center items-center text-center mt-[182px]">
            <h2 className="text-[#FF5C00] text-[30px] font-black text-center font-poppines">
              About Us
            </h2>
            <h2 className="text-[#241443] lg:text-[40px] mt-[20px] px-1 sm:text-[23px] text-[22px] font-bold text-center font-poppines">
              Empowering Minds, Shaping <br></br> FuturesMeet the FrictionLearn Plan
            </h2>
          </div>

          {/* <div className="parent flex flex-row justify-around mx-[85px] mt-[120px] space-x-7">
              <div className="childleft   w-[670px] ">
                <h2 className="text-[#022956] text-[75px] font-black text-start font-poppines line-height-[90px]">
                  About
                  FrictionLearn
                </h2>
                <h6 className="text-[#022956] text-[21px] font-bold font-poppines line-height-[32px]">Driven by the mission to make quality education accessible to all</h6>
                <p className="text-[#241443] text-[20px] font-medium font-poppines line-height-[32px]  mt-[20px]"> FrictionLearn is a gamified e-learning platform designed to bridge the gap between learners and industry experts. Through dynamic, personalized tasks, we provide an engaging and interactive learning journey aimed at enhancing skills and career growth. Our mission is to create a seamless learning experience that empowers users to achieve their goals with ease and innovation.</p>

                <div className="flex flex-row items-center mt-[73px] ml-[220px]">
                  <button className="w-[214px] h-[62px] bg-[#F27329] rounded-full text-[#ffffff] text-[18px] font-medium font-poppines flex flex-row justify-center items-center">
                    <span>Learn More</span>
                    <img src={arrow} alt="" className="w-[26px] h-[18px] ml-2" />
                  </button>
                </div>


              </div>
              <div className="childright  mt-[55px]">
                <img src={aboutskillimg} alt=""  className=' w-[606px] h-[606px]' />
              </div>
            </div> */}

          {/* this code is responsive and web also correct code */}
          <div className="parent flex flex-col lg:flex-row justify-around mx-[20px] md:mx-[40px] lg:mx-[85px] mt-[40px] md:mt-[80px] lg:mt-[120px] space-y-7 lg:space-y-0 lg:space-x-7">
            <div className="childleft w-full md:w-[90%] lg:w-[670px]">
              <h2 className="text-[#241443] text-[40px] md:text-[60px] lg:text-[75px] font-black text-start font-lato leading-[45px] md:leading-[75px] lg:leading-[90px]">
                About FrictionLearn
              </h2>
              <h6 className="text-[#000000] text-[16px] md:text-[21px] font-bold font-poppines leading-[24px] md:leading-[32px]">
                Driven by the mission to make quality education accessible to all
              </h6>
              <p className="text-[#241443] text-[14px] md:text-[18px] lg:text-[20px] font-medium font-poppines leading-[22px] md:leading-[28px] lg:leading-[32px] mt-[20px]">
                FrictionLearn is a gamified e-learning platform designed to bridge the gap between learners and industry experts. Through dynamic, personalized tasks, we provide an engaging and interactive learning journey aimed at enhancing skills and career growth. Our mission is to create a seamless learning experience that empowers users to achieve their goals with ease and innovation.
              </p>

              <div className="flex justify-center lg:justify-start mt-[40px] md:mt-[60px] lg:mt-[73px]">
                <button className="w-[180px] md:w-[214px] h-[50px] md:h-[62px] bg-[#FF5C00] rounded-full text-[#ffffff] text-[16px] md:text-[18px] font-medium font-poppines flex items-center justify-center">
                  <span>Learn More</span>
                  <img src={arrow} alt="" className="w-[20px] md:w-[26px] h-[14px] md:h-[18px] ml-2" />
                </button>
              </div>
            </div>

            <div className="childright mt-[40px] md:mt-[55px] flex justify-center lg:justify-end">
              <img src={aboutskillimg} alt="About Skill" className="w-[300px] md:w-[500px] lg:w-[606px] h-auto" />
            </div>
          </div>

        </div>

      </section>



      {/* sectionfour */}

      {/* what our mind goal new design */}


      {/* <section  className="w-full h-[840px]  mt-[120px]  ">


          <div className="heading flex justify-center items-center text-center ">
            <h2 className="text-[#F27329] text-[30px] font-semibold text-center font-poppines">
              What’s Our Main Goal
            </h2>

          </div>

          <div className="parent  flex flex-row mt-[65px]">


            <div className="childleft  w-[700px] ml-[104px] gap-0">

              <div className="grid grid-cols-2  space-x-0 gap-10">
                <div className="one bg-[#FFCC1F] w-[246px] h-[200px] rounded-3xl">
                  <h2 className="text-[#022956] text-[30px] font-black text-center mt-[40px] font-poppines line-height-[90px]">
                    8+ Years of
                    Experience
                  </h2>
                </div>
                <div className="two w-[246px] h-[356px]   rounded-3xl"> <img src={goalimgones} alt="" /></div>

                <div className="two w-[246px] h-[356px]  rounded-3xl mt-[-150px] ">
                  <img src={goalimgtwo} alt="" />
                </div>
                <div className="one w-[246px] h-[200px] rounded-3xl">
                  <img src="" alt="" />
                  <div className="one w-[126px]">
                    <h2 className="text-[#022956] text-[40px] font-black text-center mt-[40px] font-poppines line-height-[90px]">
                      32k+

                    </h2>
                    <p className="text-[#022956] text-[30px] font-medium text-center mt-[40px] font-poppines line-height-[90px]">Positive Reviews</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="childright  w-[771px]">
              <h2 className="text-[#022956] text-[40px] font-bold text-start font-poppines">
                Take the Next Step Towards Your
                Personal And Professional Goals With
                FrictionLearn
              </h2>
              <p className="text-[#241443] text-[20px] font-medium font-poppines line-height-[32px]  mt-[20px]">Take the next step towards achieving your Personal & Professional
                aspirations <br></br>with FrictionLearn. In a world that demands constant growth & adaptability, FrictionLearn is your trusted partner on the Journey to success.</p>

              <div className="subpsrent  mt-[50px]">
                <div className="childone flex flex-row mb-[30px]">
                  <img src={mindgoalimgone} alt="" className="w-[123px] h-[126px]" />
                  <div className="subchild w-[428px] text-start  ml-[20px]">
                    <h2 className="text-[#F27329] text-[30px] font-bold text-start font-poppines ">
                      Learn From Experts
                    </h2>
                    <p className=" text-[#241443] text-[15px] font-medium font-poppines line-height-[32px]  mt-[10px]">Learn directly from industry experts, gaining valuable<br></br> insights, hands-on experience, and practical<br></br> knowledge
                    </p>
                  </div>
                </div>






                <div className="childtwo flex flex-row ">
                  <img src={mindgoalimgtwo} alt="" className="w-[123px] h-[126px]" />
                  <div className="subchild  w-[428px]  ml-[20px]">
                    <h2 className="text-[#F27329] text-[30px] font-bold text-start font-poppines  ">
                      Video Tutorial
                    </h2>
                    <p className="  text-[#241443] text-[15px] font-medium font-poppines line-height-[32px]  mt-[10px]">Comprehensive video tutorials designed to simplify<br></br> complex topics, making learning engaging and<br></br> accessible anywhere
                    </p></div>
                </div>
              </div>
            </div>
          </div>



        
</section> */}

      <section className="w-full h-auto mt-[40px] sm:mt-[120px] md:mt-[120px] lg:mt-[40px]">
        <div className="heading flex justify-center items-center text-center">
          <h2 className="text-[#FF5C00] text-[24px] md:text-[30px] font-black font-poppines">
            What’s Our Main Goal
          </h2>
        </div>

        <div className="parent flex flex-col  space-x-7 lg:flex-row mt-[40px] md:mt-[65px] px-4 ">

          <div className="childleft  w-full lg:w-[700px] mt-[40px] lg:mt-0 ml-0  order-1 sm:order-1 lg:order-1">
            <div className="grid grid-cols-2 gap-4 md:gap-10">
              <div className="one bg-[#FFCC1F] w-full h-[150px] md:h-[200px] rounded-3xl flex items-center justify-center">
                <h2 className="text-[#022956] text-[20px] md:text-[30px] font-black text-center font-poppines">
                  8+ Years of Experience
                </h2>
              </div>
              <div className="two w-full h-[300px] md:h-[356px] rounded-3xl">
                <img src={goalimgones} alt="" />
              </div>
              <div className="two w-full h-[300px] md:h-[356px] rounded-3xl mt-[-120px] md:mt-[-150px]">
                <img src={goalimgtwo} alt="" />
              </div>
              <div className="one  w-full h-[150px] md:h-[150px]   gap-0  mt-[80px]    rounded-3xl flex flex-row items-center justify-around ">
                <img src={maingoalscircle} alt="" className='w-[72px] h-[74px]  ml-[20px]' />
                <div>
                  <h2 className="text-[#022956] text-[30px] font-black text-center font-poppines">
                    32k+
                  </h2>
                  <p className="text-[#022956] text-[15px] md:text-[20px]  font-poppines font-medium text-center">
                    Positive Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="childright  w-full lg:w-[771px] order-1 sm:order-2 lg:order-1 pr-2 px-0 ">
            <h2 className="text-[#241443] text-[24px] sm:text-[20px] md:text-[20px] lg:text-[40px] font-bold text-start font-poppines">
              Take the Next Step Towards Your Personal And Professional Goals With FrictionLearn
            </h2>
            <p className="text-[#241443] text-[16px] md:text-[18px] lg:text-[20px] font-medium font-poppines leading-[24px] md:leading-[28px] lg:leading-[32px] mt-[20px]">
              Take the next step towards achieving your Personal & Professional aspirations with FrictionLearn. In a world that demands constant growth & adaptability, FrictionLearn is your trusted partner on the Journey to success.
            </p>
            <div className="subparent mt-[30px] md:mt-[40px] lg:mt-[50px]  ">

              <div className="childone flex flex-col-1 mb-[30px] ">
                <img src={mindgoalimgone} alt="" className="w-[100px] md:w-[123px] h-[100px] md:h-[126px]" />
                <div className="subchild text-start  md:ml-[10px] mt-[10px]  ml-[10px]">
                  <h2 className="text-[#FF5C00] text-[20px] md:text-[25px] lg:text-[30px] font-bold font-poppines">
                    Learn From Experts
                  </h2>
                  <p className="text-[#241443] text-[14px] md:text-[15px] font-medium font-poppines leading-[22px] md:leading-[28px] lg:leading-[32px] mt-[10px]">
                    Learn directly from industry experts, gaining valuable<br></br> insights, hands-on experience, and practical<br></br> knowledge.
                  </p>
                </div>
              </div>


              <div className="childtwo flex flex-col-1 mt-[30px] ">
                <img src={mindgoalimgtwo} alt="" className="w-[100px] md:w-[123px] h-[100px] md:h-[126px]  mr-[20px]" />
                <div className="subchild text-start md:ml-[20px] mt-[10px]  ml-[10px]">
                  <h2 className="text-[#FF5C00] text-[20px] md:text-[25px] lg:text-[30px] font-bold font-poppines">
                    Video Tutorial
                  </h2>
                  <p className="text-[#241443] text-[14px] md:text-[15px] font-medium font-poppines leading-[22px] md:leading-[28px] lg:leading-[32px] mt-[10px]">
                    Comprehensive video tutorials designed to simplify complex topics, making learning engaging and accessible anywhere.
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>





      {/* sectionsfive*/}


      <SectionTwo />


      {/* seema top class courses */}
      {/* section six */}



      <section>

        <div className="bg-white py-20 px-6 lg:px-16">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h3 className="text-[#FF5C00] text-[30px] font-black font-Lato">
              Top Class Courses
            </h3>
            <h2 className="text-[36px] lg:text-[40px] font-semibold text-[#241443] mt-4">
              Explore 40,000+ Free Gamified Online<br /> Courses
            </h2>
            <p className="mt-6 text-[21px] text-[#241443] font-medium leading-relaxed">
              Take the next step towards achieving your personal & professional aspirations with FrictionLearn.
            </p>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Art & Design */}
            <div className="flex items-center border rounded-lg p-6 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg h-[166px] w-full hover:border-[#B3A7FA]">
              <div className="flex-shrink-0">
                <div className="w-[80px] h-[80px] rounded-full bg-[#B3A7FA] flex items-center justify-center">
                  <img src={sectionfifth} alt="Art & Design Icon" className="w-[40px] h-[40px]" />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-[23px] font-semibold text-[#241443] font-Poppins">
                  Art & Design
                </h3>
                <p className="text-[#000000] text-[15px] font-Poppins">8 Courses</p>
              </div>
            </div>

            {/* Business */}
            <div className="flex items-center border rounded-lg p-6 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg h-[166px] w-full hover:border-[#F7847C]">
              <div className="flex-shrink-0">
                <div className="w-[80px] h-[80px] rounded-full bg-[#F7847C] flex items-center justify-center">
                  <img src={sectionfifthone} alt="Business Icon" className="w-[40px] h-[40px]" />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-[23px] font-semibold text-[#241443] font-Poppins">
                  Business
                </h3>
                <p className="text-[#000000] text-[15px] font-Poppins">11 Courses</p>
              </div>
            </div>

            {/* Development */}
            <div className="flex items-center border rounded-lg p-6 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg h-[166px] w-full hover:border-[#5FD2CC]">
              <div className="flex-shrink-0">
                <div className="w-[80px] h-[80px] rounded-full bg-[#5FD2CC] flex items-center justify-center">
                  <img src={sectionfifthtwo} alt="Development Icon" className="w-[40px] h-[40px]" />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-[23px] font-semibold text-[#241443] font-Poppins">
                  Development
                </h3>
                <p className="text-[#000000] text-[15px] font-Poppins">8 Courses</p>
              </div>
            </div>

            {/* Data Science */}
            <div className="flex items-center border rounded-lg p-6 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg h-[166px] w-full hover:border-[#FFAF41]">
              <div className="flex-shrink-0">
                <div className="w-[80px] h-[80px] rounded-full bg-[#FFAF41] flex items-center justify-center">
                  <img src={sectionfifththree} alt="Data Science Icon" className="w-[40px] h-[40px]" />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-[23px] font-semibold text-[#241443] font-Poppins">
                  Data Science
                </h3>
                <p className="text-[#000000] text-[15px] font-Poppins">8 Courses</p>
              </div>
            </div>

            {/* Finance & Market */}
            <div className="flex items-center border rounded-lg p-6 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg h-[166px] w-full hover:border-[#F78ED8]">
              <div className="flex-shrink-0">
                <div className="w-[80px] h-[80px] rounded-full bg-[#F78ED8] flex items-center justify-center">
                  <img src={sectionfifthfour} alt="Finance & Market Icon" className="w-[40px] h-[40px]" />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-[23px] font-semibold text-[#241443] font-Poppins">
                  Finance & Market
                </h3>
                <p className="text-[#000000] text-[15px] font-Poppins">25 Courses</p>
              </div>
            </div>

            {/* Technology */}
            <div className="flex items-center border rounded-lg p-6 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg h-[166px] w-full hover:border-[#59CDFE]">
              <div className="flex-shrink-0">
                <div className="w-[80px] h-[80px] rounded-full bg-[#59CDFE] flex items-center justify-center">
                  <img src={sectionfifthfive} alt="Technology Icon" className="w-[40px] h-[40px]" />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-[23px] font-semibold text-[#241443] font-Poppins">
                  Technology
                </h3>
                <p className="text-[#000000] text-[15px] font-Poppins">5 Courses</p>
              </div>
            </div>
          </div>

          {/* Explore More Button */}
          <div className="text-center mt-16">
            <p className="mb-4 text-gray-500">& Many more</p>
            <div className="">
              <a
                href="#"
                className="inline-flex bg-[#FF5C00] text-white px-6 py-3 text-[20px] rounded-full shadow-md hover:bg-orange-600 transition"
              >
                Explore All

                <img src={arrowone} alt="Arrow" className="w-4 h-3 ml-3 mt-1" />
              </a></div>
          </div>
        </div>
      </section>









      {/* section seven */}

      {/* 
<section   className="w-full h-[780px] mb-[20px]    ">

          <div className="mt-[82px] flex justify-center text-center md:flex-initial">
            <h2 className="text-[#022956] font-bold text-[22px] text-center lg:text-start lg:text-[40px] mb-[20px]">
              Training designed to meet your goals.
            </h2>
          </div>
          <div className="mt-[49px] flex flex-col justify-around sm:flex-row">
            <div className="left section">
              {contents.map((content, index) => (
                <div
                  key={index}
                  className={`w-full sm:w-[498px] h-auto sm:h-[119px] shadow-lg flex flex-col sm:flex-row cursor-pointer ${index === hoveredImageIndex ? 'border-2 border-orange-500' : ''} ${index > 0 ? 'mt-[23px]' : ''}`}
                  onMouseEnter={() => setHoveredImageIndex(index)}
                >
                  <img src={content.img} alt="" className="w-[48px] h-[48px] justify-center mt-[20px] sm:mt-[38px] ml-[32px]" />
                  <div className="ml-[23px] text-start">
                    <h3 className="text-[#F27329] text-[18px] font-semibold mt-[15px] font-lato,sans">{content.title}</h3>
                    <p className="text-[#1D2228] text-[14px] font-normal mt-[8px]">{content.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-[20px] sm:mt-0">
              <img src={images[hoveredImageIndex]} alt="Selected" className="w-full sm:w-[707px] h-auto sm:h-[697px] ml-0 sm:ml-[26px]" />
            </div>
          </div>
        

</section> */}





      {/* purple  section eight*/}

      {/* 
<section   className="purple  w-full h-[344px] bg-[#241443] mt-[100px] ">

          <div className="parent flex flex-row  justify-evenly ">


            <div className="one  flex flex-row w-[361px] h-[72px]  mt-[120px]">
              <img src={bookimg} alt="" className="w-[137px] h-[68px] mt-[10px]" />

              <div className="subchild w-[428px] text-start  ml-[20px]">
                <h2 className="text-[#FFFFFF] text-[18px] font-bold text-start font-poppines ">
                  Get Achieve New Levels
                </h2>
                <p className=" text-[#ffffff] text-[12px] font-medium font-poppines line-height-[32px]  mt-[10px]">
                  Unlock New Heights with every
                  Stepforward
                </p>
              </div>
            </div>



            <div className="one  flex flex-row w-[361px] h-[72px]    mt-[120px]">
              <img src={bulbimg} alt="" className="w-[52px] h-[57px] mt-[10px]" />

              <div className="subchild w-[428px] text-start  ml-[20px]">
                <h2 className="text-[#FFFFFF] text-[18px] font-bold text-start font-poppines ">
                  Learn in Gamified way
                </h2>
                <p className=" text-[#ffffff] text-[12px] font-medium font-poppines line-height-[32px]  mt-[10px]">Making learning Fun & Effective to<br></br>
                  boost your career growth in heights
                </p>
              </div>
            </div>


            <div className="one  flex flex-row w-[361px] h-[72px]   mt-[120px]">
              <img src={award} alt="" className="w-[56px] h-[57px] mt-[10px]" />

              <div className="subchild w-[428px] text-start  ml-[20px]">
                <h2 className="text-[#FFFFFF] text-[18px] font-bold text-start font-poppines ">
                  Award Winning Team
                </h2>
                <p className=" text-[#ffffff] text-[12px] font-medium font-poppines line-height-[32px]  mt-[10px]">Recognized for Excellence & Innovation<br></br>
                  to deliver the Outstanding results
                </p>
              </div>
            </div>

          </div>
        


</section> */}
      {/*      
     <section className="purple w-full h-auto sm:h-auto md:h-[auto] lg:h-[344px] bg-[#241443] mt-[100px]">

<div className="parent flex flex-col sm:flex-row flex-wrap justify-around sm:justify-between">

  <div className="one flex flex-col sm:flex-row items-center justify-center w-full sm:w-[361px] h-auto sm:h-[72px] mt-[20px] sm:mt-[120px]">
    <img src={bookimg} alt="" className="w-[137px] h-[68px] mb-[10px] sm:mb-0" />
    <div className="subchild w-full sm:w-[428px] text-center sm:text-start ml-0 sm:ml-[20px] mt-[10px]">
      <h2 className="text-[#FFFFFF] text-[18px] font-bold text-center sm:text-start font-poppines">
        Get Achieve New Levels
      </h2>
      <p className="text-[#ffffff] text-[12px] font-medium font-poppines leading-[32px] mt-[10px]">
        Unlock New Heights with every Stepforward
      </p>
    </div>
  </div>

  <div className="one flex flex-col sm:flex-row items-center justify-center w-full sm:w-[361px] h-auto sm:h-[72px] mt-[20px] sm:mt-[120px]">
    <img src={bulbimg} alt="" className="w-[52px] h-[57px] mb-[10px] sm:mb-0" />
    <div className="subchild w-full sm:w-[428px] text-center sm:text-start ml-0 sm:ml-[20px] mt-[10px]">
      <h2 className="text-[#FFFFFF] text-[18px] font-bold text-center sm:text-start font-poppines">
        Learn in Gamified way
      </h2>
      <p className="text-[#ffffff] text-[12px] font-medium font-poppines leading-[32px] mt-[10px]">
        Making learning Fun & Effective to<br />
        boost your career growth in heights
      </p>
    </div>
  </div>

  <div className="one flex flex-col sm:flex-row items-center justify-center w-full sm:w-[361px] h-auto sm:h-[72px] mt-[20px] sm:mt-[120px]">
    <img src={award} alt="" className="w-[56px] h-[57px] mb-[10px] sm:mb-0" />
    <div className="subchild w-full sm:w-[428px] text-center sm:text-start ml-0 sm:ml-[20px] mt-[10px]">
      <h2 className="text-[#FFFFFF] text-[18px] font-bold text-center sm:text-start font-poppines">
        Award Winning Team
      </h2>
      <p className="text-[#ffffff] text-[12px] font-medium font-poppines leading-[32px] mt-[10px]">
        Recognized for Excellence & Innovation<br />
        to deliver the Outstanding results
      </p>
    </div>
  </div>

</div>

</section> */}

      <section
        className="purple w-full h-auto sm:h-auto md:h-auto lg:h-[344px] bg-[#241443] mt-[100px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="parent flex flex-col sm:flex-row flex-wrap justify-around sm:justify-around gap-y-6 sm:gap-x-6">

          <div className="one flex sm:flex-col md:flex-row items-center justify-center w-full sm:w-[361px] h-auto sm:h-[72px] mt-[20px] sm:mt-[120px]">

            <img src={bookimg} alt="" className="w-[137px] h-[68px] mb-[10px] sm:mb-0" />
            <div className="subchild w-full sm:w-[428px] text-center sm:text-start ml-0 sm:ml-[20px] mt-[10px]">
              <h2 className="text-[#FFFFFF] text-[18px] font-bold text-center sm:text-start font-poppines">
                Get Achieve New Levels
              </h2>
              <p className="text-[#ffffff] text-[12px] font-medium font-poppines leading-[32px] mt-[10px]">
                Unlock New Heights with every Stepforward
              </p>
            </div>
          </div>

          <div className="one flex sm:flex-col md:flex-row items-center justify-center w-full sm:w-[361px] h-auto sm:h-[72px] mt-[20px] sm:mt-[120px]  ">

            <img src={bulbimg} alt="" className="w-[52px] h-[57px] mb-[10px] sm:mb-0   ml-[30px] sm:ml-[60px]   " />

            <div className="subchild w-full sm:w-[428px] text-center sm:text-start ml-0 sm:ml-[20px] mt-[10px]">
              <h2 className="text-[#FFFFFF] text-[18px] font-bold text-center sm:text-start font-poppines">
                Learn in Gamified way
              </h2>
              <p className="text-[#ffffff] text-[12px] font-medium font-poppines leading-[32px] mt-[10px]">
                Making learning Fun & Effective to<br />
                boost your career growth in heights
              </p>
            </div>
          </div>

          <div className="one flex sm:flex-col md:flex-row items-center justify-center w-full sm:w-[361px] h-auto sm:h-[72px] mt-[20px] sm:mt-[120px] ">

            <img src={award} alt="" className="w-[56px] h-[57px] mb-[10px] sm:mb-0     ml-[30px] sm:ml-[40px]" />
            <div className="subchild w-full sm:w-[428px] text-center sm:text-start ml-0 sm:ml-[20px] mt-[10px]">
              <h2 className="text-[#FFFFFF] text-[18px] font-bold text-center sm:text-start font-poppines">
                Award Winning Team
              </h2>
              <p className="text-[#ffffff] text-[12px] font-medium font-poppines leading-[32px] mt-[10px]">
                Recognized for Excellence & Innovation<br />
                to deliver the Outstanding results
              </p>
            </div>
          </div>
        </div>
      </section>










      {/* section nine tvs */}
      <section className="w-full h-auto mx-0 mt-[82px] min-w-screen-lg  px-4">

        <div className="flex flex-col justify-center text-center">
          <h2 className="text-[#FF5C00] mt-[52px]  text-[21px] sm:text-[30px] lg:text-[40px]   text-Poppins  font-black">Our Strategic Success Framework</h2>
          <h3 className=" px-1 sm:px-2 text-[24px] sm:text-[38px] lg:text-[40px]   text-Poppins text-center text-[#241443] font-bold mt-[10px]">
            Experience the Structure, Embrace the Success
          </h3>
        </div>



        <div className="space-y-[50px] md:space-y-[160px]">
          {/* <!-- First section --> */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-5 lg:flex-row lg:justify-evenly lg:space-x-9 lg:mt-[50px]">
            <div className="content flex flex-col justify-center lg:text-center sm:text-start md:text-start md:order-1">
              <h2 className="text-[#241443]  px-1    ml-0 sm:ml-20  mt-1 sm:mt-20 sm:px-4 text-[18px] sm:text-[30px] lg:text-[40px]   text-Poppins  lg:text-center font-semibold font-sans font-lato w-full md:w-[616px] sm:text-start md:text-start">
                1. Engaging Learning Experience
              </h2>
              <p className=" lg:mt-[10px] lg:ml-[100px]   text-[15px] sm:text-[30px] lg:text-[22px] lg:w-[535px]  sm:ml-20  sm:mt-[-15px] text-Poppins  text-centerfont-medium text-[#FF5C00] mt-[31px] md:ml-[16px]   lg:text-center sm:text-start md:text-start">
                "FrictionLearn” transforms traditional education into an engaging, fun, and motivating gamified learning journey".
              </p>
            </div>
            <div className="md:order-2">
              <img src={sectionFourimgone} alt="" className="w-full lg:w-[500px] lg:h-[304px] object-cover mt-[20px] lg:mt-0" />
            </div>
          </div>


          {/* <!-- Second section --> */}
          <div className="flex flex-col-reverse lg:flex-row justify-evenly    lg:ml-[80px] lg:space-x-9 lg:mt-[50px] md:space-x-0 md:space-y-[50px]">
  <div>
    <img src={sectionFourimgtwo} alt="" className="w-full lg:w-[500px] lg:h-[304px] object-cover  mt-[20px] lg:mt-0" />
  </div>

  <div className="content flex flex-col justify-center sm:text-end md:text-end lg:text-center md:mt-[20px] lg:mt-0 lg:mr-0">
    <h2 className="text-[#241443] px-1 mt-1  lg:mr-[20px] ml-0 sm:ml-20 sm:mt-20 sm:px-4 text-[18px] sm:text-[30px] lg:text-[40px] font-semibold w-full md:w-[616px] sm:text-end md:text-end lg:text-center">
      2. Structured Course Levels:
    </h2>
    <p dir="rtl" className="text-[15px] sm:text-[30px]  lg:w-[535px] lg:mt-[10px]  lg:ml-[100px]    mr-0 sm:mr-20 lg:text-[22px] sm:mt-[-15px] font-medium text-[#FF5C00] mt-[31px] sm:text-end md:text-end lg:text-center">
  Our 24-level courses, spanning 1st to 3rd year, guide students in exploring career paths and offer welcome kits.
</p>

  </div>
</div>


          {/* <!-- Third section --> */}

          <div className="flex flex-col md:flex-row md:items-center md:space-x-5 lg:flex-row lg:justify-evenly lg:space-x-9 lg:mt-[50px]  ">
            <div className="content flex flex-col justify-center lg:text-center md:order-1">
              <h2 className="text-[#241443]  px-1     ml-0 sm:ml-20  mt-1 sm:mt-20 sm:px-4 text-[18px] sm:text-[30px] lg:text-[40px]   text-Poppins  lg:text-center font-semibold font-sans font-lato w-full md:w-[616px] sm:text-start md:text-start">

                3. AI-Focused Learning Support:
              </h2>
              <p className=" lg:mt-[10px]   text-[15px] sm:text-[30px] lg:text-[22px] lg:w-[535px]  lg:ml-[100px]  sm:ml-20 sm:mt-[-15px] text-Poppins  lg:text-center font-medium text-[#FF5C00] mt-[31px] md:ml-[16px]   sm:text-end md:text-end">
                FrictionLearn uses dedicated own AI to clarify doubts  and offer personalized support, enhancing students
              </p>
            </div>
            <div className="md:order-2">
              <img src={sectionFourimgone} alt="" className="w-full lg:w-[500px] lg:h-[304px] object-cover mt-[20px] lg:mt-0" />
            </div>
          </div>


          {/* <!-- Fourth section --> */}
          <div className="flex flex-col-reverse lg:flex-row lg:justify-evenly lg:space-x-9 lg:mt-[50px] md:space-x-0 sm:mt-[-50px]">
  <div>
    <img src={sectionFourimgtwo} alt="" className="w-full lg:w-[500px] lg:h-[304px] object-cover mt-[-20px] lg:mt-0" />
  </div>
  <div className="content flex flex-col justify-center lg:text-center mt-0 md:ml-0 w-full md:w-[572px] h-[219px]">
    <h2 className="text-[#241443] px-1  lg:w-[624px]   sm:ml-20  lg:ml-[-30px]  mt-0 sm:mt-[-80px] text-[18px] sm:text-[30px] lg:text-[40px] text-Poppins lg:text-center font-semibold font-sans w-full md:w-[616px] sm:text-start md:text-start">
      4. Incubation for Idea Generators:
    </h2>
    <p dir="rtl" className="text-[15px] sm:text-[30px] lg:text-[22px] lg:mt-[10px] ml-0    lg:w-[535px] mr-2 sm:mr-20 sm:mt-[-15px] font-medium text-[#FF5C00] mt-[31px] sm:text-end md:text-end lg:text-center">
      Starting in the second year, our Incubation programs offer mentorship and resources to turn students' innovative ideas into reality.
    </p>
  </div>
</div>

        </div>

      </section>





      {/* section ten */}
      {/* why do projects */}

      {/* <section  className="whydoprojects w-[full] h-[620px]  ">

          <div className="flex  flex-col justify-center items-center text-center mt-[182px]">
            <h2 className="text-[#F27329] text-[30px] font-semibold text-center font-poppines">
              Why do Projects
            </h2>
            <h2 className="text-[#022956] text-[40px] font-bold text-center font-poppines">
              Doing this Projects will Gain Hands-On real<br></br> World Project Experience with <span className="text-[#F27329] text-[30px] ">Friction</span>Learn
            </h2>
          </div>

          <div className="parent flex flex-row  justify-evenly ">


            <div className="one  flex flex-col w-[389px] h-[294px]  mt-[90px]   border-gray-950 shadow-md rounded-lg">
              <img src={whydoprojectone} alt="" className="w-[76px] h-[77px] mt-[60px] ml-[160px] mb-[20px]" />

              <div className="subchild w-[428px] text-center  ml-[-20px] ">
                <h2 className="text-[#000000] text-[18px] font-bold text-center font-poppines ">
                  Become Job Ready
                </h2>
                <p className=" text-[#000000] text-[12px] font-medium font-poppines line-height-[32px] text-center mt-[10px]">
                  Kickstart Your Career by Building Stellar
                  Proof of Work
                </p>
              </div>
            </div>

            <div className="one  flex flex-col w-[389px] h-[294px]  mt-[90px]   border-gray-950 shadow-md rounded-lg">
              <img src={whydoprojecttwo} alt="" className="w-[69px] h-[69px] mt-[60px] ml-[160px] mb-[20px]" />

              <div className="subchild w-[428px] text-center ml-[-20px]">
                <h2 className="text-[#000000] text-[18px] font-bold text-center font-poppines ">
                  Learn By Doing
                </h2>
                <p className=" text-[#000000] text-[12px] font-medium font-poppines line-height-[32px] text-center mt-[10px]">
                  Upskill By Building Hands-On Projects
                  with Levelwise
                </p>
              </div>
            </div>

            <div className="one  flex flex-col w-[389px] h-[294px]  mt-[90px]   border-gray-950 shadow-md rounded-lg">
              <img src={whydoprojectthree} alt="" className="w-[51px] h-[71px]  mt-[60px] ml-[160px]  mb-[20px]" />

              <div className="subchild w-[428px] text-center  ml-[-20px] ">
                <h2 className="text-[#000000] text-[18px] font-bold text-center font-poppines ">
                  Become Job Ready
                </h2>
                <p className=" text-[#000000] text-[12px] font-medium font-poppines line-height-[32px] text-center mt-[10px]">
                  Kickstart Your Career by Building Stellar
                  Proof of Work
                </p>
              </div>
            </div>


          </div>






      
</section> */}

      <section className="whydoprojects w-full sm:h-auto  mt-[80px]">

        <div className="flex flex-col justify-center items-center text-center mt-[182px] sm:mt-[40px]">
          <h2 className="text-[#FF5C00] text-[30px] font-black text-center font-poppines">
            Why do Projects
          </h2>
          <h2 className="text-[#241443]  px-1 sm:px-4 text-[28px] sm:text-[30px] lg:text-[40px]   text-Poppins font-bold text-center">
            Doing this Projects will Gain Hands-On real World Project Experience with <span className="text-[#FF5C00]  px-1 sm:px-4 text-[25px] sm:text-[30px] lg:text-[40px]   text-Poppins font-bold text-center">Friction</span>Learn
          </h2>
        </div>

        <div className="parent flex flex-row  flex-wrap gap-6  justify-evenly sm:justify-center">

          <div className="one flex flex-col lg:w-[389px]  sm:w-[330px] min-h-[0] mt-[90px] sm:mt-[20px] p-[10px]  border border-white-950 shadow-md rounded-lg   shadow-[#874BF640]">
            <img src={whydoprojectone} alt="" className="w-[76px] h-[77px] mt-[60px] mx-auto mb-[20px]" />

            <div className="subchild w-[330px] text-center">
              <h2 className="text-[#241443] text-[23px] font-bold text-center font-poppines">
                Become Job Ready
              </h2>
              <p className="text-[#FF5C00] text-[16px] font-medium font-poppines leading-[32px] mt-[10px]">
                Kickstart Your Career by Building Stellar<br></br> Proof of Work
              </p>
            </div>
          </div>

          <div className="one flex flex-col w-[389px] min-h-[0] mt-[90px] sm:mt-[20px] p-[10px] border  border-white-950 shadow-md rounded-lg  shadow-[#1E8C6040]">
            <img src={whydoprojecttwo} alt="" className="w-[69px] h-[69px] mt-[60px] mx-auto mb-[20px]" />

            <div className="subchild w-full text-center">
              <h2 className="text-[#241443] text-[23px] font-bold text-center font-poppines">
                Learn By Doing
              </h2>
              <p className="text-[#FF5C00] text-[16px] font-medium font-poppines leading-[32px] mt-[10px]">
                Upskill By Building Hands-On Projects<br></br> with Levelwise
              </p>
            </div>
          </div>

          <div className="one flex flex-col w-[389px] min-h-[0] mt-[90px] sm:mt-[20px] p-[10px] border  border-white-950 shadow-md rounded-lg  shadow-[#FFD40040]">
            <img src={whydoprojectthree} alt="" className="w-[51px] h-[71px] mt-[60px] mx-auto mb-[20px]" />

            <div className="subchild w-full text-center">
              <h2 className="text-[#241443] text-[23px] font-bold text-center font-poppines">
                Become Job Ready
              </h2>
              <p className="text-[#FF5C00] text-[16px] font-medium font-poppines leading-[32px] mt-[10px]">
                Kickstart Your Career by Building Stellar<br></br> Proof of Work
              </p>
            </div>
          </div>


        </div>

        <div className="flex flex-row justify-center mt-[73px] sm:ml-0 sm:mt-[40px]">
          <button className="w-[262px] h-[62px] bg-[#FF5C00] rounded-full text-[#ffffff] text-[18px] font-medium font-poppines flex flex-row justify-center items-center">
            <span>Explore Projects</span>
            <img src={arrow} alt="" className="w-[26px] h-[18px] ml-2" />
          </button>
        </div>

      </section>








      {/* section eleven */}

      {/* passport section new one */}
      {/* <section  className="main  w-full h-[1000px]  " >
         

<div className="flex  flex-col justify-center items-center text-center mt-[182px]">
  <h2 className="text-[#F27329] text-[30px] font-semibold text-center font-poppines">
    Our Career Passport/License
  </h2>
  <h2 className="text-[#022956] text-[40px] font-bold text-center font-poppines">
    Digitize your resume, unlock opportunities, and <br></br>streamline placements with our tech-driven<br></br> passport
  </h2>
</div>



<div className="parent  flex flex-row justify-between mt-[100px] ">



  <div className="childleft   ml-[104px]">
    <h6 className="text-[#F27329] text-[21px] font-bold font-poppines line-height-[32px]  text-start">Benefits of Passport/License</h6>
    <p className="text-[#241443] w-[689px] h-[96] text-[20px] font-medium font-poppines line-height-[32px] text-start mt-[20px]"> FrictionLearn’s Career Passport empowers students by validating their skills through a 4-level assessment. Upon completion, students receive a digital license with a QR code linking to their resume and a personalized job page, streamlining job opportunities and enhancing visibility within the platform</p>


    <div className="allpoints flex flex-col-2  gap-16  mt-[69px]">


      <div className="space-y-8">
        <div className="points  flex flex-row  gap-3">
          <img src={correct} alt="" className="w-[26px] h-[26px]" />
          <h4 className="text-[22px] text-[#022956]  font-medium"> "Verified Career Credentials"</h4>
        </div>

        <div className="points  flex flex-row   gap-3">
          <img src={correct} alt="" className="w-[26px] h-[26px]" />
          <h4 className="text-[22px] text-[#022956]  font-medium"> "QR-Linked Resume"</h4>
        </div>

        <div className="points  flex flex-row   gap-3">
          <img src={correct} alt="" className="w-[26px] h-[26px]" />
          <h4 className="text-[22px] text-[#022956]  font-medium"> "Level-Based Certification"</h4>
        </div>

        <div className="points  flex flex-row   gap-3">
          <img src={correct} alt="" className="w-[26px] h-[26px]" />
          <h4 className="text-[22px] text-[#022956]  font-medium"> "Streamlined Job Placement"</h4>
        </div>
      </div>

      <div className="space-y-8">
        <div className="points  flex flex-row   gap-3">
          <img src={correct} alt="" className="w-[26px] h-[26px]" />
          <h4 className="text-[22px] text-[#022956]  font-medium"> "Tech-Driven Advancement</h4>
        </div>


        <div className="points  flex flex-row   gap-3">
          <img src={correct} alt="" className="w-[26px] h-[26px]" />
          <h4 className="text-[22px] text-[#022956]  font-medium">"Job-Ready Access"</h4>
        </div>
      </div>
    </div>


    <div className="mt-[103px]">
      <h6 className="text-[#F27329] text-[13px] font-bold font-poppines line-height-[32px] ml-[10px] text-start">Apply for Passport/License</h6>
      <div className="flex flex-row items-center gap-3 ">
        <button className="w-[264px] h-[62px] bg-[#022956] rounded-full text-[#ffffff] text-[18px] font-medium font-poppines flex flex-row justify-center items-center">
          <span>Get Your License</span>
          <img src={arrow} alt="" className="w-[26px] h-[18px] ml-2" />
        </button>
      </div>
    </div>
  </div>

  <div className="childright">
    <img src={passportimage} alt="passportimg" className="w-[604px] h-[605px]" />

  </div>
</div>

</section> */}





      <section className="main w-full  sm:h-auto">

        <div className="flex flex-col justify-center items-center text-center mt-[182px] sm:mt-[40px] md:mt-[60px]">
          <h2 className="text-[#FF5C00] text-[30px]   font-black text-center font-poppines">
            Our Career Passport/License
          </h2>
          <h2 className="text-[#241443]  px-1 sm:px-4 text-[25px] sm:text-[30px] lg:text-[40px]   text-Poppins font-bold text-center font-poppines">
            Digitize your resume, unlock opportunities, and streamline placements with our tech-driven passport
          </h2>
        </div>

        <div className="parent flex flex-col sm:flex-row sm:justify-center md:justify-between mt-[60px] ">

          <div className="childleft sm:w-full md:w-1/2 px-[10px]  lg:ml-[50px] sm:ml-[20px] ">
            <h6 className="text-[#FF5C00] text-[22px] font-bold font-poppines line-height-[32px] text-start">Benefits of Passport/License</h6>
            <p className=" lg:text-center mb-6 sm:mb-8 text-[12px] sm:text-[18px] lg:text-[20px] font-Regular text-Poppins text-[#000000]">
              FrictionLearn’s Career Passport empowers students by validating their skills through a 4-level assessment. Upon completion, students receive a digital license with a QR code linking to their resume and a personalized job page, streamlining job opportunities and enhancing visibility within the platform
            </p>

            <div className="allpoints flex flex-col-2 gap-4 mt-[69px] ">

              <div className="space-y-8">
                <div className="points flex flex-row gap-3">
                  <div className="w-[24px] h-[24px] bg-[#FF5C00] rounded-full flex items-center justify-center">
                    <img src={righticon} alt="Special Gamified Courses" className="w-[12px] h-[11px]" />
                  </div>
                  <h4 className="lg:text-[22px] text-[11px] sm:text-[30px]    text-Poppins text-[#241443] font-medium"> 
                    "Verified Career Credentials"</h4>
                </div>

                <div className="points flex flex-row gap-3">
                  <div className="w-[24px] h-[24px] bg-[#FF5C00] rounded-full flex items-center justify-center">
                    <img src={righticon} alt="Special Gamified Courses" className="w-[12px] h-[11px]" />
                  </div>
                  <h4 className="lg:text-[22px] text-[11px] sm:text-[30px]    text-Poppins text-[#241443] font-medium">
                     "QR-Linked Resume"</h4>
                </div>

                <div className="points flex flex-row gap-3">
                  <div className="w-[24px] h-[24px] bg-[#FF5C00] rounded-full flex items-center justify-center">
                    <img src={righticon} alt="Special Gamified Courses" className="w-[12px] h-[11px]" />
                  </div>
                  <h4 className="lg:text-[22px] text-[11px] sm:text-[30px]    text-Poppins text-[#241443] font-medium">
                    "Level-Based Certification"</h4>
                </div>

                <div className="points flex flex-row gap-3">
                  <div className="w-[24px] h-[24px] bg-[#FF5C00] rounded-full flex items-center justify-center">
                    <img src={righticon} alt="Special Gamified Courses" className="w-[12px] h-[11px]" />
                  </div>
                  <h4 className="lg:text-[22px] text-[11px] sm:text-[30px]    text-Poppins text-[#241443] font-medium">
                    "Streamlined Job Placement"</h4>
                </div>
              </div>

              <div className="space-y-8">
                <div className="points flex flex-row gap-3">
                  <div className="w-[24px] h-[24px] bg-[#FF5C00] rounded-full flex items-center justify-center">
                    <img src={righticon} alt="Special Gamified Courses" className="w-[12px] h-[11px]" />
                  </div>
                  <h4 className="lg:text-[22px] text-[11px] sm:text-[30px]    text-Poppins text-[#241443] font-medium"> 
                    "Tech-Driven Advancement"</h4>
                </div>

                <div className="points flex flex-row gap-3">
                  <div className="w-[24px] h-[24px] bg-[#FF5C00] rounded-full flex items-center justify-center">
                    <img src={righticon} alt="Special Gamified Courses" className="w-[12px] h-[11px]" />
                  </div>
                  <h4 className="lg:text-[22px] text-[11px] sm:text-[30px]    text-Poppins text-[#241443] font-medium">
                    "Job-Ready Access"</h4>
                </div>

                <div className="points flex flex-row gap-3">
                  <div className="w-[24px] h-[24px] bg-[#FF5C00] rounded-full flex items-center justify-center">
                    <img src={righticon} alt="Special Gamified Courses" className="w-[12px] h-[11px]" />
                  </div>
                  <h4 className="lg:text-[22px] text-[11px] sm:text-[30px]    text-Poppins text-[#241443] font-medium">
                    "Job-Ready Access"</h4>
                </div>
              </div>
            </div>

            <div className="mt-[103px] text-center">
              <h6 className="text-[#F27329] text-[13px]  ml-[20px] font-bold font-poppines line-height-[32px] text-start">Apply for Passport/License</h6>
              <div className="flex flex-row justify-center items-center gap-8 ml-[-30px]   mt-[20px] ">
                <button className="w-[264px] h-[62px] bg-[#241443] rounded-full text-[#ffffff] text-[18px] font-medium font-poppines flex flex-row justify-center items-center">
                  <span>Get Your License</span>
                  <img src={arrow} alt="" className="w-[26px] h-[18px] ml-2" />
                </button>
              </div>
            </div>
          </div>

          <div className="childright   sm:w-full md:w-1/2 flex ">
            <img src={passportimage} alt="passportimg" className="w-[504px] h-[505px] md:w-[100%] md:h-auto" />
          </div>

        </div>

      </section>






      {/* seema */}

      {/* section twelve */}


      <section>


        <div className="bg-white p-4 sm:p-6 lg:p-8">
          <h1 className="text-[24px] sm:text-[28px] lg:text-[30px] font-black text-center mb-4 sm:mb-6 font-Lato font-sans text-[#FF5C00]">
            Our Community
          </h1>
          <p className="text-[28px] sm:text-[34px] lg:text-[40px] text-center font-semibold text-Poppins mb-3 sm:mb-4 lg:mb-6 text-[#241443]">
            Join India's Smartest Student Community
          </p>
          <p className="text-center mb-6 sm:mb-8 text-[16px] sm:text-[18px] lg:text-[20px] font-Regular text-Poppins text-[#6C6A6F]">
            Join niche clubs, connect with industry experts, explore opportunities, network with ambitious peers, secure
            internships, and become part of India’s largest learning community—all for free! Start your journey with
            FrictionLearn today!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#E0E1E6] p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <img src={sectioneleventhone} alt="Exclusive Events" className="w-full max-w-[521px] h-auto mx-auto mt-2" />
              <h2 className="text-[22px] sm:text-[25px] font-black mb-2 text-center text-[#241443] font-Lato font-sans mt-2">
                Exclusive Events
              </h2>
              <p className="text-center text-[#FF5C00] text-[18px] sm:text-[20px] text-Poppins font-normal">
                Access LIVE events to explore your favorite fields and elevate your growth to the next level
              </p>
            </div>

            <div className="bg-[#E0E1E6] p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <img src={sectioneleventhtwo} alt="Find Mentors" className="w-full max-w-[521px] h-auto mx-auto mt-2" />
              <h2 className="text-[22px] sm:text-[25px] font-black mb-2 text-center text-[#241443] font-Lato font-sans mt-2">
                Find Mentors
              </h2>
              <p className="text-center text-[#FF5C00] text-[18px] sm:text-[20px] text-Poppins font-Regular">
                Accelerate your learning journey with a mentor who guides you every step of the way in your career
              </p>
            </div>

            <div className="bg-[#E0E1E6] p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <img src={sectionelevenththree} alt="Community Meetups" className="w-full max-w-[521px] h-auto mx-auto mt-2" />
              <h2 className="text-[22px] sm:text-[25px] font-black mb-2 text-center text-[#241443] font-Lato font-sans mt-2">
                Community Meetups
              </h2>
              <p className="text-center text-[#FF5C00] text-[18px] sm:text-[20px] text-Poppins font-Regular">
                Surround yourself with tech-driven minds, connect with like-minded innovators, and amplify your growth
              </p>
            </div>

            <div className="bg-[#E0E1E6] p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <img src={sectioneleventhfour} alt="Find Your Business Partner" className="w-full max-w-[521px] h-auto mx-auto mt-2" />
              <h2 className="text-[22px] sm:text-[25px] font-black mb-2 text-center text-[#241443] font-Lato font-sans mt-2">
                Find Your Business Partner
              </h2>
              <p className="text-center text-[#FF5C00] text-[18px] sm:text-[20px] text-Poppins font-Regular">
                Access to your Co-Tech Business Minded to gear up your Idea
              </p>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10 lg:mt-12">
            <button className="bg-[#241443] text-white px-4 py-2 rounded-full hover:bg-blue-600 transform transition-transform duration-300 hover:scale-105">
              Join Community
            </button>
          </div>
        </div>
      </section>



      {/* why choose us seems */}


      <div className="bg-[#241443] mx-auto text-white p-8">
        <h1 className="text-[30px] font-black text-center mb-4 text-[#FF5C00] ml-[50px]">Why Choose Us!</h1>
        <p className="text-[30px] text-left mb-2 font-semibold text-Poppins ml-[50px]">
          Don't Know How To Start With<br /> FrictionLearn
        </p>

        <p className="text-[20px] text-left font-normal text-Poppins ml-[50px] mb-8">
          Discover FrictionLearn: Gamified learning, expert guidance, and job<br /> opportunities—all in one platform.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left side with text content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col items-start ml-[50px]">
              <div className='flex gap-2 mb-4 items-center'>
                <div className="w-[24px] h-[24px] bg-blue-500 rounded-full flex items-center justify-center">
                  <img src={righticon} alt="Special Gamified Courses" className="w-[12px] h-[11px]" />
                </div>
                <h3 className="text-[22px] font-regular">Special Gamified Courses</h3>
              </div>
              <div className='flex gap-2 mb-4 items-center'>
                <div className="w-[24px] h-[24px] bg-blue-500 rounded-full flex items-center justify-center">
                  <img src={righticon} alt="Share Ideas & Get Incubation" className="w-[12px] h-[11px]" />
                </div>
                <h3 className="text-[22px] font-regular">Share Ideas & Get Incubation</h3>
              </div>
              <div className='flex gap-2 mb-4 items-center'>
                <div className="w-[24px] h-[24px] bg-blue-500 rounded-full flex items-center justify-center">
                  <img src={righticon} alt="Connect with Communities" className="w-[12px] h-[11px]" />
                </div>
                <h3 className="text-[22px] font-regular">Connect with Communities</h3>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <div className='flex gap-2 mb-4 items-center'>
                <div className="w-[24px] h-[24px] bg-blue-500 rounded-full flex items-center justify-center">
                  <img src={righticon} alt="21 Language Model Learning" className="w-[12px] h-[11px]" />
                </div>
                <h3 className="text-[22px] font-regular">21 Language Model Learning</h3>
              </div>
              <div className='flex gap-2 mb-4 items-center'>
                <div className="w-[24px] h-[24px] bg-blue-500 rounded-full flex items-center justify-center">
                  <img src={righticon} alt="Post Projects/ Hire Experts" className="w-[12px] h-[11px]" />
                </div>
                <h3 className="text-[22px] font-regular">Post Projects/ Hire Experts</h3>
              </div>
              <div className='flex gap-2 mb-4 items-center'>
                <div className="w-[24px] h-[24px] bg-blue-500 rounded-full flex items-center justify-center">
                  <img src={righticon} alt="Get Advance Skills & Get License/Passport with Levels" className="w-[12px] h-[11px]" />
                </div>
                <h3 className="text-[22px] font-regular">
                  Get Advance Skills & Get <br /> License/Passport with Levels
                </h3>
              </div>
            </div>
          </div>

          {/* Right side with image */}
          <div className="flex items-center justify-center p-4 rounded-xl md:ml-16 w-full md:w-auto mr-[50px] mt-[-100px]">
            <img src={choose} alt="Why Choose Us" className="w-full h-auto object-cover rounded-xl md:max-w-[600px]" />
          </div>
        </div>

        <div className="text-left mb-8 ml-[50px] ">
          <button className="bg-white text-[#022956] px-6 py-2 rounded-full text-[16px] font-semibold text-Poppins">
            Explore All Courses
          </button>
        </div>
      </div>










      {/* our instructors and mentors */}
      {/* <section>  className="main w-full h-[1024px]"


<div className="flex  flex-col justify-center items-center text-center mt-[182px]">
  <h2 className="text-[#F27329] text-[30px] font-semibold text-center font-poppines">
    Our Instructor/Mentors
  </h2>
  <h2 className="text-[#022956] text-[40px] font-bold text-center font-poppines">
    From The FrictionLearn Community Mentors
  </h2>
  <p className="text-[#241443] w-[869px] h-[48] text-[20px] font-medium font-poppines line-height-[32px] text-center mt-[20px]">
    Expert mentors guiding you with personalized insights, real-world experience, and industry connections.


  </p>
</div>
<div className="parent flex flex-row  justify-evenly ">


  <div className="one  flex flex-col w-[389px] h-[527px]  mt-[90px] bg-[#F4F4F4]   border-gray-950 shadow-md rounded-lg">
    <div class="relative w-[283px] ml-[50px] mt-[61px] h-[282px] transform rotate-90 overflow-hidden  rounded-[10%]">
      <img src={elevenone} alt="Mentor" class="w-full h-full object-cover transform -rotate-90 rounded-[10%]  " />
    </div>

    <div className="subchild w-[428px] text-center mt-[50px] ">
      <h2 className="text-[#022956]  text-[35px] font-bold text-center font-poppines ">
        Johnson
      </h2>
      <h2 className="text-[#F27329] text-[18px] font-bold text-center font-poppines ">
        Business Advisor
      </h2>
      <p className=" text-[#000000] text-[12px] font-medium font-poppines line-height-[32px] text-center mt-[10px]">
        Guiding entrepreneurs with strategic insights<br></br> and practical business solutions.
      </p>
    </div>
  </div>


  <div className="one  flex flex-col w-[389px] h-[527px]  mt-[90px] bg-[#F4F4F4]   border-gray-950 shadow-md rounded-lg">
    <div class="relative w-[283px] ml-[50px] mt-[61px] h-[282px] transform rotate-90 overflow-hidden  rounded-[10%]">
      <img src={eleventwo} alt="Mentor" class="w-full h-full object-cover transform -rotate-90 rounded-[10%]  " />
    </div>

    <div className="subchild w-[428px] text-center mt-[50px] ">
      <h2 className="text-[#022956] text-[35px] font-bold text-center font-poppines ">
        Rekha
      </h2>
      <h2 className="text-[#F27329] text-[18px] font-bold text-center font-poppines ">
        Web Designer
      </h2>
      <p className=" text-[#000000] text-[12px] font-medium font-poppines line-height-[32px] text-center mt-[10px]">
        Crafting visually appealing and user-friendly<br></br> websites for impactful online presence.
      </p>
    </div>
  </div>



  <div className="one  flex flex-col w-[389px] h-[527px]  mt-[90px] bg-[#F4F4F4]   border-gray-950 shadow-md rounded-lg">
    <div class="relative w-[283px] ml-[50px] mt-[61px] h-[282px] transform rotate-90 overflow-hidden  rounded-[10%]">
      <img src={elevensix} alt="Mentor" class="w-full h-full object-cover transform -rotate-90 rounded-[10%]  " />
    </div>

    <div className="subchild w-[428px] text-center mt-[50px] ">
      <h2 className="text-[#022956]  text-[35px] font-bold text-center font-poppines ">
        Sara Singh
      </h2>
      <h2 className="text-[#F27329] text-[18px] font-bold text-center font-poppines ">
        Business Advisor
      </h2>
      <p className=" text-[#000000] text-[12px] font-medium font-poppines line-height-[32px] text-center mt-[10px]">
        Transforming data into actionable insights<br></br> to drive business decisions.
      </p>
    </div>
  </div>




</div>


<div className="flex flex-row items-center mt-[73px] ml-[620px] ">
  <button className="w-[240px] h-[62px] bg-[#F27329] rounded-full text-[#ffffff] text-[18px] font-medium font-poppines flex flex-row justify-center items-center">
    <span>Explore All</span>
    <img src={arrow} alt="" className="w-[26px] h-[18px] ml-2" />
  </button>
</div>


</section> */}

      <section className="main w-full sm:h-auto">

        <div className="flex flex-col justify-center items-center text-center mt-[182px] sm:mt-[40px] md:mt-[60px]">
          <h2 className="text-[#FF5C00] text-[30px] font-bold text-center font-poppines">
            Our Instructor/Mentors
          </h2>
          <h2 className="text-[#241443]  px-1 sm:px-4 text-[25px] sm:text-[30px] lg:text-[40px]  font-bold text-center font-poppines">
            From The FrictionLearn Community Mentors
          </h2>
          <p className="text-[#24144399] w-[869px] h-[48] text-[20px] font-medium font-poppines line-height-[32px] text-center mt-[20px] sm:w-full sm:px-4 md:w-[80%] md:px-8">
            Expert mentors guiding you with personalized insights, real-world experience, and industry connections.
          </p>
        </div>

        {/* <div className="parent flex flex-col sm:flex-row sm:flex-wrap sm:justify-center md:justify-evenly mt-[90px]">

          <div className="one flex flex-col w-[389px] h-[527px] mt-[90px] bg-[#F4F4F4] border-gray-950 shadow-md rounded-lg sm:w-full sm:max-w-[90%] sm:mx-auto md:w-[30%]">
            <div className="relative w-[283px] mx-auto mt-[61px] h-[282px] transform rotate-90 overflow-hidden rounded-[10%]">
              <img src={elevenone} alt="Mentor" className="w-full h-full object-cover transform -rotate-90 rounded-[10%]" />
            </div>

            <div className="subchild w-[428px] text-center mt-[50px] mx-auto sm:w-full sm:px-4">
              <h2 className="text-[#241443] text-[35px] font-bold text-center font-poppines">
                Johnson
              </h2>
              <h2 className="text-[#FF5C00] text-[18px] font-bold text-center font-poppines">
                Business Advisor
              </h2>
              <p className="text-[#6B7083] text-[12px] font-medium font-poppines line-height-[32px] text-center mt-[10px]">
                Guiding entrepreneurs with strategic insights<br />and practical business solutions.
              </p>
            </div>
          </div>

          <div className="one flex flex-col w-[389px] h-[527px] mt-[90px] bg-[#F4F4F4] border-gray-950 shadow-md rounded-lg sm:w-full sm:max-w-[90%] sm:mx-auto md:w-[30%]">
            <div className="relative w-[283px] mx-auto mt-[61px] h-[282px] transform rotate-90 overflow-hidden rounded-[10%]">
              <img src={eleventwo} alt="Mentor" className="w-full h-full object-cover transform -rotate-90 rounded-[10%]" />
            </div>

            <div className="subchild w-[428px] text-center mt-[50px] mx-auto sm:w-full sm:px-4">
              <h2 className="text-[#241443] text-[35px] font-bold text-center font-poppines">
                Rekha
              </h2>
              <h2 className="text-[#FF5C00] text-[18px] font-bold text-center font-poppines">
                Web Designer
              </h2>
              <p className="text-[#6B7083] text-[12px] font-medium font-poppines line-height-[32px] text-center mt-[10px]">
                Crafting visually appealing and user-friendly<br />websites for impactful online presence.
              </p>
            </div>
          </div>

          <div className="one flex flex-col w-[389px] h-[527px] mt-[90px] bg-[#F4F4F4] border-gray-950 shadow-md rounded-lg sm:w-full sm:max-w-[90%] sm:mx-auto md:w-[30%]">
            <div className="relative w-[283px] mx-auto mt-[61px] h-[282px] transform rotate-90 overflow-hidden rounded-[10%]">
              <img src={elevensix} alt="Mentor" className="w-full h-full object-cover transform -rotate-90 rounded-[10%]" />
            </div>

            <div className="subchild w-[428px] text-center mt-[50px] mx-auto sm:w-full sm:px-4">
              <h2 className="text-[#241443] text-[35px] font-bold text-center font-poppines">
                Sara Singh
              </h2>
              <h2 className="text-[#FF5C00] text-[18px] font-bold text-center font-poppines">
                Business Advisor
              </h2>
              <p className="text-[#6B7083] text-[12px] font-medium font-poppines line-height-[32px] text-center mt-[10px]">
                Transforming data into actionable insights<br />to drive business decisions.
              </p>
            </div>
          </div>

        </div> */}

<div className="parent flex sm:overflow-x-auto sm:snap-x sm:snap-mandatory sm:flex-nowrap sm:scroll-smooth mt-[90px]">
  <div className="one flex-shrink-0 w-[389px] h-[527px] mt-[90px] bg-[#F4F4F4] border-gray-950 shadow-md rounded-lg sm:w-[100%] sm:snap-center sm:mx-4 md:w-[30%]">
    <div className="relative w-[283px] mx-auto mt-[61px] h-[282px] transform rotate-90 overflow-hidden rounded-[10%]">
      <img src={elevenone} alt="Mentor" className="w-full h-full object-cover transform -rotate-90 rounded-[10%]" />
    </div>
    <div className="subchild w-[428px] text-center mt-[50px] mx-auto sm:w-full sm:px-4">
      <h2 className="text-[#241443] text-[35px] font-bold text-center font-poppines">Johnson</h2>
      <h2 className="text-[#FF5C00] text-[18px] font-bold text-center font-poppines">Business Advisor</h2>
      <p className="text-[#6B7083] text-[12px] font-medium font-poppines line-height-[32px] text-center mt-[10px]">
        Guiding entrepreneurs with strategic insights<br />and practical business solutions.
      </p>
    </div>
  </div>

  <div className="one flex-shrink-0 w-[389px] h-[527px] mt-[90px] bg-[#F4F4F4] border-gray-950 shadow-md rounded-lg sm:w-[100%] sm:snap-center sm:mx-4 md:w-[30%]">
    <div className="relative w-[283px] mx-auto mt-[61px] h-[282px] transform rotate-90 overflow-hidden rounded-[10%]">
      <img src={eleventwo} alt="Mentor" className="w-full h-full object-cover transform -rotate-90 rounded-[10%]" />
    </div>
    <div className="subchild w-[428px] text-center mt-[50px] mx-auto sm:w-full sm:px-4">
      <h2 className="text-[#241443] text-[35px] font-bold text-center font-poppines">Rekha</h2>
      <h2 className="text-[#FF5C00] text-[18px] font-bold text-center font-poppines">Web Designer</h2>
      <p className="text-[#6B7083] text-[12px] font-medium font-poppines line-height-[32px] text-center mt-[10px]">
        Crafting visually appealing and user-friendly<br />websites for impactful online presence.
      </p>
    </div>
  </div>

  <div className="one flex-shrink-0 w-[389px] h-[527px] mt-[90px] bg-[#F4F4F4] border-gray-950 shadow-md rounded-lg sm:w-[100%] sm:snap-center sm:mx-4 md:w-[30%]">
    <div className="relative w-[283px] mx-auto mt-[61px] h-[282px] transform rotate-90 overflow-hidden rounded-[10%]">
      <img src={elevensix} alt="Mentor" className="w-full h-full object-cover transform -rotate-90 rounded-[10%]" />
    </div>
    <div className="subchild w-[428px] text-center mt-[50px] mx-auto sm:w-full sm:px-4">
      <h2 className="text-[#241443] text-[35px] font-bold text-center font-poppines">Sara Singh</h2>
      <h2 className="text-[#FF5C00] text-[18px] font-bold text-center font-poppines">Business Advisor</h2>
      <p className="text-[#6B7083] text-[12px] font-medium font-poppines line-height-[32px] text-center mt-[10px]">
        Transforming data into actionable insights<br />to drive business decisions.
      </p>
    </div>
  </div>
</div>
















        <div className="flex flex-row justify-center mt-[73px] sm:ml-0 sm:mt-[40px]">
          <button className="w-[240px] h-[62px] bg-[#FF5C00] rounded-full text-[#ffffff] text-[18px] font-medium font-poppines flex flex-row justify-center items-center">
            <span>Explore All</span>
            <img src={arrow} alt="" className="w-[26px] h-[18px] ml-2" />
          </button>
        </div>

      </section>




      {/* section thirteen */}
      <Section />


      {/* become an instructor */}

      {/* <section className="main w-full h-[800px] mr-[104px]">

<div className="flex flex-col justify-center items-center text-center mt-[182px]">
  <h2 className="text-[#F27329] text-[30px] font-semibold text-center font-poppines">
    Become an Instructor/Mentor
  </h2>
</div>

<div className="parent flex flex-row justify-evenly mt-[100px]">
  
  <div className="childleft ml-[104px]">
    <h2 className="text-[#022956] text-[40px] font-bold text-start font-poppines">
      Let's Join Us & Spread Your<br /> Knowledge
    </h2>

    <h6 className="text-[#F27329] text-[21px] font-bold font-poppines line-height-[32px] text-start">
      Welcome to FrictionLearn's Mentor Program!
    </h6>
    <p className="text-[#241443] w-[689px] h-[96] text-[20px] font-medium font-poppines line-height-[32px] text-start mt-[20px]">
      Empower the next generation by sharing your expertise. Guide learners through personalized insights and real-world experiences. Expand your network by connecting with ambitious students and professionals. Join us in shaping careers and making a meaningful impact on future talent.
    </p>
  
    <div className="mt-[30px]">
      <h6 className="text-[#F27329] text-[13px] font-bold font-poppines line-height-[32px] ml-[10px] text-start">Apply for Passport/License</h6>
      <div className="flex flex-row items-center">
        <button className="w-[340px] h-[62px] gap-5 bg-[#022956] rounded-full text-[#ffffff] text-[18px] font-medium font-poppines flex flex-row justify-center items-center">
          <span>Become an Instructor</span>
          <img src={arrow} alt="" className="w-[26px] h-[18px] ml-2" />
        </button>
      </div>
    </div>
  </div>

  <div className="childright">
    <img src={mentor} alt="passportimg" className="w-[416px] h-[416px]" />
  </div>

</div>

</section> */}





      <section className="main w-full h-[800px] sm:h-auto sm:mr-0  ">

        <div className="flex flex-col justify-center items-center text-center mt-[182px] sm:mt-[60px] md:mt-[90px]">
          <h2 className="text-[#FF5C00] text-[30px] font-semibold text-center font-poppines">
            Become an Instructor/Mentor
          </h2>
        </div>

        <div className="parent flex flex-col sm:flex-col md:flex-row  mt-[100px] sm:mt-[40px] md:mt-[60px]">

          <div className="childleft  sm:px-4 sm:text-center md:ml-0 ">
            <h2 className="text-[#022956] text-[30px] md:text-[40px] font-bold text-start  font-poppines">
              Let's Join Us & Spread Your<br /> Knowledge
            </h2>

            <h6 className="text-[#FF5C00] text-[18px] md:text-[21px] font-bold font-poppines line-height-[32px] text-start">
              Welcome to FrictionLearn's Mentor Program!
            </h6>
            <p className="text-[#6B7083] w-full md:w-[689px] h-auto text-[16px] md:text-[20px] font-medium font-poppines line-height-[32px] text-start mt-[20px]">
              Empower the next generation by sharing your expertise. Guide learners through personalized insights and real-world experiences. Expand your network by connecting with ambitious students and professionals. Join us in shaping careers and making a meaningful impact on future talent.
            </p>

            <div className="mt-[30px]">

              <div className="flex flex-row items-center justify-center md:justify-start mt-4">
                <button className="w-full md:w-[340px] h-[62px] gap-5 bg-[#241443] rounded-full text-[#ffffff] text-[16px] md:text-[18px] font-medium font-poppines flex flex-row justify-center items-center">
                  <span>Become an Instructor</span>
                  <img src={arrow} alt="" className="w-[20px] md:w-[26px] h-[14px] md:h-[18px] ml-2" />
                </button>
              </div>
            </div>
          </div>

          <div className="childright mt-4 sm:mx-auto   ">
            <img src={mentor} alt="passportimg" className="w-[80%] md:w-[416px] h-auto md:h-[416px] " />
          </div>

        </div>

      </section>













      {/* 
<section  className='w-full h-[696px]'>

<div className="parent  w-[1259px] h-[626px] bg-[#241443E5] mx-[90px] mt-[34px]">

<div className=' ml-[203px] flex flex-col'> 
   <h2 className='text-[70px] text-[#FFFFFF] font-black mt-[190px]'>Ready to Start Learning?</h2>
  <p className='text-[23px] text-[#FFFFFF] font-light  mt-[20px]'>Dive into our Comprehensive course catalog and begin your Gamified e-Learning Journey</p>

</div>



  <div  className='  ml-[399px]  space-x-9'>
  <button  className='  mt-[80px] text-[20px] w-[189px] h-[70px] bg-white rounded-full border-[black]'>Contact Us</button>
  <button  className='text-[20px] w-[253px] h-[70px]   text-[#ffffff] rounded-full border  border-[white]'>Explore Courses</button>
</div>
</div>


</section> */}
      <section className='w-full h-[696px]'>
        <div className="parent w-full sm:w-[90%] md:w-[80%] lg:w-[70%] h-[626px] bg-[#241443E5] mx-auto mt-[34px]  rounded-2xl">

          <div className='mr-[60px] sm:ml-[200px] md:ml-[100px] lg:ml-[150px] flex flex-col  justify-center'>
            <h2 className='text-[40px]  text-center sm:text-center md:text-center      sm:text-[50px] md:text-[60px] lg:text-[70px] text-[#FFFFFF] font-black mt-[50px] sm:mt-[100px] md:mt-[140px] lg:mt-[190px]'>
              Ready to Start Learning?
            </h2>
            <p className=' ml-0 mr-40  sm:ml-[100px] md:ml-[100px]  sm:text-center md:text-center        text-[16px] sm:text-[18px] md:text-[20px] lg:text-[23px] text-[#FFFFFF] font-light mt-[10px] sm:mt-[15px] md:mt-[20px]'>
              Dive into our Comprehensive course catalog and begin your Gamified e-Learning Journey
            </p>
          </div>


          <div className='ml-6 sm:ml-[100px] md:ml-[100px] lg:ml-[200px] space-x-0 sm:space-x-0 lg:space-x-9 flex flex-1  justify-center'>
            <button className='mt-[40px] sm:mt-[50px] md:mt-[60px] lg:mt-[80px] text-[16px] sm:text-[18px] md:text-[20px] w-[150px] sm:w-[170px] md:w-[189px] h-[60px] sm:h-[65px] md:h-[70px] bg-white rounded-full border-[black]'>
              Contact Us
            </button>
            <button className='mt-[40px] sm:mt-[50px] md:mt-[60px] lg:mt-[80px] text-[16px] sm:text-[18px] md:text-[20px] w-[200px] sm:w-[220px] md:w-[253px] h-[60px] sm:h-[65px] md:h-[70px] text-[#ffffff] rounded-full border border-[white]'>
              Explore Courses
            </button>
          </div>


        </div>
      </section>


      <Footer />


    </div>
  )
}
