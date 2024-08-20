

import React,{useState, useRef, useEffect} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SectionTwo from "./Sectiontwo";
// import SectionNine from "./SectionNine";
import content from '../assets/Content.png';
// import imgone from '../assets/imgone.png';
// import imgtwo from '../assets/imgtwo.png';
// import imgthree from '../assets/imgthree.png';
// import imgfour from '../assets/imgfour.png';
// import imgfive from '../assets/imgfive.png';
// import imgsix from '../assets/imgsix.png';


import sectionthreeimage from'../assets/sectionthreeimgone.png';
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
// import sicimgone from '../assets/siximgone.png';
// import sicimgtwo from '../assets/siximgtwo.png';
// import sicimgthree from '../assets/siximgthree.png';
// import sicimgfour from '../assets/siximgfour.png';


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


import thirteenone from '../assets/Rectangle 15.png';
import thirteentwo from '../assets/Rectangle 15.png';
import thirteenthree from'../assets/Rectangle 15.png';
import thirteenfour from '../assets/Rectangle 15.png';
import thirteenfive from'../assets/Rectangle 15.png';


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









// import './Style.css'; // Ensure this path is correct and the file exists



// import img1 from '../assets/numbers.png';
// import img2 from '../assets/numbers.png';
// import img3 from '../assets/numbers.png';
// import img4 from '../assets/numbers.png';
// import img5 from '../assets/Group 48095819.png';
// import img6 from '../assets/Group 48095819.png';
// import img7 from '../assets/Group 48095820.png';
// import img8 from  '../assets/Group 48095822.png';
// import img9 from '../assets/Group 48095832.png';
// import img10 from '../assets/numbersfive.png';


// import contentImg1 from '../assets/nineone.png';
// import contentImg2 from '../assets/nineone.png';
// import contentImg3 from '../assets/nineone.png';
// import contentImg4 from  '../assets/nineone.png';
// import contentImg5 from  '../assets/nineone.png';
// import SectionTwo from "./SectionTwo";
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
// Replace the image paths with actual paths in your project

// const imagesare = {
//     img1,
//     img2,
//     img3,
//     img4,
//     img5,
//     img6,
//     img7,
//     img8,
//     img9,
//     img10,
//     contentImg1,
//     contentImg2,
//     contentImg3,
//     contentImg4,
//     contentImg5,

// };


  





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
    name: 'k.Priya',
    role: 'B Tech () at BVRIT',
    text: "FrictionLearn provides the perfect mix of education and practical experience. I'm excited to start the courses and take on the projects that will enhance my skills and prepare me for my future. Let's get started!",
    image: thirteenfive,
  },
];



export default function Homepage(){

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




    return(
   
        <div class="w-full mx-auto "> 

<Navbar />
   {/* section one */}
       <div  className="w-full h-[856px]  second-section">
        <div className=" flex flex-col text-center justify-center"> 
          <h2  className="text-[#022956] mt-[82px] text-[40px] font-semibold 
           
          "> What We Offers</h2>
           <p  className="text-[15px] font-medium text-[#1D2228] mt-[20px] text-center px-1 
           sm:text-[12] sm:font-medium  lg:text-[18px] sm:text-center sm:px-10
           
           ">Friction Learn is your gateway to unparalleled growth, connecting you with courses that challenge you, clubs that foster creativity, and communities that<br></br> inspire collaboration. Our incubation program and dynamic student clubs offer hands-on experience, mentorship, and peer support, ensuring you're<br></br> equipped to turn your ambitions into reality.</p>
         </div>
          <div  className="flex  justify-center align-middle ">
          <img src={content} alt="" className="align-middle w-[771px] h-[487px] mt-[50px]  lg:w-[771px] lg:h-[481px]  
          sm:w-[388px] sm:h-[288px]
          
          "/>
       </div>
     </div>
     
{/* section two */}



<SectionTwo />



  

{/* section three */}



<div className="w-[full] h-[780px] mb-[20px] mx-[104px]">
      <div className="mt-[82px]  flex justify-center text-center">
        <h2 className="text-[#022956]  text-[40px] font-semibold">
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
          <img src={images[hoveredImageIndex]} alt="Selected" className="w-[707px] h-[657px] ml-[26px]" />
        </div>
      </div>
    </div>


{/* section four */}

<div className="w-[full] h-[2019px] ml-[100px] mr-[100px] mt-[82px]">

    <div   className=" flex flex-col  justify-center  text-center ">
    <h2  className= "text-[#022956] mt-[52px] text-[40px] font-semibold  text-center"> Hear the Structure, Feel the Success</h2>
     <h3  className="text-[27px] text-[#F27329] font-semibold  mt-[10px]  text-center">Three Pillars of Success in One Place <span  className="text-[#022956] text-[30px] font-semibold"> “FrictionLearn”</span></h3>
    </div>

<div  className="mr-[166px] ml-[104px]">


<div className="w-[1108px] h-[304px]  flex  justify-evenly mt-[50px] mb-[160px]  space-x-9">
        <div className="leftside content flex flex-col justify-center  text-center">
            <h2  className="text-[#F27329] text-[40px] font-semibold font-sans font-lato  w-[616px]">  1. Engaging Learning Experience</h2>
           <p  className="text-[20px] font-medium text-[#1D2228] mt-[31px]">"FrictionLearn” transforms traditional education into an <br></br>engaging, fun, and motivating gamified learning <br></br>journey".</p>
        </div>
        <div > <img src={sectionFourimgone} alt=""  className="w-[500px] h-[304px] ml-[50px] mt-[20px] "/></div>
    </div>


    <div className="w-[1108px] h-[304px] flex   justify-evenly mt-[50px]  mb-[160px]  space-x-9  ml-[50px]">
  <div>
    <img src={sectionFourimgtwo} alt="" className="w-[500px] h-[304px] " />
  </div>

  <div className="content flex flex-col justify-center text-center mb-[150px]  mt-[130px] mr-[-110px] ">
    <h2 className="text-[#F27329] text-[40px] font-semibold font-sans-serif-[lato] w-[616px]">
  2. Structured Course Levels:
    </h2>
    <p className="text-[22px] font-medium text-[#1D2228] mt-[31px]">
    Our 24-level courses, spanning 1st to 3rd year, <br></br>guide students in exploring career paths<br></br> and offer welcome kits.</p>
  </div>
</div>



  
    <div className="w-[1108px] h-[304px]  flex  justify-evenly mt-[50px] mb-[160px] ">
        <div className="leftside content flex flex-col justify-center  text-center ">
            <h2  className="text-[#F27329] text-[40px] font-semibold font-sans font-lato  w-[616px]">  3. AI-Focused Learning Support:</h2>
           <p  className="text-[20px] font-medium text-[#1D2228] mt-[31px]">FrictionLearn uses dedicated own AI to clarify doubts<br></br> and offer personalized support, enhancing students'<br></br> learning experience..</p>
        </div>
        <div > <img src={sectionFourimgone} alt=""  className="w-[500px] h-[304px] mt-[20px] ml-[80px] "/>
        </div>
    </div>




    <div className="w-[1108px] h-[304px] flex   justify-evenly mt-[50px]    space-x-9">
  <div>
    <img src={sectionFourimgtwo} alt="" className="w-[500px] h-[304px]  ml-[-20px]" />
  </div>

  <div className="content flex flex-col justify-center text-center ml-[200px] w-[572px] h-[219px] mt-[50px]">
    <h2 className="text-[#F27329] text-[40px] font-semibold font-sans w-[616px]">
4. Incubation for Idea Generators:
    </h2>
    <p className="text-[20px] font-medium text-[#1D2228] mt-[31px]">
    Starting in the second year, our Incubation programs offer mentorship and resources to turn students' innovative ideas into reality.
    </p>
  </div>
</div>





    </div>
   </div>



{/* project section */}

<div className="parentdiv  w-[full] h-[1287px]">
<div  className=" flex flex-col  justify-center  text-center mt-[22px]" >
    <h2  className="text-[#022956] text-[40px] font-semibold"> Explore our Projects</h2>
</div>


<div  className=" flex flex-row justify-evenly">






<div className="divright  mt-[80px]">
<img src={frameone} alt="" className="w-[584px] h-[995px]"   />
</div>


<div>
  <img src={eaclipse} alt=""  className="w-[2px] h-[970px]" />
</div>

<div className="divleft  grid grid-cols-2 gap-9  mt-[80px]">
 


 <div className="parentone w-[267px] h-[310px] border shadow-lg transform transition-transform duration-300 hover:scale-110 ">
  <img src={projectone} alt="" />
  <img src={lineimg} alt=""   className="h-[9px] w-[89px] ml-[80px]"/>
  <h3   className=" text-center text-[#1D2228] font-bold text-[18px] mt-[16px] ">Courses</h3>
  <p    className=" text-[#1D2228] text-center  font-medium text-[12px]">FrictionLearn offers interactive courses<br></br> with quizzes, flashcards, simulations, and<br></br> gamified learning paths.</p>
  <img src={projectlogoone} alt=""  className="w-[66px] h-[66px] ml-[100px] mt-[10px]" />
  </div>
 
  <div className="parentone w-[267px] h-[310px] border shadow-lg   transform transition-transform duration-300 hover:scale-110">
  <img src={projecttwo} alt="" />
  <img src={lineimg} alt=""   className="h-[9px] w-[89px] ml-[80px]"/>
  <h3    className=" text-center text-[#1D2228] font-bold text-[18px] mt-[16px]">Projects</h3>
  <p    className=" text-[#1D2228] text-center  font-medium text-[12px]">FrictionLearn provides hands-on projects for<br></br> practical experience and skill application.</p>
  <img src={projectlogotwo} alt=""  className="w-[66px] h-[66px] ml-[100px]  mt-[25px] "/>
  </div>
 


  <div className="parentone w-[267px] h-[310px] border shadow-lg   transform transition-transform duration-300 hover:scale-110">
  <img src={projectthree} alt="" />
  <img src={lineimg} alt=""   className="h-[9px] w-[89px] ml-[80px] "/>
  <h3    className=" text-center text-[#1D2228] font-bold text-[18px]  mt-[16px] ">Incubation</h3>
  <p      className=" text-[#1D2228] text-center  font-medium text-[12px]">The platform hosts clubs and events for<br></br> networking, collaboration, and skill<br></br> development..</p>
  <img src={projectlogothree} alt=""   className="w-[66px] h-[66px] ml-[100px]  mt-[10px]"/>
  </div>
 
  <div className="parentone w-[267px] h-[310px] border shadow-lg  transform transition-transform duration-300 hover:scale-110">
  <img src={projectfour} alt="" />
  <img src={lineimg} alt=""   className="h-[9px] w-[89px] ml-[80px]"/>
  <h3    className=" text-center text-[#1D2228] font-bold text-[18px] mt-[16px] ">Clubs and Events</h3>
  <p      className=" text-[#1D2228] text-center  font-medium text-[12px]">FrictionLearn offers interactive courses<br></br> with quizzes, flashcards, simulations, and<br></br> gamified learning paths.</p>
  <img src={projectlogofour} alt=""  className="w-[66px] h-[66px] ml-[100px]  mt-[10px] "/>
  </div>
 
  <div className="flex justify-center items-center col-span-2">
    <div className="w-[267px] h-[310px] border shadow-lg  transform transition-transform duration-300 hover:scale-110">
      <img src={projectfive} alt="" />
      <img src={lineimg} alt=""   className="h-[9px] w-[89px] ml-[80px] "/>
      <h3    className=" text-center text-[#1D2228] font-bold text-[18px] mt-[16px] ">Communities</h3>
      <p     className=" text-[#1D2228] text-center  font-medium text-[12px]">Vibrant groups fostering networking,<br></br> collaboration, and shared learning experiences..</p>
      <img src={projectlogofive} alt=""  className="w-[66px] h-[66px] ml-[100px]  mt-[25px]" />
    </div>
 </div>
</div>
</div>

</div>



{/* passport section */}

<div className="passport  w-[full] h-[692px] mx-[116px] ">

<div  className=" flex flex-col  justify-center  text-center mt-[22px]" >
    <h2  className="text-[#022956] text-[40px] font-semibold"> Professional Certification Passport</h2>
</div>

<div className="parentdiv flex flex-row justify-center gap-16 ">
<div className="leftside-term w-[full]  justify-items-start align-middle mt-[228px] ">

<h2   className=" text-[#F27329] text-[32px] font-medium font-sans-serif-[lato] text-center">Validate skills, earn recognized<br></br> credentials, unlock job<br></br> opportunities </h2>
<button  className="text-[#022956]  border border-zinc-950 px-5  items-center  ml-[150px] mt-[50px]   text-[16px] font-bold w-[190] h-[48px]   transform transition-transform duration-300 hover:scale-125">Get it Now</button>
</div>



<div className="rightside-item w-[580px] h-[580px]  mt-[50px]">
  <img src={passport} alt="" className="" />
</div>
</div>





</div>






{/* section five */}


<div className="w-[full] h-[739px]">


<div  className=" flex flex-col  justify-center  text-center mt-[22px]" >
    <h2  className="text-[#022956] text-[40px] font-semibold"> What Are Clubs?</h2>
     <h3  className="text-[27px] text-[#F27329] font-semibold  mt-[2px]">Create your Club in just 5 Simple Steps</h3>
    
    </div>
     
  <div  className="flex justify-center flex-row gap-[150px] ">
     <div className="w-[246px] h-[241px] flex flex-col items-center mt-[54px]">
  <div className="w-[38px] h-[88px] flex items-center justify-center text-[#022956] text-[70px] font-semibold  text-center ">
    1
  </div>
  <div className="leftside content text-center mt-[10px]">
    <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[5px]">Create Your Club</h2>
    <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">Register on FrictionLearn to <br></br>establish club</p>
  </div>
</div>


    <div className="w-[246px] h-[241px]  flex flex-col  justify-center items-center mt-[36px]">
    <div className="w-[38px] h-[88px] flex items-center justify-center text-[#022956] text-[70px] font-semibold ">
    2
  </div> 
        <div className="leftside content mt-[10px] text-center ">
            <h2  className="text-[#F27329] text-[22px] font-semibold font-sans font-lato mt-[5px] " >Name Your Club</h2>
           <p  className="text-[16px] font-medium text-[#1D2228]  mt-[15px] text-center "> Choose a meaningful club name<br></br>reflecting its purpose</p>  </div>
       
    </div>


    <div className="w-[246px] h-[241px] flex flex-col items-center mt-[54px]">
  <div className="w-[38px] h-[88px] flex items-center justify-center text-[#022956] text-[70px] font-semibold  ">
    3
  </div>
  <div className="leftside content text-center mt-[10px]">
    <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[5px]">Invite Peer Members</h2>
    <p className="text-[16px] font-medium text-[#1D2228] mt-[15px]  text-center">Invite friends and classmates<br></br>to join your club.</p>
  </div>
</div>

     </div>

     <div className="flex justify-center gap-[192px]  mt-[30px] ">
  <div className="w-[246px] h-[241px] flex flex-col items-center mt-[24px]">
    <div className="w-[38px] h-[88px] flex items-center justify-center text-[#022956] text-[70px] font-semibold  ">
      4
    </div>
    <div className="leftside content text-center mt-[5px]">
      <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[5px]">Plan and Discuss</h2>
      <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">Regularly meet to discuss,<br></br>share skills, and plan</p>
    </div>
  </div>

  <div className="w-[246px] h-[241px] flex flex-col items-center mt-[24px]">
    <div className="w-[38px] h-[88px] flex items-center justify-center text-[#022956] text-[70px] font-semibold  ">
      5
    </div>
    <div className="leftside content text-center mt-[5px]">
      <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[5px]">Create Your Club</h2>
      <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">Organize events, workshops,<br></br>and study sessions</p>
    </div>
  </div>
</div>


</div>

{/* section six */}






{/* sectionseven  */}

<div className="w-full h-[703px]">
  <div className="flex flex-col justify-center text-center mt-[40px]">
    <h2 className="text-[#022956] text-[40px] font-semibold">Join Our Community Page</h2>
    <h3 className="text-[27px] text-[#F27329] font-semibold mt-[10px]">Discover Communities with 5 Key Steps</h3>
  </div>

  <div className="flex flex-wrap justify-evenly  space-x-4">
    <div className="w-full sm:w-auto h-[241px] flex flex-col justify-center items-center mt-[54px]">
      <img src={sevenimgone} alt="" className="w-[120px] h-[120px] mt-[20px]" />
      <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[37px]">Join Interest Groups</h2>
      <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">Connect with communities for<br />tailored networking and career<br />growth</p>
    </div>

    <div className="w-full sm:w-auto h-[241px] flex flex-col justify-center items-center mt-[54px]">
      <img src={sevenimgtwo} alt="" className="w-[120px] h-[120px] mt-[20px]" />
      <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[37px]">Engage in Incubation Discussions</h2>
      <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">Engage in Startup incubation<br />discussions for entrepreneurial<br />feedback</p>
    </div>

    <div className="w-full sm:w-auto h-[241px] flex flex-col justify-center items-center mt-[54px]">
      <img src={sevenimgthree} alt="" className="w-[120px] h-[120px] mt-[20px]" />
      <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[37px]">Explore Career Opportunities</h2>
      <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">Career paths, community<br />opportunities, guided by<br />experienced mentors</p>
    </div>
    </div>

<div  className="flex flex-wrap justify-evenly   space-x-4"> 


    <div className="w-full sm:w-auto h-[241px] flex flex-col justify-center items-center mt-[54px]">
      <img src={sevenimgfour} alt="" className="w-[120px] h-[120px] mt-[25px]" />
      <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[37px]">Collaborate on Projects</h2>
      <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">Collaborate on projects to<br />achieve shared goals together</p>
    </div>

    <div className="w-full sm:w-auto h-[241px] flex flex-col justify-center items-center mt-[54px]">
      <img src={sevenimgfive} alt="" className="w-[120px] h-[120px] mt-[25px]" />
      <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[49px]">Attend Exclusive Events</h2>
      <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">Participate in community<br />events to learn, connect, grow.</p>
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









{/* section ten */}

<div className="w-full h-[2-93px]">
<div  className=" flex flex-col  justify-center  text-center mt-[182px]"  >
<h2  className="text-[#022956]  text-[40px] font-semibold "> Our Valued Collaborators</h2>
</div>
<div className="overflow-hidden whitespace-nowrap  mt-[100px]">
      <div className="inline-block animate-scroll ">
        {collaborators.map((logo, index) => (
          <img 
            key={index} 
            src={logo} 
            alt={`logo ${index + 1}`} 
            className="inline-block mx-4"
            style={{ height: '80px', width: 'auto' , margin:'0 100px' }} // Adjust size as needed
          />
        ))}
      </div>
    </div>

</div>

{/* section eleven */}

<div className="eleventhsection  w-[full]">

  <div  className="mt-[100px] mb-[62px] flex justify-center text-center">
    <h1  className="text-[#022956] text-[40px] font-medium  font-sans-serif-[lato]">Guidance from the Best</h1>
  </div>

<div class="flex flex-col items-center">

<div  className={`first-element flex items-center space-x-20 bg-[#E7F2FF]  h-[182px] p-6 mb-[85px] w-[1300px]  ${isInView.first ? 'animate-fadeInLeft' : ''}`}>

    <div class="relative w-[283px] h-[282px] transform rotate-90 overflow-hidden rounded-[10%]">
    <img src={elevenone} alt="Mentor" class="w-full h-full object-cover transform -rotate-90 rounded-[10%]" />
  </div>

  <div class="ml-[227px] mb-[104px] mt-[104px]">
    <h2 class="text-[30px] font-bold text-[#022956]">Johnson</h2>
    <p class="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">Business Advisor</p>
    <p class="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px] ">Guiding entrepreneurs with strategic insights<br /> and practical business solutions.</p>
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






</div>







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

<div className="w-full h-[377px]">
  <div className="flex flex-col justify-center text-center mt-[20px]">
    <h2 className="text-[#022956] text-[40px] font-semibold font-sans font-lato">Our Growth at a Glance</h2>
  </div>
  <div>
    <div className="flex flex-row justify-between mt-[102px] mx-[30px] gap-[37px]">
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
      <div   className=" flex flex-col  justify-center  text-center mt-[80px]">
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
              className={`transition-all duration-500 ease-in-out gap-[90px] ${isActive ? 'scale-110' : 'scale-75 blur-sm'} ${
                isActive ? 'opacity-100' : 'opacity-50'
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
        <p className="text-[#1D2228] text-[16px] font-light">{testimonials[current].role}</p>
      </div>
      <div className="mt-[50px] mx-[20px] text-center  font-medium">
        <p className="text-[#1D2228] text-[36px] ml-[100px] mr-[100px] font-light">{testimonials[current].text}</p>
      </div>
    </div>








<Footer/>



    </div>
)
}
