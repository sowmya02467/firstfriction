import React from 'react';
import Section from './Section';
import NewNavbars from './NewNavbars';
import communityimgs from "../assets/Incubation/incubationimg.png";
import backgroundImage from '../assets/Incubation/incubationbgimg.png';


import success from "../assets/Incubation/success.png";
import menimg from "../assets/Incubation/menimg.png"

import { Link } from "react-router-dom"; // Import Link from react-router-dom
import arr from "../assets/arr.png";
import Footer from './Footer';

export default function NewIncubation() {
  return (
    <div className=' w-full'>

 {/* navbar section */}

 <NewNavbars />



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
    <h2  className=' text-[#FF5C00]  text-[15px] font-poppins font-semibold'>Incubation</h2>
</div>



 <section className="one w-[390px] sm:w-[390px] md:w-full h-auto   sm:h-[501px]   bg-cover md:p-0 sm:p-10 p-4" style={{ backgroundImage: `url(${backgroundImage})` }}>

<div>
    <h1 className='text-[25px] sm:text-[25px] md:text-[85px] font-bold text-[#FF5C00] text-center  md:mt-[98px]'>
        <span className='text-[25px] sm:text-[50px] md:text-[85px] font-bold text-[#0E1D5F]'>Join India’s Best
      </span><br />
      Students Incubation 
    </h1>
    </div>


    <div  className='flex md:flex-row justify-around  sm:flex-col flex-col'>
  <div className="left mr-5  md:ml-[53px]">  
     <h1 className='  md:w-[636px] md:h-auto sm:w-[360px] w-[360px]        text-[25px] sm:text-[8px] md:text-[50px] font-bold font-popines text-[#241443] text-start mt-[10px] sm:mt-[14px] md:mt-[289px]'>
    We Help Early stage
Startups to Define Their
Goals &  Get Early
Funding
    </h1></div>
    <div>
    <img src={communityimgs} alt="" className='w-[333px] sm:w-[600px] md:w-[686px] h-auto mx-auto mt-[20px] sm:mt-[30px] md:mt-[130px]' />
    </div>


    </div>

   
    <div className="flex justify-center lg:justify-start mt-[40px] md:mt-[60px] lg:mt-[-73px] lg:ml-[53px]">
                <button className="w-[180px] md:w-[264px] h-[50px] md:h-[62px] bg-[#FF5C00] rounded-full text-[#ffffff] text-[16px] md:text-[18px] font-medium font-poppines flex items-center justify-center">
                  <span>Apply for Incubation</span>
                  
                </button>
              </div>


</section>








{/* seems sections  */}

        {/* section two */}

        <div className="flex flex-col md:flex-row items-center bg-[#241443] py-16 px-6 md:px-20 lg:px-32  mt-[600px]">
      {/* Left Side - Image */}
      <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
        {/* Container with custom border styling */}
        <div className="relative overflow-hidden shadow-lg w-full max-w-[300px] md:max-w-[400px] bg-white rounded-lg mt-16">
          <img
            src={menimg} // Replace with actual image path
            alt="Investor"
            className="w-full h-auto object-cover border-b-[20px] border-l-[20px] border-white" // Ensures the image fills the space properly
          />
        </div>
      </div>

      {/* Right Side - Testimonial */}
      <div className="md:w-2/3 text-white md:ml-10">
        <h2 className="text-[#FF5C00] text-[15px] lg:text-[30px] font-black mb-8 font-Lato font-sans">
          What our Investor Says
        </h2>
        <p className="text-[15px] md:text-[30px] mb-4 font-poppins font-medium">
          "I've been fortunate to engage with the FL incubation community at past events over the last few years, 
          and always walk away impressed with the passion and caliber of talent that FL incubation brings together for students."
        </p>
        <p className="font-medium font-poppins text-[#FF5C00] text-[12px] lg:text-[20px]">
          ROMANTH GAROX
        </p>
        <p className="text-[10px] lg:text-[16px] font-poppins font-normal">CEO at Romanth Groups</p>
      </div>
    </div>

        {/* section three */}

        <div className="flex flex-col md:flex-row justify-between items-center bg-white py-8 px-6 md:px-20 lg:px-25">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-[20px] md:text-[35px] font-semibold text-[#241443] font-poppins mb-4 mt-16">
          "Unlock Expert Mentorship for Your Long-Term Business Vision Across Diverse Industries"
        </h1>
        <p className="text-[14px] md:text-[20px] text-[#FF5C00] font-poppins font-normal mb-6">
          Gain expert insights and strategies from seasoned mentors to shape your long-term business vision. 
          Get guidance from industry leaders across diverse sectors for lasting growth and success.
        </p>
        <button className="bg-[#241443] text-white py-2 px-4 rounded-full mt-4 hover:bg-[#3C0C70] text-[14px] lg:text-[18px] font-semibold font-poppins">
          Get Started Now
        </button>
      </div>

      {/* Right Side - Image/Graphic */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="relative">
          {/* Image or Illustration */}
          <img
            src={success} // Replace this with the path to your image
            alt="Mentorship Success"
            className="w-full max-w-[400px] md:max-w-[450px] lg:max-w-[500px] object-contain"
          />
          {/* Success Label */}
         
        </div>
      </div>
    </div>








{/* incubation section */}

<Section />

<Footer />
    </div>
  )
}
