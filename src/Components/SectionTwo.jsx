import React, { useRef, useState } from 'react';
import imgone from '../assets/imgone.png';
import imgtwo from '../assets/imgtwo.png';
import imgthree from '../assets/imgthree.png';
import imgfour from '../assets/imgfour.png';
import imgfive from '../assets/imgfive.png';
import imgsix from '../assets/imgsix.png';
import imgseven from '../assets/imgseven.png';
import imgeight from '../assets/imgeight.png';
import imgnine from '../assets/imgnine.png';
import imgten from '../assets/imgten.png';
import imgeleven from '../assets/imgeleven.png';

const items = [
  {
    img: imgone,
    title: "1. College and Industry Collaboration",
    description: "Partnering with top colleges and leading industries to provide cutting-edge courses and real-world insights."
  },
  {
    img: imgtwo,
    title: "2. AI-Powered Learning Support",
    description: "Enhance your education with AI-driven learning assistance for personalized support and improved outcomes."
  },
  {
    img: imgthree,
    title: "3. Early Course Exploration",
    description: "Discover and explore courses early to make informed educational decisions."
  },
  {
    img: imgfour,
    title: "4. Incubation for Idea Generators",
    description: "Offering dedicated support and resources to turn your innovative ideas into successful startups."
  },
  {
    img: imgfive,
    title: "5. Certification with Gamified Learning Methods",
    description: "Earn your certification through engaging gamified learning methods."
  },
  {
    img: imgsix,
    title: "6. Real-Time Freelance Projects",
    description: "Gain practical experience and generate income by working on live projects with our partner companies."
  },
  {
    img: imgseven,
    title: "7. Community Knowledge Sharing",
    description: "Collaborative platform for exchanging insights and expertise within a community."
  },
  {
    img: imgeight,
    title: "8. Club Creation and Collaboration",
    description: "Empower your community by creating and collaborating through dynamic clubs."
  },
  {
    img: imgnine,
    title: "9. Community Connections",
    description: "Building relationships and fostering collaboration within a supportive community."
  },
  {
    img: imgten,
    title: "10. Events with Industry Leaders",
    description: "Engage with industry leaders at exclusive events for insights and networking."
  },
  {
    img: imgeleven,
    title: "11. Personalized Learning Paths",
    description: "Customized educational routes tailored to individual learning styles and goals."
  }
];

export default function SectionTwo() {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
//     <div className="w-full flex flex-row 
//      shadow-md  px-4 md:px-0">
//       <div className="sticky top-[100px] self-start w-[491px] h-auto text-start mb-[40px] mt-[40px] md:ml-[104px]  ">
//       <h2 className="font-bold text-[#022956] 
//        lg:text-start 
//       md:text-center text-[22px] text-center      md:text-[40px] mb-[20px]">
//   What Sets FrictionLearn Apart From Other Platforms
// </h2>


//         <p className="lg:text-[20px] lg:text-start mt-4    md:text-center  text-center   md:text-[40px] mb-[20px]">
//           Discover the unique features and benefits that make FrictionLearn the best platform for your learning needs.
//         </p>
//       </div>
//       <div
//         ref={scrollContainerRef}
//         className="w-full max-w-[654px] lg:overflow-y-auto md:overflow-y-visible md:mt-[100px] md:mr-[50px] lg:static"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         {items.map((item, index) => (
//               <div key={index} className="flex  items-center bg-white rounded-lg shadow-md w-full h-auto mb-[30px] p-4">
//             <img src={item.img} alt={item.title} className="w-[52px] h-[52px] object-cover mb-4 md:mb-0 md:ml-[10px]  " />
//             <div className='flex flex-col md:ml-[24px]'>
//               <h3 className="text-[15px] lg:text-[25px] text-[#F27329] font-semibold text-start mb-2 ml-4">
//                 {item.title}
//               </h3>
//               <p className="text-[12px] lg:text-[20px] text-[#1D2228] font-normal text-start ml-4">
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>

<div className="lg:w-full flex flex-row shadow-md  md:px-0 gap-0 lg:gap-10 sm:gap-0  px-3 sm:px-5 lg:px-8">
  <div className="sticky top-[100px] self-start lg:w-[491px] lg:ml-[30px] h-auto text-start mb-[40px] mt-[40px]  mr-10 sm:mr-10 lg:mr-0">
    <h2 className="font-bold sm:text-[#241443] lg:text-[#FF5C00] text-[#241443] lg:text-start sm:text-start text-start text-[15px] sm:text-[20px] md:text-[30px] lg:text-[40px]  mb-[20px]  w-[159px] sm:[159px]  lg:w-[446px]  px-3 sm:px-5  lg:p-0">
      What Sets FrictionLearn Apart From Other Platforms
    </h2>

    <p className="lg:text-[20px] lg:text-start mt-4 sm:text-start  text-start text-[8px] sm:text-[16px] md:text-[18px]  mb-[20px]  text-[#FF5C00]  sm:text-[#FF5C00]    lg:text-[#241443]   w-[159px] sm:[159px]  lg:w-[446px] px-3 sm:px-5 lg:px-0">
      Discover the unique features and benefits that make FrictionLearn the best platform for your learning needs.
    </p>
  </div>
  <div
    ref={scrollContainerRef}
    className="w-full max-w-[654px] lg:overflow-y-auto md:overflow-y-visible md:mt-[100px] md:mr-[50px] lg:static ml-[-40px] sm:ml[-30px]  lg:ml-[100px]  "
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    {items.map((item, index) => (
      <div key={index} className="flex items-center bg-white rounded-lg shadow-md lg:w-full lg:h-auto mb-[30px] p-4 ">
        <img
          src={item.img}
          alt={item.title}
          className="lg:w-[52px] lg:h-[52px]   sm:w-[25px] sm:h-[25px]  w-[25px] h-[25px] object-cover mb-4 md:mb-0 md:ml-[10px]"
        />
        <div className="flex flex-col md:ml-[24px]">
          <h3 className="text-[8px] sm:text-[15px] md:text-[18px] lg:text-[25px] text-[#241443] font-semibold text-start mb-2 ml-4">
            {item.title}
          </h3>
          <p className="text-[6px] sm:text-[12px] md:text-[15px] lg:text-[20px] text-[#1D2228] font-normal text-start ml-4">
            {item.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>





        // <div className="flex md:grid-cols-2 gap-4 mt-[120px]">
        //   <div className="  w-[564px]  h-[249px] m-auto max-w-screen-lg lg:py-16  ">
        //     <h2 className=" text-[40px] font-bold text-[#FF5C00] mb-4 text-start  ml-[60px]">
        //     What Sets FrictionLearn<br></br> Apart From Other<br></br> Platforms
        //     </h2>
        //     <p className="text-[18px] text-center ml-[20px] text-[#241443]">
        //     Empowering students with real-world skills through industry collaboration, practical projects, and dynamic communities.
        //     </p>
        //   </div>
        //   <div className="lg:overflow-y-scroll pr-4 sm:pr-6 lg:pr-10 scrollbar-hide py-4 sm:h-auto md:h-[650px] lg:h-[729px]">
        //     <div className="space-y-4">
        //       {items.map((item, index) => (
        //         <div
        //           key={index}
        //           className="flex items-center bg-white rounded-lg shadow-md p-4 sm:p-8 sm:h-auto lg:p-5"
        //         >
        //           <img
        //             src={item.img}
        //             alt={item.title}
        //             className="w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] object-cover rounded-lg"
        //           />
        //           <div className="ml-4 sm:ml-6">
        //             <h3 className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[25px] text-[#241443] font-semibold">
        //               {item.title}
        //             </h3>
        //             <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#1D2228]">
        //               {item.description}
        //             </p>
        //           </div>
        //         </div>
        //       ))}
        //     </div>
        //   </div>
        // </div>
  
  );
}
