

import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SectionTwo from "./SectionTwo";
// import SectionNine from "./SectionNine";
import content from '../assets/Content.png';
// import imgone from '../assets/imgone.png';
// import imgtwo from '../assets/imgtwo.png';
// import imgthree from '../assets/imgthree.png';
// import imgfour from '../assets/imgfour.png';
// import imgfive from '../assets/imgfive.png';
// import imgsix from '../assets/imgsix.png';
import award from '../assets/award.png';
import bookimg from '../assets/bookimg.png';
import bulbimg from '../assets/bulbimg.png';

import aboutskillimg from "../assets/aboutskillimg.png";
import arrow from'../assets/arrow.png';

import mindgoalimgone from '../assets/mindgoalimgone.png';
import mindgoalimgtwo from '../assets/mindgoalimgtwo.png';
import goalimgones from '../assets/goalimgone.png';
import goalimgtwo from '../assets/goalimgtwo.png';
import whydoprojectone from '../assets/whydoprojectone.png';
import whydoprojecttwo from '../assets/whydoprojecttwo.png';
import whydoprojectthree from '../assets/whydoprojectthree.png';

import passportimage from '../assets/passportimage.png';
import correct from '../assets/correct.png';
import mentor from '../assets/mentor.png';









// import sectionthreeimage from '../assets/sectionthreeimgone.png';
import groupone from '../assets/group.png';
import grouponeone from '../assets/groupone.png'
import grouptwo from '../assets/grouptwo.png';
import groupthree from '../assets/groupthree.png';
import group from '../assets/groupfour.png';




import sectionFourimgone from '../assets/sfourone.png';
import sectionFourimgtwo from '../assets/sfourtwo.png';


// import sectionFourimgthree from '../assets/sfourthree.png';
// import sfiveimgone from '../assets/1.png';
// import sfiveimgtwo from '../assets/2.png';
// import sfiveimgthree from '../assets/3.png';
// import sfiveimgfour from '../assets/4.png';
// import sfiveimgfive from '../assets/5.png';
// import frame from '../assets/Frame 1321315007.jpg';



import sevenimgone from '../assets/sfiveone.png';
import sevenimgtwo from '../assets/sfivetwo.png';
import sevenimgthree from '../assets/sfivethree.png';
import sevenimgfour from '../assets/sfivefour.png';
import sevenimgfive from '../assets/sfivefive.png';

// section six images
import sicimgone from '../assets/siximgone.png';
import sicimgtwo from '../assets/siximgtwo.png';
import sicimgthree from '../assets/siximgthree.png';
import sicimgfour from '../assets/siximgfour.png';


// // import numberone from '../assets/numbers.png'
// import numbertwo from '../assets/numbertwo.png'
// import numberthree from '../assets/numberthree.png'
// import numberfour from '../assets/numberfour.png'
// import numberfive from '../assets/numbersfive.png'
// import icone from '../assets/Group 48095819.png';
// import ictwo from '../assets/Group 48095820.png';
// import icthree from '../assets/Group 48095821.png';
// import icfour from '../assets/Group 48095822.png';
// import icfive from '../assets/Group 48095832.png';
// import nineone  from '../assets/nineone.png';
// import ninetwo  from '../assets/ninetwo.png';
// import ninethree  from '../assets/ninethree.png';
// import ninefour  from '../assets/ninefour.png';
// import ninefives  from '../assets/ninefives.png';
import 'tailwindcss/tailwind.css';
// import road from'../assets/road.svg';

// import '../index.css';
import Section from "./Section";
import 'tailwindcss/tailwind.css'; // Ensure this is correctly imported in your main entry file

import tenone from '../assets/tenone.png';
import tentwo from '../assets/tentwo.png';
import tenthree from '../assets/tenthree.png';
import tenfour from '../assets/tenfour.png';
import tenfive from '../assets/tenfive.png';
import tensix from '../assets/tensix.png';


import elevenone from '../assets/Vector 56 (2).png';
import eleventwo from '../assets/Vector 57.png';
import eleventhree from '../assets/Vector 58.png';
import elevenfour from '../assets/Vector 57 (1).png';
import elevenfive from '../assets/Vector 56 (1).png';
import elevensix from '../assets/Vector 57 (2).png';

import elevenseven from '../assets/Vector 58 (1).png';
// import eleveneight from '../assets/eleveneight.png';
// import elevennine from '../assets/elevennine.png';

import twelveone from '../assets/twelveone.png';
import twelvetwo from '../assets/twelvetwo.png';
import twelvethree from '../assets/twelvethree.png';
import twelvefour from '../assets/twelvefour.png';
import twelvefive from '../assets/twelvefive.png';
import twelvesix from '../assets/twelvesix.png';


import thirteenone from '../assets/fiveperson.png';
import thirteentwo from '../assets/firstperson.png';
import thirteenthree from '../assets/threeperson.png';
import thirteenfour from '../assets/thirteenfour.png';
import thirteenfive from '../assets/Rectangle 15.png';


// import { HiArrowSmallLeft } from "react-icons/hi2";





// import downarrow from '../assets/down-arrow.png'
import sectionthreeimage1 from '../assets/sectionthreeimgone.png';
import sectionthreeimage2 from '../assets/sectionthreeimgtwo.png';
import sectionthreeimage3 from '../assets/sectionthreeimgthree.png';
import sectionthreeimage4 from '../assets/sectionthreeimgfour.png';
import sectionthreeimage5 from '../assets/sectionthreeimgfour.png';


// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import React from 'react';
// import Slider from 'react-slick';


import frameone from '../assets/projectframe.png';

import projectone from '../assets/projectone.png'
import projecttwo from '../assets/projecttwo.png'
import projectthree from '../assets/projectthree.png'
import projectfour from '../assets/projectfour.png'
import projectfive from '../assets/projectfive.png'

import projectlogoone from '../assets/projectlogoone.png'
import projectlogotwo from '../assets/projectlogotwo.png'
import projectlogothree from '../assets/projectlogothree.png'
import projectlogofour from '../assets/projectlogofour.png'
import projectlogofive from '../assets/projectlogofive.png'

import eaclipse from '../assets/Ellipse 12.png'
import lineimg from '../assets/Group 48095925 (1).png'
import passport from '../assets/passport.png';



const images = [
  sectionthreeimage1,
  sectionthreeimage2,
  sectionthreeimage3,
  sectionthreeimage4,
  sectionthreeimage5
];

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

// // tenth section

const collaborators = [
  tenone,
  tentwo,
  tenthree,
  tenfour,
  tenfive,
  tensix,
];



const testimonials = [
  {
    name: 'J.Rohith',
    role: 'B.Tech(CSC) at Vignan College',
    text: "I'm so excited to finish my studies with FrictionLearn. The progressive ideas and real-world projects are exactly what I need to prepare for my career. I can't wait to get started!",
    image: thirteenone, // Replace with actual image paths
  },
  {
    name: 'Sowmya',
    role: 'Degree (2nd year) at Tara College',
    text: "FrictionLearn's unique approach to education with progressive ideas and practical assessments is exactly what I was looking for. I'm ready to dive in and develop my skills further.",
    image: thirteentwo,
  },
  {
    name: 'Sanjana',
    role: 'B.com (computers-2nd year) LNK college',
    text: "Joining FrictionLearn has been the best decision for my academic and career growth. The hands-on projects and guidance from experienced mentors are invaluable. I'm thrilled to start this journey!",
    image: thirteenthree,
  },
  {
    name: 'Sravya',
    role: 'B-tech(ECE) at MGIT',
    text: "I'm excited about the opportunity to study with FrictionLearn. The well-structured courses and emphasis on real-world applications will undoubtedly prepare me for a successful career. Ready to start this now!",
    image: thirteenfour,
  },
  {
    name: 'k.Harish',
    role: 'B Tech () at BVRIT',
    text: "FrictionLearn provides the perfect mix of education and practical experience. I'm excited to start the courses and take on the projects that will enhance my skills and prepare me for my future. Let's get started!",
    image: thirteenfive,
  },
];



export default function Homepage() {
  const navigate = useNavigate();
  const [hoveredImageIndex, setHoveredImageIndex] = useState(0);
  const [isFiveReached, setIsFiveReached] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)






  // nine section

  useEffect(() => {


    const handleAnimationEnd = () => {
      const button = document.getElementById('apply-button');
      if (button) {
        button.style.backgroundColor = '#FFFFFF'; // White background
        button.style.color = '#022956'; // Blue text
      }
    };

    const animationEndTrigger = document.getElementById('animation-end-trigger');
    if (animationEndTrigger) {
      animationEndTrigger.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (animationEndTrigger) {
        animationEndTrigger.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, []);




  // second section 
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      const scrollY = window.scrollY;
      scrollContainer.style.transform = `translateY(${-scrollY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  // eleven section condition 


  const [isInView, setIsInView] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
    seventh: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      const firstElement = document.querySelector('.first-element');
      const secondElement = document.querySelector('.second-element');
      const thirdElement = document.querySelector('.third-element');
      const fourthElement = document.querySelector('.fourth-element');
      const fifthElement = document.querySelector('.fifth-element');
      const sixthElement = document.querySelector('.sixth-element');
      const seventhElement = document.querySelector('.seventh-element');

      if (firstElement && scrollPosition >= firstElement.offsetTop) {
        setIsInView((prevState) => ({ ...prevState, first: true }));
      }
      if (secondElement && scrollPosition >= secondElement.offsetTop) {
        setIsInView((prevState) => ({ ...prevState, second: true }));
      }
      if (thirdElement && scrollPosition >= thirdElement.offsetTop) {
        setIsInView((prevState) => ({ ...prevState, third: true }));
      }
      if (fourthElement && scrollPosition >= fourthElement.offsetTop) {
        setIsInView((prevState) => ({ ...prevState, fourth: true }));
      }
      if (fifthElement && scrollPosition >= fifthElement.offsetTop) {
        setIsInView((prevState) => ({ ...prevState, fifth: true }));
      }
      if (sixthElement && scrollPosition >= sixthElement.offsetTop) {
        setIsInView((prevState) => ({ ...prevState, sixth: true }));
      }
      if (seventhElement && scrollPosition >= seventhElement.offsetTop) {
        setIsInView((prevState) => ({ ...prevState, seventh: true }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);






  // section thirteen
  const [current, setCurrent] = useState(2); // Start with the center image

  // const handlePrevious = () => {
  //   setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  // };

  // const handleNext = () => {
  //   setCurrent((prev) => (prev + 1) % testimonials.length);
  // };
  const handleMouseEnter = (index) => {
    setCurrent(index);
  };



  // fifth button 
  const numberFiveRef = useRef(null);
  const applyButtonRef = useRef(null);

  const handleScroll = () => {
    if (numberFiveRef.current && applyButtonRef.current) {
      const fivePosition = numberFiveRef.current.getBoundingClientRect().top;
      const buttonPosition = applyButtonRef.current.getBoundingClientRect().top;

      // Check if the number 5 has reached the button
      if (fivePosition >= buttonPosition - 50 && fivePosition <= buttonPosition + 50) {
        setIsFiveReached(true);
      } else {
        setIsFiveReached(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (

    <div class="w-full  ">

      <Navbar />
      {/* section one */}
      {/* <div className="w-full h-[856px]  second-section">
        <div className=" flex flex-col text-center justify-center">
          <h2 className="text-[#022956] mt-[82px] text-[40px] font-semibold 
           
          "> What We Offers</h2>
          <p className="text-[15px] font-medium text-[#1D2228] mt-[20px] text-center px-1 

           sm:text-[12] sm:font-medium 
            lg:text-[18px]
             sm:text-center sm:px-10
           
           ">Friction Learn is your gateway to unparalleled growth, connecting you with courses that challenge you, clubs that foster creativity, and communities that<br></br> inspire collaboration. Our incubation program and dynamic student clubs offer hands-on experience, mentorship, and peer support, ensuring you're<br></br> equipped to turn your ambitions into reality.</p>
        </div>
        <div className="flex justify-center items-center">
  <img
    src={content}
    alt=""
    className="
      mt-[50px] 
      xl:w-[771px] xl:h-[481px] 
      lg:w-[400px] lg:h-[312px]       // Default size (applies to all unless overridden)
      sm:w-[5px] sm:h-[20px]    // Small screens (640px and up)
   md:w-[420px] md:h-[312px] 
   
    "
  />
</div>



      </div> */}
{/* <div className="w-full h-[856px] second-section ">
  <div className="flex flex-col text-center justify-center">
    <h2 className="text-[#022956] mt-[82px] text-[40px] font-semibold">What We Offer</h2>
    <p className="text-[15px] font-medium text-[#1D2228] mt-[20px] text-center px-1
    ">
      Friction Learn is your gateway to unparalleled growth, connecting you with courses that challenge you, clubs that foster creativity, and communities that<br></br> inspire collaboration. Our incubation program and dynamic student clubs offer hands-on experience, mentorship, and peer support, ensuring you're<br></br> equipped to turn your ambitions into reality.
    </p>
  </div>
  <div className="flex justify-center items-center">
    <img
      src={content}
      alt=""
      className="
      align-middle w-full mt-[50px]
    "
    />
  </div>
</div> */}


<section className="bg-white dark:bg-gray-900">
        <div className="py-4 px-4 mx-auto max-w-screen-lg lg:py-8">
          <div className="mb-8">
            <h2
              className="text-[#F27329] mt-[82px] text-[30px] font-semibold text-center
           
          "
            >
              {" "}
  What We Offers
            </h2>
            <p
              className="text-[15px] font-medium text-[#1D2228] mt-[20px] text-center px-1 
           sm:text-[12] sm:font-medium  lg:text-[40px] sm:text-center sm:px-10
           
           "
            >
          Unlock Your Potential: Growth, Creativity,<br></br> and Collaboration at FrictionLearn
            </p>
            <img
              src={content}
              alt=""
              className="align-middle w-full  mt-[50px]    
         
          
          "
            />
          </div>
        </div>

       
</section>


      {/* section two */}



      {/* <SectionTwo /> */}





      {/* section three */}



      {/* <div className="w-[full] h-[780px] mb-[20px] mx-[104px]  ">
        <div className="mt-[82px]  flex justify-center text-center md:flex-initial ">
          <h2 className="text-[#022956]  font-bold  lg:text-start 
      md:text-start  text-[22px] text-center      lg:text-[40px] mb-[20px]
 ">
            Training designed to meet your goals.
          </h2>
        </div>
        <div className="mt-[49px] flex">
          <div className="left section">
            {contents.map((content, index) => (
              <div
                key={index}
                className={`w-[498px] h-[119px] shadow-lg flex cursor-pointer ${index === hoveredImageIndex ? 'border-2 border-orange-500' : ''} ${index > 0 ? 'mt-[23px]' : ''}`}
                onMouseEnter={() => setHoveredImageIndex(index)}
              >
                <img src={content.img} alt="" className="w-[48px] h-[48px] justify-center mt-[38px] ml-[32px]" />
                <div className="ml-[23px] text-start">
                  <h3 className="text-[#F27329] text-[18px] font-semibold mt-[15px] font-lato,sans">{content.title}</h3>
                  <p className="text-[#1D2228] text-[14px] font-normal mt-[8px]">{content.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <img src={images[hoveredImageIndex]} alt="Selected" className="w-[707px] h-[697px] ml-[26px]" />
          </div>
        </div>
      </div> */}

<div className="w-full h-[780px] mb-[20px] mx-[104px]">
  <div className="mt-[82px] flex justify-center text-center md:flex-initial">
    <h2 className="text-[#022956] font-bold text-[22px] text-center lg:text-start lg:text-[40px] mb-[20px]">
      Training designed to meet your goals.
    </h2>
  </div>
  <div className="mt-[49px] flex flex-col sm:flex-row">
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
</div>

      {/* section four */}

      {/* <div className="w-full h-[2019px]        ml-[100px] mr-[100px] mt-[82px]   max-w-screen-lg">

        <div className=" flex flex-col  justify-center  text-center  ml-[300px]  ">
          <h2 className="text-[#022956] mt-[52px] text-[40px] font-semibold  text-center"> Hear the Structure, Feel the Success</h2>
          <h3 className="text-[27px] text-[#F27329] font-semibold  mt-[10px]  text-center">Three Pillars of Success in One Place <span className="text-[#022956] text-[30px] font-semibold"> “FrictionLearn”</span></h3>
        </div>

        <div className="mr-[166px] lg:ml-[104px]  md:ml-6 md:mr-6 md:space-x-5">


          <div className="lg:w-[1108px] lg:h-[304px] lg:flex  justify-evenly lg:mt-[50px] lg:mb-[160px] md:mt-[50px]
          
          space-x-9 

       ">
            <div className="content flex flex-col justify-center text-center mb-[150px] mt-[130px] lg:mr-[-110px]    md:mt-[20px]">
              <h2 className="text-[#F27329] lg:text-[40px]  md:text-[32px]    font-semibold font-sans font-lato  lg:w-[616px]">  1. Engaging Learning Experience</h2>
              <p className="lg:text-[22px] font-medium text-[#1D2228] mt-[31px] md:ml-[16px]  md:w-[390px]">"FrictionLearn” transforms traditional education into an <br></br>engaging, fun, and motivating gamified learning <br></br>journey".</p>
            </div>
            <div > <img src={sectionFourimgone} alt="" className="w-[500px] lg:h-[304px]  " /></div>
          </div>









          <div className="lg:w-[1108px] lg:h-[304px]  lg:flex   justify-evenly mt-[50px]  mb-[160px]  lg:space-x-9 lg:ml-[50px]
    lg:flex-row 
md:flex-col
    md:space-x-0
    md:ml-[0px]
    md:h-[399px]

    ">
            <div className=" order-2 lg:order-1">
              <img src={sectionFourimgtwo} alt="" className="w-[500px] lg:h-[304px] " />
            </div>

            <div className="content flex flex-col justify-center text-center mb-[150px] mt-[130px] lg:mr-[-110px]  order-1 lg:order-2  md:mt-[20px] ">
              <h2 className="text-[#F27329]   text-[40px] md:text-[22px] font-semibold font-sans-serif-[lato] lg:w-[616px]  md:w-[337px] md:h-[103px]  md">
                2. Structured Course Levels:
              </h2>
              <p className="lg:text-[22px] font-medium text-[#1D2228] mt-[31px] md:ml-[16px]">
                Our 24-level courses, spanning 1st to 3rd year, <br></br>guide students in exploring career paths<br></br> and offer welcome kits.</p>
            </div>
          </div>




          <div className="lg:w-[1108px] lg:h-[304px]  lg:flex  justify-evenly mt-[50px] mb-[160px] lg:flex-row 
md:flex-col
md:space-x-0
md:h-full

    ">
            <div className="leftside content flex flex-col justify-center  text-center ">
              <h2 className="text-[#F27329] text-[40px]  font-semibold font-sans font-lato  lg:w-[616px]    md:w-[337px] md:h-[103px] ">  3. AI-Focused Learning Support:</h2>
              <p className="text-[20px] font-medium text-[#1D2228] mt-[31px]">FrictionLearn uses dedicated own AI to clarify doubts<br></br> and offer personalized support, enhancing students'<br></br> learning experience..</p>
            </div>
            <div > <img src={sectionFourimgone} alt="" className="w-[500px] lg:h-[304px] mt-[20px] lg:ml-[80px] " />
            </div>
          </div>




          <div className="lg:w-[1108px] lg:h-[304px] lg:flex   justify-evenly mt-[50px]    space-x-9  lg:flex-row 
md:flex-col
md:space-x-0
md:h-[366px]
md:mb-[100px]
">
            <div>
              <img src={sectionFourimgtwo} alt="" className="w-[500px] lg:h-[304px]  lg:ml-[-20px]" />
            </div>

            <div className="content flex flex-col justify-center text-center ml-[200px] lg:w-[572px] lg:h-[219px] mt-[50px]">
              <h2 className="text-[#F27329] text-[40px] font-semibold font-sans w-[616px]">
                4. Incubation for Idea Generators:
              </h2>
              <p className="text-[20px] font-medium text-[#1D2228] mt-[31px]">
                Starting in the second year, our Incubation programs offer mentorship and resources to turn students' innovative ideas into reality.
              </p>
            </div>
          </div>

        </div>
      </div> */}



<div className="w-full h-auto mx-0 mt-[82px] min-w-screen-lg px-4">
  <div className="flex flex-col justify-center text-center">
    <h2 className="text-[#022956] mt-[52px] text-[40px] font-semibold">Hear the Structure, Feel the Success</h2>
    <h3 className="text-[27px] text-[#F27329] font-semibold mt-[10px]">
      Three Pillars of Success in One Place <span className="text-[#022956] text-[30px] font-semibold">“FrictionLearn”</span>
    </h3>
  </div>



  <div className="space-y-[50px] md:space-y-[160px]">
    {/* <!-- First section --> */}
    <div className="flex flex-col md:flex-row md:items-center md:space-x-5 lg:flex-row lg:justify-evenly lg:space-x-9 lg:mt-[50px]">
  <div className="content flex flex-col justify-center text-center md:order-1">
    <h2 className="text-[#F27329] text-[32px]   lg:text-[40px] md:text-[82px]  sm:text-[82px]  sm:w-[414px]      font-semibold font-sans font-lato w-full md:w-[616px]">
      1. Engaging Learning Experience
    </h2>
    <p className="   lg:w-[513px] text-[20px] lg:text-[20px] sm:text-[12px] sm:w-[212px] md:text-[16px]  font-medium text-[#1D2228] mt-[31px] md:ml-[16px]">
      "FrictionLearn” transforms traditional education into an engaging, fun, and motivating gamified learning journey".
    </p>
  </div>
  <div className="md:order-2">
    <img src={sectionFourimgone} alt="" className="w-full lg:w-[500px] lg:h-[304px] object-cover mt-[20px] lg:mt-0" />
  </div>
</div>


    {/* <!-- Second section --> */}
    <div className="flex flex-col-reverse lg:flex-row lg:justify-evenly lg:space-x-9 lg:mt-[50px] md:space-x-0 md:space-y-[50px]">
    <div >
        <img src={sectionFourimgtwo} alt="" className="w-full lg:w-[500px] lg:h-[304px] object-cover" />
      </div>
      
      <div className="content flex flex-col justify-center text-center md:mt-[20px] lg:mr-[-110px]">
      <h2 className="text-[#F27329] text-[32px]   lg:text-[40px] md:text-[82px]  sm:text-[82px]  sm:w-[414px]      font-semibold font-sans font-lato w-full md:w-[616px]">
          2. Structured Course Levels:
        </h2>
        <p className="   lg:w-[513px] text-[20px] lg:text-[20px] sm:text-[12px] sm:w-[212px] md:text-[16px]  font-medium text-[#1D2228] mt-[31px] md:ml-[16px]">
          Our 24-level courses, spanning 1st to 3rd year, guide students in exploring career paths and offer welcome kits.
        </p>
      </div>
   
    </div>

    {/* <!-- Third section --> */}

    <div className="flex flex-col md:flex-row md:items-center md:space-x-5 lg:flex-row lg:justify-evenly lg:space-x-9 lg:mt-[50px]">
  <div className="content flex flex-col justify-center text-center md:order-1">
  <h2 className="text-[#F27329] text-[32px]   lg:text-[40px] md:text-[82px]  sm:text-[82px]  sm:w-[414px]      font-semibold font-sans font-lato w-full md:w-[616px]">
    3. AI-Focused Learning Support:
    </h2>
    <p className="   lg:w-[513px] text-[20px] lg:text-[20px] sm:text-[12px] sm:w-[212px] md:text-[16px]  font-medium text-[#1D2228] mt-[31px] md:ml-[16px]">
    FrictionLearn uses dedicated own AI to clarify doubts  and offer personalized support, enhancing students
    </p>
  </div>
  <div className="md:order-2">
    <img src={sectionFourimgone} alt="" className="w-full lg:w-[500px] lg:h-[304px] object-cover mt-[20px] lg:mt-0" />
  </div>
</div>


    {/* <!-- Fourth section --> */}
    <div className="flex flex-col-reverse lg:flex-row lg:justify-evenly lg:space-x-9 md:space-x-0 md:space-y-[50px]">
      <div>
        <img src={sectionFourimgtwo} alt="" className="w-full lg:w-[500px] lg:h-[304px] object-cover sm:mt-[50px]" />
      </div>
      <div className="content flex flex-col justify-center text-center mt-[50px] md:ml-[0px] w-full md:w-[572px] h-[219px]">
      <h2 className="text-[#F27329] text-[32px]   lg:text-[40px] md:text-[82px]  sm:text-[82px]  sm:w-[414px]      font-semibold font-sans font-lato w-full md:w-[616px]">
          4. Incubation for Idea Generators:
        </h2>
        <p className="   lg:w-[513px] text-[20px] lg:text-[20px] sm:text-[12px] sm:w-[212px] md:text-[16px]  font-medium text-[#1D2228] mt-[31px] md:ml-[16px]  mb-[60px]">
          Starting in the second year, our Incubation programs offer mentorship and resources to turn students' innovative ideas into reality.
        </p>
      </div>
    </div>
  </div>
</div>



      {/* project section */} 
      <div className="parentdiv  lg:w-full lg:h-[1287px] md:h-[1934px] lg:mt-[200px] md:mt-[1000px] md:w-[390px]">
        <div className=" flex flex-col  justify-center  text-center mt-[22px]" >
          <h2 className="text-[#022956] text-[40px] font-semibold"> Explore our Projects</h2>
        </div>


        <div className=" lg:flex lg:flex-row lg:justify-evenly md:flex-col">






          <div className="divright  mt-[80px]">
            <img src={frameone} alt="" className="w-[584px] h-[995px]" />
          </div>


           <div> 
            <img src={eaclipse} alt="" className="w-[2px] h-[970px] " />
          </div>
<div className="divleft lg:grid lg:grid-cols-2 lg:gap-9 lg:mt-[80px] md:mt-[300px] md:ml-[20px] sm:p-4 px-5 md:px-5 lg:px-0 mb-5 md:mb-5 lg:mb-0 sm:space-y-10 md:space-y-5 lg:space-y-0">



          <div className="parentone lg:w-[267px] lg:h-[310px] border shadow-lg transform transition-transform duration-300 lg:hover:scale-110 md:w-[350px] md:h-[550px] flex flex-col items-center     mb-5 md:mb-5 lg:mb-0">
  <img src={projectone} alt="" className="w-full h-auto" />
  <img 
    src={lineimg} 
    alt="" 
    className="h-[9px] w-[89px] md:w-[120px] mt-2 "
  />
  <h3 className="text-center text-[#1D2228] font-bold text-[18px] mt-[16px]">
    Courses
  </h3>
  <p className="text-[#1D2228] text-center font-medium text-[12px]">
    FrictionLearn offers interactive courses<br /> 
    with quizzes, flashcards, simulations, and<br /> 
    gamified learning paths.
  </p>
  <img 
    src={projectlogoone} 
    alt="" 
    className="w-[66px] h-[66px] mt-[10px]" 
    onClick={() => navigate("/Projects")}
  />
</div>

<div className="parentone lg:w-[267px] lg:h-[310px] border shadow-lg transform transition-transform duration-300 lg:hover:scale-110 md:w-[350px] md:h-[550px]    mb-5 md:mb-5 lg:mb-0">
  <img src={projecttwo} alt="" className="mx-auto" />
  <img src={lineimg} alt="" className="h-[9px] lg:w-[89px] mx-auto" />
  <h3 className="text-center text-[#1D2228] font-bold text-[18px] mt-[16px]">Projects</h3>
  <p className="text-[#1D2228] text-center font-medium text-[12px]">FrictionLearn provides hands-on projects for<br /> practical experience and skill application.</p>
  <img src={projectlogotwo} alt="" className="w-[66px] h-[66px] mx-auto mt-[25px]" onClick={() => navigate("/Projects")} />
</div>



<div className="parentone lg:w-[267px] lg:h-[310px] border shadow-lg transform transition-transform duration-300 lg:hover:scale-110 md:w-[350px] md:h-[550px]   mb-5 md:mb-5 lg:mb-0">
  <img src={projectthree} alt="" />
  <img src={lineimg} alt="" className="h-[9px] lg:w-[89px] mx-auto" />
  <h3 className="text-center text-[#1D2228] font-bold text-[18px] mt-[16px]">Incubation</h3>
  <p className="text-[#1D2228] text-center font-medium text-[12px]">The platform hosts clubs and events for<br /> networking, collaboration, and skill<br /> development.</p>
  <img src={projectlogothree} alt="" className="w-[66px] h-[66px] mx-auto mt-[10px]" onClick={() => navigate("/Projects")}/>
</div>


<div className="parentone lg:w-[267px] lg:h-[310px] border shadow-lg transform transition-transform duration-300 lg:hover:scale-110 md:w-[350px] md:h-[550px]   mb-5 md:mb-5 lg:mb-0">
  <img src={projectfour} alt="" />
  <img src={lineimg} alt="" className="h-[9px] w-[89px] mx-auto" />
  <h3 className="text-center text-[#1D2228] font-bold text-[18px] mt-[16px]">Clubs and Events</h3>
  <p className="text-[#1D2228] text-center font-medium text-[12px]">
    FrictionLearn offers interactive courses<br />
    with quizzes, flashcards, simulations, and<br />
    gamified learning paths.
  </p>
  <img src={projectlogofour} alt="" className="w-[66px] h-[66px] mx-auto mt-[10px]" onClick={() => navigate("/Projects")} />
</div>


            <div className="flex justify-center items-center lg:col-span-2">
            <div className="parentone lg:w-[267px] lg:h-[310px] border shadow-lg transform transition-transform duration-300 lg:hover:scale-110 md:w-[350px] md:h-[550px]   mb-5 md:mb-5 lg:mb-0">
  <img src={projectfive} alt="" className="w-full" />
  <img src={lineimg} alt="" className="h-[9px] w-[89px] mx-auto" />
  <h3 className="text-center text-[#1D2228] font-bold text-[18px] mt-[16px]">Communities</h3>
  <p className="text-[#1D2228] text-center font-medium text-[12px]">Vibrant groups fostering networking,<br /> collaboration, and shared learning experiences.</p>
  <img src={projectlogofive} alt="" className="w-[66px] h-[66px] mx-auto mt-[25px]" onClick={() => navigate('/Projects')} />
</div>

            </div>
          </div>
        </div>
      </div>



      {/* passport section */}

//       <div className="passport w-full lg:h-[692px] md:h-[807px] sm:h-auto">

// <div className="flex flex-col justify-center text-center mt-[22px] md:mt-0">
//   <h2 className="text-[#022956] text-[40px] font-semibold">
//     Professional Certification Passport
//   </h2>
// </div>

// <div className="parentdiv lg:flex lg:flex-row lg:justify-center lg:gap-16 md:flex md:flex-col md:justify-center md:gap-8 sm:flex sm:flex-col sm:items-center">
//   <div className="leftside-term flex flex-col items-center lg:w-auto lg:justify-start lg:mt-[228px] md:w-full md:items-center md:mt-[20px] sm:w-full sm:items-center sm:mt-[20px]">
//     <h2 className="text-[#F27329] text-[32px] font-medium font-sans-serif-[lato] text-center">
//       Validate skills, earn recognized<br /> credentials, unlock job<br /> opportunities
//     </h2>
//     <button className="text-[#022956] border border-zinc-950 px-5 items-center mt-[50px] text-[16px] font-bold w-[190px] h-[48px] transform transition-transform duration-300 hover:scale-125">
//       Get it Now
//     </button>
//   </div>

//   <div className="rightside-item lg:w-[610px] h-[550px] mt-[50px] md:w-full md:h-auto md:mt-[20px] sm:w-full sm:h-auto sm:mt-[20px] flex justify-center  lg:p-0 p-5 sm:p-4 md:p-4">
//     <img src={passport} alt="" className="w-[716px] h-auto" />
//   </div>
// </div>

// </div>

      {/* section five */}


      <div className="lg:w-full lg:h-[739px] sm:h-[900px] lg:mt-0 sm:mt-[400px]  min-h-screen-lg">

<div className="flex flex-col justify-center text-center mt-[22px] sm:mt-[60px] md:mt-[80px]">
  <h2 className="text-[#022956] text-[40px] font-semibold">What Are Clubs?</h2>
  <h3 className="text-[27px] text-[#F27329] font-semibold mt-[2px]">Create your Club in just 5 Simple Steps</h3>
</div>

<div className="lg:flex justify-center lg:flex-row gap-[150px] md:flex-col md:justify-center mt-[54px] ">
  <div className="lg:w-[246px] h-[241px] flex flex-col items-center mt-[5px]">
    <div className="w-[38px] h-[88px] flex items-center justify-center text-[#022956] text-[70px] font-semibold text-center">
      1
    </div>
    <div className="leftside content text-center mt-[10px]">
      <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[5px]">Create Your Club</h2>
      <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">Register on FrictionLearn to <br />establish club</p>
    </div>
  </div>

  <div className="lg:w-[246px] h-[241px] flex flex-col justify-center items-center mt-[36px]">
    <div className="w-[38px] h-[88px] flex items-center justify-center text-[#022956] text-[70px] font-semibold">
      2
    </div>
    <div className="leftside content mt-[10px] text-center">
      <h2 className="text-[#F27329] text-[22px] font-semibold font-sans font-lato mt-[5px]">Name Your Club</h2>
      <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">Choose a meaningful club name<br />reflecting its purpose</p>
    </div>
  </div>

  <div className="lg:w-[246px] h-[241px] flex flex-col items-center mt-[54px]">
    <div className="w-[38px] h-[88px] flex items-center justify-center text-[#022956] text-[70px] font-semibold">
      3
    </div>
    <div className="leftside content text-center mt-[10px]">
      <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[5px]">Invite Peer Members</h2>
      <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">Invite friends and classmates<br />to join your club.</p>
    </div>
  </div>
</div>

<div className="lg:flex lg:flex-row justify-center gap-[192px] mt-[30px] md:flex-col">
  <div className="lg:w-[246px] h-[241px] flex flex-col items-center mt-[24px]">
    <div className="w-[38px] h-[88px] flex items-center justify-center text-[#022956] text-[70px] font-semibold">
      4
    </div>
    <div className="leftside content text-center mt-[5px]">
      <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[5px]">Plan and Discuss</h2>
      <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">Regularly meet to discuss,<br />share skills, and plan</p>
    </div>
  </div>

  <div className="lg:w-[246px] h-[241px] flex flex-col items-center mt-[24px]">
    <div className="w-[38px] h-[88px] flex items-center justify-center text-[#022956] text-[70px] font-semibold">
      5
    </div>
    <div className="leftside content text-center mt-[5px]">
      <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[5px]">Create Your Club</h2>
      <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">Organize events, workshops,<br />and study sessions</p>
    </div>
  </div>
</div>
</div>

      {/* section six */}



      {/* <div className="w-full lg:h-[583px]  md:w-[390] md:-[759px] mt-[50px]">
        <div className="text-center mb-[50px] ">
          <h2 className="text-[#022956] text-[40px] font-semibold ">What Are Events?</h2>
          <h3 className="text-[27px] text-[#F27329] font-semibold mt-[10px] mb-[90px]">Organize Your Event in 4 Simple Steps</h3>
        </div>

        <div className="lg:flex lg:flex-row  md:flex-col    justify-evenly  relative  ">

          <div className="lg:w-[246px] lg:h-[241px] flex lg:flex-col      md:w-[323px] md:h-[121px]   md:flex-row  justify-center items-center">
            <div><img src={sicimgone} alt="" className="w-[127px] h-[136px] mt-[10px]" /></div>
            <div className="lg:text-center lg:mt-[10px] lg:mb-[50px]">
              <h2 className="  lg:w-[104px] text-[#F27329] text-[20px] font-semibold text-center  w-[102px] h-[26px]">Join Event</h2>
              <p className="   lg:w-[246px]   text-[16px] font-medium text-[#1D2228] mt-[15px] w-[246px] h-[44px] text-center">Explore clubs,join events that<br />interest.</p>
            </div>
          </div>

          <div className="absolute left-[19%] top-[20%] transform -translate-y-1/2 w-[240px] h-[1px] border-t-2 outline-2 border-dotted  bg-gray-400"></div>
          <div className="lg:w-[246px] lg:h-[241px] flex lg:flex-col      md:w-[323px] md:h-[121px]   md:flex-row  justify-center items-center">
            <div><img src={sicimgtwo} alt="" className="w-[127px] h-[136px]  mb-[20px]" /></div>
            <div className="text-center ">
              <h2 className="w-[294px]  text-[#F27329] text-[20px] font-semibold text-center  h-[26px]">Engage with Industry Leaders</h2>
              <p className="text-[16px] font-medium text-[#1D2228] mt-[15px]  w-[246px] h-[44px] text-center ml-[18px]">Connect with global leaders in<br />interactive sessions.</p>
            </div>
          </div>

          <div className="absolute left-[42%] top-[20%] transform -translate-y-1/2 w-[250px] h-[1px]   border-t-2 outline-2  border-dotted bg-gray-400"></div>

          <div className="lg:w-[246px] lg:h-[241px] flex lg:flex-col      md:w-[323px] md:h-[121px]   md:flex-row  justify-center items-center">
            <div><img src={sicimgthree} alt="" className="w-[127px] h-[136px] mt-[15px]" /></div>
            <div className="text-center mt-[10px]">
              <h2 className="text-[#F27329] text-[20px] font-semibold text-center  w-[197px] h-[26px]">Network with Peers</h2>
              <p className="text-[16px] font-medium text-[#1D2228] mt-[15px]  w-[246px] h-[44px]">Discuss skills, insights, and<br />collaborate at events.</p>
            </div>
          </div>

          <div className="absolute left-[66%] top-[20%] transform -translate-y-1/2 w-[250px] h-[1px]  border-t-2 outline-2  border-dotted bg-gray-400"></div>

          <div className="lg:w-[246px] lg:h-[241px] flex lg:flex-col      md:w-[323px] md:h-[121px]   md:flex-row  justify-center items-center">
            <div><img src={sicimgfour} alt="" className="w-[127px] h-[136px] mb-[10px]" /></div>
            <div className="text-center mt-[10px]">
              <h2 className="text-[#F27329] text-[20px] font-semibold text-center  w-[159px] h-[26px]">Host Your Event</h2>
              <p className="text-[16px] font-medium text-[#1D2228] mt-[15px]  text-center w-[246px] h-[44px]">Event: Learning and<br />Community Engagement<br />Showcase</p>
            </div>
          </div>


        </div>
      </div> */}
<div className="lg:w-full lg:h-[583px] md:w-[390px] md:h-[759px] mt-[50px]">
  <div className="text-center mb-[50px]">
    <h2 className="text-[#022956] text-[40px] font-semibold">What Are Events?</h2>
    <h3 className="text-[27px] text-[#F27329] font-semibold mt-[10px] mb-[90px]">Organize Your Event in 4 Simple Steps</h3>
  </div>

  <div className="relative">
    <div className="lg:flex lg:flex-row md:flex-col md:gap-[20px] lg:justify-evenly">
      <div className="lg:w-[246px] lg:h-[241px] flex lg:flex-col md:w-full md:h-auto md:flex-col justify-center items-center">
        <div><img src={sicimgone} alt="" className="w-[127px] h-[136px] mt-[10px]" /></div>
        <div className="text-center lg:text-center lg:mt-[10px] lg:mb-[50px]">
  <h2 className="text-[#F27329] text-[20px] font-semibold w-full  text-center sm:text-start md:text-start lg:text-center">
    Join Event
  </h2>
  <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] w-full sm:text-start md:text-start lg:text-center">
    Explore clubs, join events that<br />interest.
  </p>
</div>


      </div>

      <div className="absolute left-[19%] top-[20%] transform -translate-y-1/2 w-[240px] h-[1px] border-t-2 outline-2 border-dotted bg-gray-400 hidden sm:block"></div>

      <div className="lg:w-[246px] lg:h-[241px] flex lg:flex-col md:flex-row-reverse justify-center items-center">
  <div className="order-2 md:order-1">
    <img src={sicimgtwo} alt="" className="w-[127px] h-[136px] mb-[20px]" />
  </div>
  <div className="text-center md:text-left order-1 md:order-2">
    <h2 className="text-[#F27329] text-[20px] font-semibold w-full lg:text-center">Engage with Industry Leaders</h2>
    <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] ml-[18px] w-full">Connect with global leaders in<br />interactive sessions.</p>
  </div>
</div>


      <div className="absolute left-[42%] top-[20%] transform -translate-y-1/2 w-[250px] h-[1px] border-t-2 outline-2 border-dotted bg-gray-400  hidden sm:block"></div>

      <div className="lg:w-[246px] lg:h-[241px] flex lg:flex-col md:w-full md:h-auto md:flex-col justify-center items-center">
        <div><img src={sicimgthree} alt="" className="w-[127px] h-[136px] mt-[15px]" /></div>
        <div className="text-center mt-[10px]">
          <h2 className="text-[#F27329] text-[20px] font-semibold w-full lg:text-center">Network with Peers</h2>
          <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] w-full">Discuss skills, insights, and<br />collaborate at events.</p>
        </div>
      </div>

      <div className="absolute left-[66%] top-[20%] transform -translate-y-1/2 w-[250px] h-[1px] border-t-2 outline-2 border-dotted bg-gray-400  hidden sm:block"></div>
      <div className="lg:w-[246px] lg:h-[241px] flex lg:flex-col md:flex-row-reverse justify-center items-center">
  <div className="order-2 md:order-1">
    <img src={sicimgfour} alt="" className="w-[127px] h-[136px] mb-[10px]" />
  </div>
  <div className="text-center md:text-left order-1 md:order-2">
    <h2 className="text-[#F27329] text-[20px] font-semibold w-full lg:text-center">Host Your Event</h2>
    <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] w-full">Event: Learning and<br />Community Engagement<br />Showcase</p>
  </div>
</div>

    </div>
  </div>
</div>


      {/* sectionseven  */}

      <div className="lg:w-full lg:h-[703px]">
        <div className="flex flex-col justify-center text-center mt-[40px]">
          <h2 className="text-[#022956] text-[40px] font-semibold">Join Our Community Page</h2>
          <h3 className="text-[27px] text-[#F27329] font-semibold mt-[10px]">Discover Communities with 5 Key Steps</h3>
        </div>

        <div className="flex  flex-wrap justify-evenly  lg:space-x-4  md:space-x-4">

          <div className="w-full sm:w-auto h-[241px] flex lg:flex-col   md:flex-row justify-center items-center mt-[54px]  ">
            <img src={sevenimgone} alt="" className="w-[120px] h-[120px] mt-[20px]" />
           <div>
           <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[37px]">Join Interest Groups</h2>
           <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">Connect with communities for<br />tailored networking and career<br />growth</p>
           </div>
          </div>



          <div className="w-full sm:w-auto h-[241px] flex lg:flex-col  md:flex-row justify-center items-center mt-[54px]">
            <img src={sevenimgtwo} alt="" className="w-[120px] h-[120px] mt-[20px]" />
          <div>
          <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[37px]">Engage in Incubation Discussions</h2>
          <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">Engage in Startup incubation<br />discussions for entrepreneurial<br />feedback</p>
          </div>
          </div>



          <div className="w-full sm:w-auto h-[241px] flex  lg:flex-col   md:flex-row justify-center items-center mt-[54px]">
            <img src={sevenimgthree} alt="" className="w-[120px] h-[120px] mt-[20px]" />
           <div>
           <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[37px]">Explore Career Opportunities</h2>
           <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">Career paths, community<br />opportunities, guided by<br />experienced mentors</p>
           </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly   lg:space-x-4 md:space-x-4 ">


          <div className="w-full sm:w-auto h-[241px] flex lg:flex-col   md:flex-row  justify-center items-center mt-[54px]">
            <img src={sevenimgfour} alt="" className="w-[120px] h-[120px] mt-[25px]" />
          <div>
          <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[37px]">Collaborate on Projects</h2>
          <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">Collaborate on projects to<br />achieve shared goals together</p>
          </div>
          </div>

          <div className="w-full sm:w-auto h-[241px] flex lg:flex-col   md:flex-row justify-center items-center mt-[54px]">
            <img src={sevenimgfive} alt="" className="w-[120px] h-[120px] mt-[25px]" />
            <div>
            <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[49px]">Attend Exclusive Events</h2>
            <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">Participate in community<br />events to learn, connect, grow.</p>
            </div>
          </div>

        </div>

      </div>



      {/* section eight */}


      {/* <div className="w-[full] h-[800px] ">

<div  className=" flex flex-col  justify-center  text-center mt-[40px]" >

<h2  className="text-[#022956] mt-[72px] text-[40px] font-semibold ">Projects</h2>
<p  className="text-[27px] text-[#1D2228] font-medium mt-[20px]">Explore diverse projects and gain real-world experience with gamified learning.</p>
</div>

<div  className="ml-[480px] mt-[79px] align-middle " >
    <img src={frame} alt=""  />
</div>

</div> */}



      {/* section nine */}



      <Section />










      {/* section ten new design */}

      <div className="w-full h-[1536px]">


      <div className="flex justify-center items-center text-center mt-[182px]">
  <h2 className="text-[#F27329] text-[40px] font-semibold text-center font-poppines">
    Trusted By Over <span className="text-[#022956]">13400+</span> Students & Organizations<br></br>
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
  <h2 className="text-[#F27329] text-[30px] font-semibold text-center font-poppines">
  About Us
  </h2>
  <h2 className="text-[#022956] text-[40px] font-bold text-center font-poppines">
  Empowering Minds, Shaping Futures:<br></br> Meet the FrictionLearn Plan
  </h2>
</div>

<div className="parent flex flex-row justify-around  mt-[120px]">
  <div className="childleft   w-[670px]">
  <h2 className="text-[#022956] text-[75px] font-black text-start font-poppines line-height-[90px]">
  About
  FrictionLearn
  </h2>
  <h6  className="text-[#022956] text-[21px] font-bold font-poppines line-height-[32px]">Driven by the mission to make quality education accessible to all</h6>
  <p    className="text-[#241443] text-[20px] font-medium font-poppines line-height-[32px]  mt-[20px]"> FrictionLearn is a gamified e-learning platform designed to bridge the gap between learners and industry experts. Through dynamic, personalized tasks, we provide an engaging and interactive learning journey aimed at enhancing skills and career growth. Our mission is to create a seamless learning experience that empowers users to achieve their goals with ease and innovation.</p>

  <div className="flex flex-row items-center mt-[73px] ml-[220px]">
  <button className="w-[214px] h-[62px] bg-[#F27329] rounded-full text-[#ffffff] text-[18px] font-medium font-poppines flex flex-row justify-center items-center">
    <span>Learn More</span>
    <img src={arrow} alt="" className="w-[26px] h-[18px] ml-2" />
  </button>
</div>


  </div>
  <div className="childright  w-[606px] h-[606px] mt-[55px]">
    <img src={aboutskillimg} alt=""  />
  </div>
</div>
</div>

      </div>

{/* what our mind goal new design */}

<div  className="w-full h-[840px]">
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
<div  className="one w-[126px]">
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
<p   className="text-[#241443] text-[20px] font-medium font-poppines line-height-[32px]  mt-[20px]">Take the next step towards achieving your Personal & Professional 
aspirations <br></br>with FrictionLearn. In a world that demands constant growth & adaptability, FrictionLearn is your trusted partner on the Journey to success.</p>

<div className="subpsrent  mt-[50px]">
  <div className="childone flex flex-row mb-[30px]">
<img src={mindgoalimgone} alt=""className="w-[123px] h-[126px]"/>
<div className="subchild w-[428px] text-start  ml-[20px]">
<h2 className="text-[#F27329] text-[30px] font-bold text-start font-poppines ">
Learn From Experts
  </h2>
  <p   className=" text-[#241443] text-[15px] font-medium font-poppines line-height-[32px]  mt-[10px]">Learn directly from industry experts, gaining valuable<br></br> insights, hands-on experience, and practical<br></br> knowledge 
  </p>
</div>
  </div>






  <div className="childtwo flex flex-row ">
<img src={mindgoalimgtwo} alt=""  className="w-[123px] h-[126px]" />
<div className="subchild  w-[428px]  ml-[20px]">
  <h2 className="text-[#F27329] text-[30px] font-bold text-start font-poppines  ">
Video Tutorial
  </h2>
  <p   className="  text-[#241443] text-[15px] font-medium font-poppines line-height-[32px]  mt-[10px]">Comprehensive video tutorials designed to simplify<br></br> complex topics, making learning engaging and<br></br> accessible anywhere
  </p></div>
  </div>
</div>
</div>
</div>



</div>








{/* purple */}

<div className="purple  w-full h-[344px] bg-[#241443]">
<div className="parent flex flex-row  justify-evenly ">


  <div className="one  flex flex-row w-[361px] h-[72px]  mt-[120px]">
    <img src={bookimg} alt="" className="w-[137px] h-[68px] mt-[10px]" />

    <div className="subchild w-[428px] text-start  ml-[20px]">
<h2 className="text-[#FFFFFF] text-[18px] font-bold text-start font-poppines ">
Get Achieve New Levels
  </h2>
  <p   className=" text-[#ffffff] text-[12px] font-medium font-poppines line-height-[32px]  mt-[10px]">
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
  <p   className=" text-[#ffffff] text-[12px] font-medium font-poppines line-height-[32px]  mt-[10px]">Making learning Fun & Effective to<br></br>
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
  <p   className=" text-[#ffffff] text-[12px] font-medium font-poppines line-height-[32px]  mt-[10px]">Recognized for Excellence & Innovation<br></br>
  to deliver the Outstanding results
  </p>
</div>
  </div>

</div>
</div>


{/* why do projects */}

<div  className="whydoprojects w-[full] h-[620px]">
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
    <img src={whydoprojectone} alt="" className="w-[76px] h-[77px] mt-[20px] ml-[180px] mb-[20px]" />

    <div className="subchild w-[428px] text-center ">
<h2 className="text-[#000000] text-[18px] font-bold text-center font-poppines ">
Become Job Ready
  </h2>
  <p   className=" text-[#000000] text-[12px] font-medium font-poppines line-height-[32px] text-center mt-[10px]">
  Kickstart Your Career by Building Stellar
  Proof of Work
  </p>
</div>
  </div>

  <div className="one  flex flex-col w-[389px] h-[294px]  mt-[90px]   border-gray-950 shadow-md rounded-lg">
    <img src={whydoprojecttwo} alt="" className="w-[69px] h-[69px] mt-[20px] ml-[180px] mb-[20px]" />

    <div className="subchild w-[428px] text-center ">
<h2 className="text-[#000000] text-[18px] font-bold text-center font-poppines ">
Learn By Doing
  </h2>
  <p   className=" text-[#000000] text-[12px] font-medium font-poppines line-height-[32px] text-center mt-[10px]">
  Upskill By Building Hands-On Projects
  with Levelwise
  </p>
</div>
  </div>

  <div className="one  flex flex-col w-[389px] h-[294px]  mt-[90px]   border-gray-950 shadow-md rounded-lg">
    <img src={whydoprojectthree} alt="" className="w-[51px] h-[71px] mt-[20px] ml-[180px] mb-[20px]" />

    <div className="subchild w-[428px] text-center ">
<h2 className="text-[#000000] text-[18px] font-bold text-center font-poppines ">
Become Job Ready
  </h2>
  <p   className=" text-[#000000] text-[12px] font-medium font-poppines line-height-[32px] text-center mt-[10px]">
  Kickstart Your Career by Building Stellar
  Proof of Work
  </p>
</div>
  </div>


</div>






</div>

{/* passport section new one */}
 <div className="main  w-full h-[1000px]" >
 
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
  <h6  className="text-[#F27329] text-[21px] font-bold font-poppines line-height-[32px]  text-start">Benefits of Passport/License</h6>
  <p    className="text-[#241443] w-[689px] h-[96] text-[20px] font-medium font-poppines line-height-[32px] text-start mt-[20px]"> FrictionLearn’s Career Passport empowers students by validating their skills through a 4-level assessment. Upon completion, students receive a digital license with a QR code linking to their resume and a personalized job page, streamlining job opportunities and enhancing visibility within the platform</p>


<div className="allpoints flex flex-col-2  gap-16  mt-[69px]">


<div className="space-y-8">  
<div className="points  flex flex-row  gap-3"> 
  <img src={correct} alt="" className="w-[26px] h-[26px]" />
  <h4  className="text-[22px] text-[#022956]  font-medium"> "Verified Career Credentials"</h4>
</div>

<div className="points  flex flex-row   gap-3"> 
  <img src={correct} alt="" className="w-[26px] h-[26px]" />
  <h4   className="text-[22px] text-[#022956]  font-medium"> "QR-Linked Resume"</h4>
</div>

<div className="points  flex flex-row   gap-3"> 
  <img src={correct} alt="" className="w-[26px] h-[26px]" />
  <h4   className="text-[22px] text-[#022956]  font-medium"> "Level-Based Certification"</h4>
</div>

<div className="points  flex flex-row   gap-3"> 
  <img src={correct} alt="" className="w-[26px] h-[26px]" />
  <h4   className="text-[22px] text-[#022956]  font-medium"> "Streamlined Job Placement"</h4>
</div>
</div>

<div className="space-y-8"> 
<div className="points  flex flex-row   gap-3"> 
  <img src={correct} alt="" className="w-[26px] h-[26px]" />
  <h4   className="text-[22px] text-[#022956]  font-medium"> "Tech-Driven Advancement</h4>
</div>


<div className="points  flex flex-row   gap-3"> 
  <img src={correct} alt="" className="w-[26px] h-[26px]" />
  <h4   className="text-[22px] text-[#022956]  font-medium">"Job-Ready Access"</h4>
</div>
</div>
</div>


<div className="mt-[103px]">
<h6  className="text-[#F27329] text-[13px] font-bold font-poppines line-height-[32px] ml-[10px] text-start">Apply for Passport/License</h6>
<div className="flex flex-row items-center gap-3 ">
  <button className="w-[264px] h-[62px] bg-[#022956] rounded-full text-[#ffffff] text-[18px] font-medium font-poppines flex flex-row justify-center items-center">
    <span>Get Your License</span>
    <img src={arrow} alt="" className="w-[26px] h-[18px] ml-2" />
  </button>
</div>
</div>
  </div>

  <div className="childright">
<img src={passportimage} alt="passportimg"  className="w-[604px] h-[605px]" />

  </div>
</div>

















 
 
 
 </div>




{/* our instructors and mentors */}
 
 <div className="main w-full h-[1024px]">

 <div className="flex  flex-col justify-center items-center text-center mt-[182px]">
 <h2 className="text-[#F27329] text-[30px] font-semibold text-center font-poppines">
 Our Instructor/Mentors
 </h2>
 <h2 className="text-[#022956] text-[40px] font-bold text-center font-poppines">
 From The FrictionLearn Community Mentors
 </h2>
 <p    className="text-[#241443] w-[869px] h-[48] text-[20px] font-medium font-poppines line-height-[32px] text-center mt-[20px]">
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
  <p   className=" text-[#000000] text-[12px] font-medium font-poppines line-height-[32px] text-center mt-[10px]">
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
  <p   className=" text-[#000000] text-[12px] font-medium font-poppines line-height-[32px] text-center mt-[10px]">
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
  <p   className=" text-[#000000] text-[12px] font-medium font-poppines line-height-[32px] text-center mt-[10px]">
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
 </div>




{/* become an instructor */}

<div className="main  w-full h-[800px]  mr-[104px]" >
 
 <div className="flex  flex-col justify-center items-center text-center mt-[182px]">
 <h2 className="text-[#F27329] text-[30px] font-semibold text-center font-poppines">
 Become an Instructor/Mentor
 </h2>

</div>
 

 
<div className="parent  flex flex-row justify-evenly mt-[100px] ">



  <div className="childleft   ml-[104px]">
  <h2 className="text-[#022956] text-[40px] font-bold text-start font-poppines">
  Let's Join Us & Spread Your<br></br>
  Knowledge
 </h2>

  <h6  className="text-[#F27329] text-[21px] font-bold font-poppines line-height-[32px]  text-start">
  Welcome to FrictionLearn's Mentor Program!
    </h6>
  <p    className="text-[#241443] w-[689px] h-[96] text-[20px] font-medium font-poppines line-height-[32px] text-start mt-[20px]"> 
  Empower the next generation by sharing your expertise.Guide learners through personalized insights and real-world experiences. Expand your network by connecting with ambitious students and professionals.Join us in shaping careers and making a meaningful impact on future talent
    </p>



    <div className="mt-[30px]">
{/* <h6  className="text-[#F27329] text-[13px] font-bold font-poppines line-height-[32px] ml-[10px] text-start">Apply for Passport/License</h6> */}
<div className="flex flex-row items-center  ">
  <button className="w-[340px] h-[62px] gap-5 bg-[#022956] rounded-full text-[#ffffff] text-[18px] font-medium font-poppines flex flex-row justify-center items-center">
    <span>Become an Instructor</span>
    <img src={arrow} alt="" className="w-[26px] h-[18px] ml-2" />
  </button>
</div>
</div>


</div>


  <div className="childright">
<img src={mentor} alt="passportimg"  className="w-[416px] h-[416px]" />

  </div>


 
 </div>


</div>







      {/* section eleven */}

      {/* <div className="eleventhsection lg:w-full">

        <div className="mt-[100px] mb-[62px] flex justify-center text-center">
          <h1 className="text-[#022956] text-[40px] font-medium  font-sans-serif-[lato]">Guidance from the Best</h1>
        </div>

        <div class="flex flex-col items-center  ">

          <div className={`first-element flex items-center lg:space-x-20  md:space-x-10    bg-[#E7F2FF] lg:h-[182px] lg:p-6 mb-[85px] lg:w-[1333px]    md:h-[161px] ${isInView.first ? 'animate-fadeInLeft' : ''}`}>

            <div class="relative lg:w-[283px] lg:h-[282px] transform rotate-90 overflow-hidden rounded-[10%]  md:h-[127px]  md:w-[127px]">
              <img src={elevenone} alt="Mentor" class="lg:w-full lg:h-full object-cover transform -rotate-90 rounded-[10%]" />
            </div>

            <div class="lg:ml-[227px] mb-[104px] mt-[104px]  lg:w-[1194px] lg:h-[160px] md:h-[62px] md:w-[171px]">
              <h2 class="text-[30px] font-bold text-[#022956]">Johnson</h2>
              <p class="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">Business Advisor</p>
              <p class="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px] ">Guiding entrepreneurs with strategic insights<br /> and practical business solutions.</p>
            </div>

          </div>


          <div className={`second-element flex items-center justify-end lg:space-x-20 bg-[#FBEBE1] h-[182px] p-6 mb-[85px] lg:w-[1333px]   ${isInView.second ? 'animate-fadeInRight' : ''}`}>

            <div className=" lg:ml-[227px] mb-[104px]  mt-[104px] text-right    lg:w-[1194px] lg:h-[160px] ]">
              <h2 class="text-[30px] font-bold text-[#022956]">Rekha</h2>
              <p class="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">Web Design Professiona</p>
              <p class="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato]  mt-[20px] ">Crafting visually appealing and user-friendly<br></br>websites for impactful online presence..</p>
            </div>

            <div class="relative w-[283px]  lg:h-[282px] transform rotate-90 overflow-hidden  rounded-[10%]">
              <img src={eleventwo} alt="Mentor" class="w-full h-full object-cover transform -rotate-90 rounded-[10%]  " />
            </div>
          </div>


          <div className={`third-element flex items-center space-x-20 bg-[#E7F2FF]  h-[182px] p-6 mb-[85px] lg:w-[1333px] ${isInView.third ? 'animate-fadeInLeft' : ''}`}>

            <div class="relative lg:w-[283px]  h-[282px] transform rotate-90 overflow-hidden  rounded-[10%]">
              <img src={eleventhree} alt="Mentor" class="w-full h-full object-cover transform -rotate-90 rounded-[10%] " />
            </div>

            <div className=" ml-[227px] mb-[104px]  mt-[104px]">
              <h2 class="text-[30px] font-bold text-[#022956]">David Martinez</h2>
              <p class="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">Cybersecurity Specialist</p>
              <p class="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px]">Securing digital assets by identifying<br></br> vulnerabilities and implementing robust defenses..</p>
            </div>
          </div>





          <div className={`fourth-element flex items-center justify-end space-x-20 bg-[#FBEBE1] h-[182px] p-6 mb-[85px] lg:w-[1333px] ${isInView.fourth ? 'animate-fadeInRight' : ''}`}>

            <div className=" ml-[227px] mb-[104px]  mt-[104px] text-right">
              <h2 class="text-[30px] font-bold text-[#022956]">Spandana</h2>
              <p class="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">Marketing Strategist</p>
              <p class="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px] ">Designing innovative marketing strategies to <br></br>drive brand growth and engagement..</p>
            </div>

            <div class="relative w-[283px]  h-[282px] transform rotate-90 overflow-hidden  rounded-[10%]">
              <img src={elevenfour} alt="Mentor" class="w-full h-full object-cover transform -rotate-90 rounded-[10%]  " />
            </div>
          </div>



          <div className={`fifth-element flex items-center space-x-20 bg-[#E7F2FF] h-[182px] p-6 mb-[85px] w-[1333px] ${isInView.fifth ? 'animate-fadeInLeft' : ''}`}>

            <div class="relative w-[283px]  h-[282px] transform rotate-90 overflow-hidden  rounded-[10%]">
              <img src={elevenfive} alt="Mentor" class="w-full h-full object-cover transform -rotate-90 rounded-[10%] " />
            </div>

            <div className=" ml-[227px] mb-[104px]  mt-[104px]">
              <h2 class="text-[30px] font-bold text-[#022956]">Sara Singh</h2>
              <p class="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">Business Analytics Guru</p>
              <p class="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px]">Transforming data into actionable insights to<br></br> drive business decisions..</p>
            </div>
          </div>










          <div className={`sixth-element flex items-center justify-end space-x-20 bg-[#FBEBE1] h-[182px] p-6 mb-[85px] w-[1333px] ${isInView.sixth ? 'animate-fadeInRight' : ''}`}>

            <div className=" ml-[227px] mb-[104px]  mt-[104px] text-right">
              <h2 class="text-[30px] font-bold text-[#022956]">Radhika</h2>
              <p class="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">Graphic Design Professional</p>
              <p class="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px]">Creating compelling visual designs to enhance brand<br></br> identity and communication..</p>
            </div>

            <div class="relative w-[283px]  h-[282px] transform rotate-90 overflow-hidden  rounded-[10%]">
              <img src={elevensix} alt="Mentor" class="w-full h-full object-cover transform -rotate-90 rounded-[10%]  " />
            </div>
          </div>


          <div className={`seventh-element flex items-center space-x-20 bg-blue-100 h-[182px] p-6 mb-[85px] w-[1333px] ${isInView.seventh ? 'animate-fadeInLeft' : ''}`}>

            <div class="relative w-[283px]  h-[282px] transform rotate-90 overflow-hidden  rounded-[10%]">
              <img src={elevenseven} alt="Mentor" class="w-full h-full object-cover transform -rotate-90 rounded-[10%] " />
            </div>

            <div className=" ml-[227px] mb-[104px]  mt-[104px]">
              <h2 class="text-[30px] font-bold text-[#022956]">Santhosh Ram</h2>
              <p class="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">Business Advisor</p>
              <p class="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px]">Providing strategic guidance and practical<br></br> solutions for business growth and success..</p>
            </div>
          </div>

        </div>

      </div> */}
{/* <div className="eleventhsection w-full">

<div className="mt-[100px] mb-[62px] flex justify-center text-center">
  <h1 className="text-[#022956] text-[40px] font-medium font-sans-serif-[lato]">
    Guidance from the Best
  </h1>
</div>

<div className="flex flex-col items-center px-4 sm:px-0 md:px-0 lg:px-0">

  <div className={`first-element flex items-center space-x-4 sm:space-x-0 md:space-x-0 bg-[#E7F2FF] h-[182px] p-6 mb-[85px] w-full sm:w-full md:w-full lg:w-[1300px] ${isInView.first ? 'animate-fadeInLeft' : ''}`}>
    
    <div className="relative w-[283px] h-[282px] transform overflow-hidden rounded-[10%] sm:rotate-90 sm:w-[282px] sm:h-[283px] lg:rotate-90 lg:w-[283px] lg:h-[282px]">
      <img src={elevenone} alt="Mentor" className="w-full h-full object-cover rounded-[10%] sm:-rotate-45 lg:-rotate-90" />
    </div>

    <div className="ml-0 mb-[104px] mt-[104px] text-center sm:text-left md:text-left">
      <h2 className="text-[30px] font-bold text-[#022956]">Johnson</h2>
      <p className="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">Business Advisor</p>
      <p className="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px]">Guiding entrepreneurs with strategic insights<br /> and practical business solutions.</p>
    </div>
  </div>

















  
  <div   className={`second-element flex items-center justify-end space-x-20 bg-[#FBEBE1] h-[182px] p-6 mb-[85px] w-[1333px] ${isInView.second ? 'animate-fadeInRight' : ''}`}>
    
    <div  className=" ml-[227px] mb-[104px]  mt-[104px] text-right">
      <h2 class="text-[30px] font-bold text-[#022956]">Rekha</h2>
      <p class="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">Web Design Professiona</p>
      <p class="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato]  mt-[20px] ">Crafting visually appealing and user-friendly<br></br>websites for impactful online presence..</p>
    </div>

    <div class="relative w-[283px]  h-[282px] transform rotate-90 overflow-hidden  rounded-[10%]">
      <img src={eleventwo} alt="Mentor" class="w-full h-full object-cover transform -rotate-90 rounded-[10%]  " />
    </div>
  </div>


  <div className={`third-element flex items-center space-x-20 bg-[#E7F2FF]  h-[182px] p-6 mb-[85px] w-[1333px] ${isInView.third ? 'animate-fadeInLeft' : ''}`}>
    
    <div class="relative w-[283px]  h-[282px] transform rotate-90 overflow-hidden  rounded-[10%]">
      <img src={eleventhree} alt="Mentor" class="w-full h-full object-cover transform -rotate-90 rounded-[10%] " />
    </div>

    <div  className=" ml-[227px] mb-[104px]  mt-[104px]">
      <h2 class="text-[30px] font-bold text-[#022956]">David Martinez</h2>
      <p class="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">Cybersecurity Specialist</p>
      <p class="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px]">Securing digital assets by identifying<br></br> vulnerabilities and implementing robust defenses..</p>
    </div>
  </div>





  <div className={`fourth-element flex items-center justify-end space-x-20 bg-[#FBEBE1] h-[182px] p-6 mb-[85px] w-[1333px] ${isInView.fourth ? 'animate-fadeInRight' : ''}`}>
    
    <div  className=" ml-[227px] mb-[104px]  mt-[104px] text-right">
      <h2 class="text-[30px] font-bold text-[#022956]">Spandana</h2>
      <p class="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">Marketing Strategist</p>
      <p class="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px] ">Designing innovative marketing strategies to <br></br>drive brand growth and engagement..</p>
    </div>

    <div class="relative w-[283px]  h-[282px] transform rotate-90 overflow-hidden  rounded-[10%]">
      <img src={elevenfour} alt="Mentor" class="w-full h-full object-cover transform -rotate-90 rounded-[10%]  " />
    </div>
  </div>



  <div   className={`fifth-element flex items-center space-x-20 bg-[#E7F2FF] h-[182px] p-6 mb-[85px] w-[1333px] ${isInView.fifth ? 'animate-fadeInLeft' : ''}`}>
    
    <div class="relative w-[283px]  h-[282px] transform rotate-90 overflow-hidden  rounded-[10%]">
      <img src={elevenfive} alt="Mentor" class="w-full h-full object-cover transform -rotate-90 rounded-[10%] " />
    </div>

    <div  className=" ml-[227px] mb-[104px]  mt-[104px]">
      <h2 class="text-[30px] font-bold text-[#022956]">Sara Singh</h2>
      <p class="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">Business Analytics Guru</p>
      <p class="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px]">Transforming data into actionable insights to<br></br> drive business decisions..</p>
    </div>
  </div>










  <div  className={`sixth-element flex items-center justify-end space-x-20 bg-[#FBEBE1] h-[182px] p-6 mb-[85px] w-[1333px] ${isInView.sixth ? 'animate-fadeInRight' : ''}`}>
    
    <div  className=" ml-[227px] mb-[104px]  mt-[104px] text-right">
      <h2 class="text-[30px] font-bold text-[#022956]">Radhika</h2>
      <p class="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">Graphic Design Professional</p>
      <p class="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px]">Creating compelling visual designs to enhance brand<br></br> identity and communication..</p>
    </div>

    <div class="relative w-[283px]  h-[282px] transform rotate-90 overflow-hidden  rounded-[10%]">
      <img src={elevensix} alt="Mentor" class="w-full h-full object-cover transform -rotate-90 rounded-[10%]  " />
    </div>
  </div>


  <div  className={`seventh-element flex items-center space-x-20 bg-blue-100 h-[182px] p-6 mb-[85px] w-[1333px] ${isInView.seventh ? 'animate-fadeInLeft' : ''}`}>
    
    <div class="relative w-[283px]  h-[282px] transform rotate-90 overflow-hidden  rounded-[10%]">
      <img src={elevenseven} alt="Mentor" class="w-full h-full object-cover transform -rotate-90 rounded-[10%] " />
    </div>

    <div  className=" ml-[227px] mb-[104px]  mt-[104px]">
      <h2 class="text-[30px] font-bold text-[#022956]">Santhosh Ram</h2>
      <p class="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">Business Advisor</p>
      <p class="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px]">Providing strategic guidance and practical<br></br> solutions for business growth and success..</p>
    </div>
  </div>

</div>






</div> */}







      {/* section twelve */}

      {/* <div  className="w-[full] h-[477px] ">
<div   className=" flex flex-col  justify-center  text-center mt-[40px]">
<h2  className="text-[#022956]  text-[40px] font-semibold font-sans font-lato"> Our Growth at a Glance</h2>
</div>
<div>
  <div  className="flex flex-row justify-between mt-[102px] ml-[30px] mr-[30px] gap-[37px]">
    <img src={twelveone} alt=""  className="w-[165px] h-[174px]"/>
    <img src={twelvetwo} alt=""   className="w-[165px] h-[174px]" />
    <img src={twelvethree} alt=""    className="w-[165px] h-[174px]"/>
    <img src={twelvefour} alt=""    className="w-[165px] h-[174px]"/>
    <img src={twelvefive} alt=""    className="w-[165px] h-[174px]"/>
    <img src={twelvesix} alt=""   className="w-[165px] h-[174px]" />
  </div>
</div>
</div> */}



<div className="w-full h-[477px]">
  <div className="flex flex-col justify-center text-center mt-[40px]">
    <h2 className="text-[#022956] text-[40px] font-semibold font-sans font-lato">Our Growth at a Glance</h2>
  </div>
  <div className="mt-[102px] mx-[30px]  sm:mt-0">
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-[37px] sm:gap-0">
      <img src={twelveone} alt="" className="w-[165px] h-[174px] transform transition-transform duration-300 hover:scale-125" />
      <img src={twelvetwo} alt="" className="w-[165px] h-[174px] transform transition-transform duration-300 hover:scale-125" />
      <img src={twelvethree} alt="" className="w-[165px] h-[174px] transform transition-transform duration-300 hover:scale-125" />
      <img src={twelvefour} alt="" className="w-[165px] h-[174px] transform transition-transform duration-300 hover:scale-125" />
      <img src={twelvefive} alt="" className="w-[165px] h-[174px] transform transition-transform duration-300 hover:scale-125" />
      <img src={twelvesix} alt="" className="w-[165px] h-[174px] transform transition-transform duration-300 hover:scale-125" />
    </div>
  </div>
</div>




      {/* thirteen section */}
      {/* this is correct code */}

      <div className="relative w-[full] h-[798px]">
        <div className=" flex flex-col  justify-center  text-center mt-[80px]">
          <h2 className="text-[#022956] text-[40px] font-semibold font-sans font-lato">
            Experience Our Impact Through Their Words
          </h2>
        </div>
        <div className="flex overflow-hidden justify-center items-center  w-[full] h-[380px]  space-x-7">
          {testimonials.map((testimonial, index) => {
            const isActive = index === current;

            return (
              <div
                key={index}
                className={`transition-all duration-500 ease-in-out gap-[90px] ${isActive ? 'scale-110' : 'scale-75 blur-sm'} ${isActive ? 'opacity-100' : 'opacity-50'
                  }`}
                style={{
                  transform: isActive ? 'scale(1.1)' : 'scale(0.75)',
                  opacity: isActive ? 1 : 0.5,
                  width: isActive ? '186px' : '150px',
                  height: isActive ? '205px' : '150px',
                }}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <div className="rounded-lg gap-[50px] mx-2 flex flex-col items-center w-[195px] h-[205px]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={`${isActive ? 'filter-none' : 'filter grayscale'}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className=" text-center">
          <h3 className="text-[#1D2228] font-medium text-[20px]">{testimonials[current].name}</h3>
          <p className="text-[#1D2228] text-[16px] font-medium">{testimonials[current].role}</p>
        </div>
        <div className="mt-[50px] mx-[20px] text-center  font-medium">
          <p className="text-[#1D2228] text-[36px] ml-[100px] mr-[100px] font-light">{testimonials[current].text}</p>
        </div>
      </div>








      <Footer />



    </div>
  )
}
