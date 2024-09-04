import React, {useState} from 'react'
// import SectionTwo from "./SectionTwo";
import content from '../assets/Content.png';
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


import elevenone from '../assets/Vector 56 (2).png';
import eleventwo from '../assets/Vector 57.png';
import eleventhree from '../assets/Vector 58.png';
import elevenfour from '../assets/Vector 57 (1).png';
import elevenfive from '../assets/Vector 56 (1).png';
import elevensix from '../assets/Vector 57 (2).png';

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
    <div className='w-full'>

{/* section one  */}


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


<section>


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









{/* section two */}


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

























{/* what our mind goal new design */}

<div  className="w-full h-[840px]  mt-[120px]">
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


<SectionTwo />





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


{/* section four tvs */}
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
    <img src={whydoprojectone} alt="" className="w-[76px] h-[77px] mt-[60px] ml-[160px] mb-[20px]" />

    <div className="subchild w-[428px] text-center  ml-[-20px] ">
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
    <img src={whydoprojecttwo} alt="" className="w-[69px] h-[69px] mt-[60px] ml-[160px] mb-[20px]" />

    <div className="subchild w-[428px] text-center ml-[-20px]">
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
    <img src={whydoprojectthree} alt="" className="w-[51px] h-[71px]  mt-[60px] ml-[160px]  mb-[20px]" />

    <div className="subchild w-[428px] text-center  ml-[-20px] ">
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

</section>


    </div>
  )
}
