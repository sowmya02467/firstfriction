import React from 'react';
import { Link } from 'react-router-dom';


import NewNavbars from './NewNavbars';
import aboutskillimg from "../assets/aboutskillimg.png";
import arrow from '../assets/arrow.png';
import arr from "../assets/arr.png";
import goal from "../assets/goal.png";

// mission imgs
import missionimg from "../assets/missionimg.png";
import visionimg from "../assets/visionimg.png";

// mentorimages
import mentoroneimg from "../assets/mentoroneimg.png";
import mentortwoimg from "../assets/mentortwoimg.png";
import mentorthreeimg from "../assets/mentorthreeimg.png";



import Card from '../Components/Card';

import star from "../assets/star.png";
import groupone from "../assets/gone.png";
import grouptwo from "../assets/gtwo.png";
import groupthree from "../assets/gthree.png";
import groupfour from "../assets/gone.png";

import joincom from "../assets/joincom.png";
import fllogo from '../assets/fllogone.png'; // Replace with your logo path
import query from '../assets/query.png'; 
import mentor from '../assets/mentor.png';
import Footer from './Footer';

const cardData = [
  {
    image: groupone,
    title: 'Innovation',
    description: 'We embrace creativity and forward-thinking to continuously improve our platform and educational experiences.'
  },
  {
    image: grouptwo,
    title: 'Engagement',
    description: "We strive to make learning interactive and enjoyable through gamified elements and personalized content."
  },
  {
    image: groupthree,
    title: 'Collaboration',
    description: 'We foster strong connections between learners and industry experts to enhance learning and professional growth.'
  },
  {
    image: groupfour,
    title: 'Excellence',
    description: 'We aim for excellence in everything we do, from content creation to user experience, ensuring the highest quality educational solutions..'
  },
  {
    image: groupfour,
    title: 'Empowerment',
    description: 'We are dedicated to providing tools and resources that help students achieve their fullest potential and succeed in their careers..'
  },
  {
    image: groupfour,
    title: 'Integrity',
    description: 'We are committed to maintaining transparency, fairness, and high standards in all aspects of our platform and interactions..'
  }
];






















export default function Aboutus() {
  return (
    <div  className='w-full'>


      {/* navbar section */}
      <NewNavbars />


{/* first section */}

<div  className='  flex flex-row gap-3 ml-5 mt-3'>
 <div   className='  flex flex-row'>    
 <Link to="/">
      <h2 className='text-[#241443] text-[15px] font-poppins font-semibold'>
        Home
      </h2>
    </Link>
         <img
                  src={arr}
                  alt=""
                  className="w-[15px] h-[10px] ml-[8px] mt-[14px]"
                /> </div>
    <h2  className=' text-[#FF5C00]  text-[15px] font-poppins font-semibold'>About us</h2>
</div>



<section>

<div>
          <div className="flex  flex-col justify-center items-center text-center mt-[42px]">
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


{/* our mission */}
{/* 
        <section    className=' w-full mt-[82px] '>

 <div  className=' w-full h-[400px] flex flex-row gap-6'>  

    <div className='ml-[30px]'>
        <h1 className=' text-[#FF5C00]  text-[50px] font-lato font-black  ml-[35px]' > Our Mission</h1>
        <p className='      w-[805px] h-[131px] text-[#241443]  text-[22px] font-lato font-semibold ml-[74px]  mt-[40px]  '>"To revolutionize the learning experience by offering an engaging, gamified platform that connects learners with industry experts, promotes upskilling through personalized learning paths, and empowers students to achieve their fullest potential in their academic and professional careers."</p>
    </div>
<div   className='mt-[32px]  ml-[56px]'>
    <img src={missionimg} alt=""    className='w-[305px] h-[225px]'/>
</div>
    
     </div>



     <div  className=' w-full h-[400px] flex flex-row '>  
  <div   className='mt-[32px] ml-[100px]'>
<img src={visionimg} alt=""   className='w-[405px] h-[275px]'/>
</div>


<div  className='ml-[20px]'>
    <h1 className=' text-[#FF5C00]  text-[50px] font-lato font-black mr-[20px]  text-end' > Our Vision</h1>
    <p className='  w-[805px] h-[131px] text-[#241443]  text-[22px] font-lato font-semibold ml-[74px]  mt-[40px]  '>"To become a global leader in EdTech innovation, transforming education by bridging the gap between academia and industry, fostering a culture of continuous learning, creativity, and growth, and creating a future where every learner is equipped with the skills and knowledge needed to thrive in a rapidly evolving world."</p>
</div>

 </div>





        </section> */}

<section className='w-full mt-[82px]  p-4 sm:p-8 lg:p-0'>

<h1 className='text-[#FF5C00] text-[30px] lg:text-[50px] font-lato font-black lg:ml-[35px] text-center lg:text-left lg:ml-[55px]'>
        Our Mission
      </h1>
  {/* Our Mission */}
  <div className='w-full h-auto flex flex-col lg:flex-row gap-6  mb-7'>
    <div className='order-2 sm:order-1 md:order-1 lg:order-2 mt-6 mx-auto lg:mt-[32px] lg:ml-[126px]'>
      <img src={missionimg} alt="Mission Image" className='w-[200px] lg:w-[305px] h-[150px] lg:h-[225px]' />
    </div>
    <div className='order-2 sm:order-2 md:order-2 lg:order-1 ml-4 lg:ml-[74px]'>
  
      <p className='w-full lg:w-[805px] h-auto lg:h-[131px] text-[#241443] text-[16px] lg:text-[22px] font-lato font-semibold text-center lg:text-left mt-[20px] lg:mt-[40px]'>
        "To revolutionize the learning experience by offering an engaging, gamified platform that connects learners with industry experts, promotes upskilling through personalized learning paths, and empowers students to achieve their fullest potential in their academic and professional careers."
      </p>
    </div>
  </div>

  {/* Our Vision */}

  <h1 className='text-[#FF5C00] text-[30px] lg:text-[50px] font-lato font-black text-center lg:text-right lg:mt-7  lg:mr-[55px]'>
        Our Vision
      </h1>
  <div className='w-full h-auto flex flex-col lg:flex-row mt-4'>


    <div className='order-1 sm:order-1 md:order-1 lg:order-1 mt-6 mx-auto lg:mt-[32px] lg:ml-[100px]'>
      <img src={visionimg} alt="Vision Image" className='w-[250px] lg:w-[405px] h-[175px] lg:h-[275px]' />
    </div>
    <div className='order-1 sm:order-2 md:order-2 lg:order-2 ml-4 lg:ml-[20px] mt-4 lg:mt-0'>
     
      <p className='w-full lg:w-[805px] h-auto lg:h-[131px] text-[#241443] text-[16px] lg:text-[22px] font-lato font-semibold text-center lg:text-left mt-[20px] lg:mt-[40px]   mr-[74px]'>
        "To become a global leader in EdTech innovation, transforming education by bridging the gap between academia and industry, fostering a culture of continuous learning, creativity, and growth, and creating a future where every learner is equipped with the skills and knowledge needed to thrive in a rapidly evolving world."
      </p>
    </div>
  </div>
</section>


{/* our goal */}

{/* <section  className='w-full h-[696px] bg-[#241443]'>

  <div className='flex flex-col justify-center p-4 mx-[100px]'>
        <h1 className=' text-[#FF5C00]  text-[50px] font-lato font-black  text-center  mt-[50px]' >Our Goal</h1>
        <p className='   w-[1122px] h-[99px]   text-[#FFFFFF]  text-[22px] font-lato font-semibold  ml-[20px] mt-[50px]  text-center '>"To create a seamless, interactive, and rewarding educational journey that not only educates but also inspires students to pursue their passions, explore diverse career paths, and develop skills that are directly aligned with industry needs."</p>
    </div>
<div className='flex flex-1 justify-evenly  mt-[74px]'>
    <img src={goal} alt=""  className='w-[266px] h-[271px]' /> 
    <img src={goal} alt=""  className='w-[266px] h-[271px]' />
    <img src={goal} alt=""  className='w-[266px] h-[271px]' />
    
    </div>
</section> */}
<section className='w-full h-auto bg-[#241443]'>
  <div className='flex flex-col justify-center lg:p-4 mx-4 sm:mx-[20px] md:mx-[40px] lg:mx-[100px]'>
    <h1 className='text-[#FF5C00] text-[18px] sm:text-[45px] md:text-[50px] font-lato font-black text-center mt-[30px] sm:mt-[40px] md:mt-[50px]'>
      Our Goal
    </h1>
    <p className='w-full sm:w-[90%] md:w-[1122px] h-auto sm:h-auto text-[#FFFFFF] text-[15px] sm:text-[20px] md:text-[22px] font-lato font-semibold mt-[20px] sm:mt-[30px] md:mt-[50px] text-center'>
      "To create a seamless, interactive, and rewarding educational journey that not only educates but also inspires students to pursue their passions, explore diverse career paths, and develop skills that are directly aligned with industry needs."
    </p>
  </div>
  
  <div className='flex flex-col sm:flex-row md:flex-row justify-center gap-4 mt-[30px] sm:mt-[50px] md:mt-[74px]'>
  {/* Image 1: Visible only on small screens */}
  <img src={goal} alt="Goal Image 1" className='w-[200px] sm:w-[226px] md:w-[266px] h-auto sm:h-[226px] md:h-[271px] block sm:block md:block ml-[90px] sm:ml-[30px]' />

  
  {/* Image 2: Visible only on medium screens */}
  <img src={goal} alt="Goal Image 2" className='w-[200px] sm:w-[226px] md:w-[266px] h-auto sm:h-[226px] md:h-[271px] hidden sm:hidden md:block' />
  
  {/* Image 3: Visible only on medium screens */}
  <img src={goal} alt="Goal Image 3" className='w-[200px] sm:w-[226px] md:w-[266px] h-auto sm:h-[226px] md:h-[271px] hidden sm:hidden md:block' />
</div>

</section>









{/* mentors */}
{/* <section className='w-full h-[1135px] bg-[#9791FD] flex justify-center'>
  <div className='w-[1218px] h-[1018px] bg-[#241443] mt-[60px]'>

  <div className="flex  flex-col justify-center items-center text-center mt-[42px]">
            <h2 className="text-[#FF5C00] text-[30px] font-black text-center font-poppines">
            Meet Our Team
            </h2>
            <h2 className="text-[#F6F1FF] lg:text-[40px] mt-[20px] px-1 sm:text-[23px] text-[22px] font-bold text-center font-poppines">
            "Introducing the Visionaries Behind FrictionLearn"
            </h2>
          </div>


          <div className='flex flex-1 justify-evenly  mt-[74px]'>

            <div className='mt-[71px]  ' >
            <img src={mentoroneimg} alt=""  className='w-[280px] h-[450px]' /> 
            <h3 className='text-[#F6F1FF]  text-[25px] font-bold  ml-[30px] mt-[22px]'>ROHITH KUMAR</h3>
            <p  className='text-[#F6F1FF] text-[18px] font-semibold  ml-[50px]'> Marketing Head</p>
            </div>
     <div>
     <img src={mentortwoimg} alt=""  className='w-[356px] h-[596px]' /> 
     <h3 className='text-[#F6F1FF]  text-[25px] font-bold  ml-[90px] mt-[22px]'>VIKAS PAWAR </h3>
     <p className='text-[#F6F1FF] text-[18px] font-semibold  ml-[130px]'> MD & CEO</p>

     </div>

     <div  className='mt-[71px]'>
<img src={mentorthreeimg} alt=""  className='w-[280px] h-[450px]' /> 
<h3 className='text-[#F6F1FF] text-[25px] font-bold  ml-[30px] mt-[22px]'>SEEMA CHAVAN </h3>
<p className='text-[#F6F1FF] text-[18px] font-semibold  ml-[80px]'>Developer</p>

    </div>

    
    </div>

  </div>
</section> */}

<section className='w-full h-auto bg-[#9791FD] flex justify-center py-10'>
  <div className='w-full max-w-[1218px] h-auto bg-[#241443] mt-[60px] p-4'>
    {/* Header Section */}
    <div className="flex flex-col justify-center items-center text-center mt-[42px]">
      <h2 className="text-[#FF5C00] text-[18px] sm:text-[28px] md:text-[30px] font-black font-poppines">
        Meet Our Team
      </h2>
      <h2 className="text-[#F6F1FF] text-[20px] sm:text-[20px] md:text-[23px] lg:text-[40px] mt-[20px] px-1 font-bold font-poppines">
        "Introducing the Visionaries Behind FrictionLearn"
      </h2>
    </div>

    {/* Team Members Section */}
    <div className='flex lg:flex-row justify-center gap-6 mt-[74px]'>
      <div className='flex flex-col items-center text-center'>
        <img src={mentoroneimg} alt="Rohith Kumar" className='w-[200px] sm:w-[280px] md:w-[280px] h-auto sm:h-[400px] md:h-[450px]' />
        <h3 className='text-[#F6F1FF] text-[10px] sm:text-[22px] md:text-[25px] font-bold mt-[22px]'>ROHITH KUMAR</h3>
        <p className='text-[#F6F1FF] text-[6px] sm:text-[18px] md:text-[18px] font-semibold'>Marketing Head</p>
      </div>

      <div className='flex flex-col items-center text-center'>
        <img src={mentortwoimg} alt="Vikas Pawar" className='w-[200px] sm:w-[356px] md:w-[356px] h-auto sm:h-[500px] md:h-[596px]' />
        <h3 className='text-[#F6F1FF] text-[10px] sm:text-[22px] md:text-[25px] font-bold mt-[22px]'>VIKAS PAWAR</h3>
        <p className='text-[#F6F1FF] text-[6px] sm:text-[18px] md:text-[18px] font-semibold'>MD & CEO</p>
      </div>

      <div className='flex flex-col items-center text-center'>
        <img src={mentorthreeimg} alt="Seema Chavan" className='w-[200px] sm:w-[280px] md:w-[280px] h-auto sm:h-[400px] md:h-[450px]' />
        <h3 className='text-[#F6F1FF] text-[10px] sm:text-[22px] md:text-[25px] font-bold mt-[22px]'>SEEMA CHAVAN</h3>
        <p className='text-[#F6F1FF] text-[6px] sm:text-[18px] md:text-[18px] font-semibold'>Developer</p>
      </div>
    </div>
  </div>
</section>










{/* seema */}
<section>
<div className="flex items-center justify-center">
        <img src={star} alt="star" className="w-[36px] h-[36px] mr-[-12px]" />
        <h1 className="mb-4 text-[18px] text-center text-[#FF5C00] font-black font-Lato font-sans md:text-5xl lg:text-[30px] mt-8">
          Our Value
        </h1>
      </div>
      <p className="mb-10 text-[20px] text-center font-semibold text-Poppins text-[#241443] lg:text-[40px] sm:px-16 xl:px-48">
        Empowering growth through innovation, engagement, and collaboration.
      </p>

<div className="container mx-auto px-4">
  {/* Grid container */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {cardData.map((card, index) => (
      <Card
        key={index}
        image={card.image}
        title={card.title}
        description={card.description}
      />
    ))}
  </div>
</div>


</section>

{/* joinour community */}

<section>

<div className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8">
    {/* Left Side Content */}
    <div className="flex flex-col justify-center h-full mt-[200px]">
      <h1 className="mb-4 text-2xl font-semibold text-[#241443] lg:text-[45px]">
        Join Our Community
      </h1>
      <p className="mb-8 text-sm font-normal text-[#FF5C00] lg:text-[30px] dark:text-gray-400">
        "Be a part of our innovative journey in transforming education
        through technology. Collaborate, learn, and grow with like-minded
        EdTech enthusiasts at FrictionLearn!"
      </p>

      {/* Button */}
      <div className="mt-auto flex justify-center md:justify-start mb-[200px]">
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-[#F27329] text-white text-base md:text-lg font-semibold rounded-full hover:bg-orange-400 transition-colors"
        >
          Become an Instructor
          <img
            src={arrow}
            alt="Arrow"
            className="w-3 h-2 md:w-4 md:h-3 ml-3"
          />
        </a>
      </div>
    </div>

    {/* Right Side Image */}
    <div className="flex justify-center lg:justify-end">
      <img
        src={joincom}
        alt="Join Community"
        className="w-full h-auto max-w-[540px] lg:max-h-[600px]"
      />
    </div>
  </div>
</div>

</section>



<section>
<div className="bg-[#251c46]  md:p-8 text-white">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between">
        {/* Left Section - Logo */}
        <div className=" md:order-1">
          <img src={fllogo} alt="Logo" className="w-[126px] h-[94px]" />
        </div>

        {/* Center Section - Text */}
        <div className="flex-1 text-center md:text-center lg:mx-12 md:order-2">
          <h2 className="text-[40px]  font-semibold mb-4">
            Questions about our <span className="text-[#FF5C00]">‘FrictionLearn’</span>
          </h2>
          <p className="text-[18px] font-normal text-Poppins mb-2">
            "Curious about FrictionLearn? Ask us anything! We're here to discuss our gamified e-learning platform and how we're revolutionizing education."
          </p>

          {/* Bottom Section - Query Box */}
          <div className="flex mt-20">
            <input
              type="text"
              placeholder="Raise your Query....."
              className="w-64 md:w-96 px-4 py-2 rounded-l-full text-black"
            />
            <button className="px-6 py-2 bg-[#FF5C00] text-white font-semibold rounded-r-full hover:bg-orange-600 transition-colors">
              SEND
            </button>
          </div>
        </div>

        {/* Right Section - Illustration */}
        <div className=" md:mt-[100px] md:order-3">
          <img src={query} alt="Illustration" className="w-[370px] h-[263px]" />
        </div>
      </div>
    </div>

</section>






<section className="main w-full h-[800px] sm:h-auto sm:mr-0  ">

<div className="flex flex-col justify-center items-center text-center mt-[182px] sm:mt-[60px] md:mt-[90px]">
  <h2 className="text-[#FF5C00] px-1 sm:px-4 text-[25px] sm:text-[30px] lg:text-[40px] font-semibold text-center font-poppines">
    Become an Instructor/Mentor
  </h2>
</div>

<div className="parent flex flex-col  justify-around sm:flex-col md:flex-row  mt-[100px] sm:mt-[40px] md:mt-[60px]">

  <div className="childleft sm:text-center md:ml-0   px-5 sm:px-5 lg:px-0   lg:ml-10">
    <h2 className="text-[#022956] px-1 sm:px-4 text-[22px] sm:text-[30px] lg:text-[40px]  font-bold text-start  font-poppines">
      Let's Join Us & Spread Your<br /> Knowledge
    </h2>

    <h6 className="text-[#FF5C00] px-1 sm:px-4 text-[18px] sm:text-[30px] lg:text-[30px]  font-bold font-poppines line-height-[32px] text-start">
      Welcome to FrictionLearn's Mentor Program!
    </h6>
    <p className="text-[#6B7083] w-full lg:w-[689px] h-auto px-1 sm:px-4 text-[12px] sm:text-[30px] lg:text-[25px] font-medium font-poppines line-height-[32px] text-start mt-[20px]">
      Empower the next generation by sharing your expertise. Guide learners through personalized insights and real-world experiences. Expand your network by connecting with ambitious students and professionals. Join us in shaping careers and making a meaningful impact on future talent.
    </p>

    {/* <div className="mt-[30px]">

      <div className="flex flex-row items-center justify-center md:justify-start mt-4">
        <button className="w-full md:w-[340px] h-[62px] gap-5 bg-[#241443] rounded-full text-[#ffffff] text-[16px] md:text-[18px] font-medium font-poppines flex flex-row justify-center items-center">
          <span>Become an Instructor</span>
          <img src={arrow} alt="" className="w-[20px] md:w-[26px] h-[14px] md:h-[18px] ml-2" />
        </button>
      </div>
    </div> */}
  </div>

  <div className="childright lg:mt-4  mt-8 sm:mt-9 sm:mx-auto ml-10 sm:ml-10 lg:ml-20 ">
    <img src={mentor} alt="passportimg" className="w-[80%] md:w-[416px] h-auto md:h-[416px] " />
  </div>

  {/* <div className="mt-[30px]">

<div className="flex flex-row items-center justify-center md:justify-start mt-4">
  <button className="w-full md:w-[340px] h-[62px] gap-5 bg-[#241443] rounded-full text-[#ffffff] text-[16px] md:text-[18px] font-medium font-poppines flex flex-row justify-center items-center">
    <span>Become an Instructor</span>
    <img src={arrow} alt="" className="w-[20px] md:w-[26px] h-[14px] md:h-[18px] ml-2" />
  </button>
</div>
</div> */}

</div>
<div className="mt-[30px]  mb-10  ml-20">

<div className="flex flex-row items-center justify-center md:justify-start mt-4">
  <button className="w-full md:w-[340px] h-[62px] gap-5 bg-[#241443] rounded-full text-[#ffffff] text-[16px] md:text-[18px] font-medium font-poppines flex flex-row justify-center items-center">
    <span>Become an Instructor</span>
    <img src={arrow} alt="" className="w-[20px] md:w-[26px] h-[14px] md:h-[18px] ml-2" />
  </button>
</div>
</div>

</section>

<Footer />

    </div>
  )
}
