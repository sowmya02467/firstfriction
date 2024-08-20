// 


// import React, { useRef, useEffect, useState } from 'react';
// import imgone from '../assets/imgone.png';
// import imgtwo from '../assets/imgtwo.png';
// import imgthree from '../assets/imgthree.png';
// import imgfour from '../assets/imgfour.png';
// import imgfive from '../assets/imgfive.png';
// import imgsix from '../assets/imgsix.png';
// import '../index.css'
// const items = [
//   {
//     img: imgone,
//     title: "1. College and Industry Collaboration",
//     description: "Partnering with top colleges and leading industries to provide cutting-edge courses and real-world insights."
//   },
//   {
//     img: imgtwo,
//     title: "2. AI-Powered Learning Support",
//     description: "Enhance your education with AI-driven learning assistance for personalized support and improved outcomes."
//   },
//   {
//     img: imgthree,
//     title: "3. Early Course Exploration",
//     description: "Discover and explore courses early to make informed educational decisions."
//   },
//   {
//     img: imgfour,
//     title: "4. Incubation for Idea Generators",
//     description: "Offering dedicated support and resources to turn your innovative ideas into successful startups."
//   },
//   {
//     img: imgfive,
//     title: "5. Certification with Gamified Learning Methods",
//     description: "Earn your certification through engaging gamified learning methods."
//   },
//   {
//     img: imgsix,
//     title: "6. Real-Time Freelance Projects",
//     description: "Gain practical experience and generate income by working on live projects with our partner companies."
//   },
//   {
//     img: imgsix,
//     title: "7. Community Knowledge Sharing",
//     description: "Collaborative platform for exchanging insights and expertise within a community."
//   },
//   {
//     img: imgsix,
//     title: "8. Club Creation and Collaboration",
//     description: "Empower your community by creating and collaborating through dynamic clubs."
//   },
//   {
//     img: imgsix,
//     title: "9. Community Connections",
//     description: "Building relationships and fostering collaboration within a supportive community."
//   },
//   {
//     img: imgsix,
//     title: "10. Events with Industry Leaders",
//     description: "Engage with industry leaders at exclusive events for insights and networking."
//   },
//   {
//     img: imgsix,
//     title: "11. Personalized learning paths",
//     description: "Customized educational routes tailored to individual learning styles and goals."
//   }
// ];

// export default function SectionTwo() {
//   const scrollContainerRef = useRef(null);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;
//     let scrollSpeed = 1; // Change this value to control the scroll speed

//     const scroll = () => {
//       if (!isPaused) {
//         scrollContainer.scrollTop += scrollSpeed;
//         if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
//           scrollContainer.scrollTop = 0; // Scroll back to top
//         }
//       }
//     };

//     const interval = setInterval(scroll, 30); // Adjust the interval for smoothness

//     return () => clearInterval(interval);
//   }, [isPaused]);

//   return (
//     <div className="w-full h-[2366px] flex">
//       <div className="sticky top-[100px] self-start w-[300px]">
//         <h2 className="text-[40px] font-bold text-[#022956] text-center">
//           What Sets<br />FrictionLearn Apart<br />From Other Platforms
//         </h2>
//         <p className="text-[18px] font-normal text-[#1D2228] text-center mt-[58px]">
//           Empowering students with real-world skills<br /> through industry collaboration, practical<br /> projects, and dynamic communities.
//         </p>
//       </div>

//       <div
//         ref={scrollContainerRef}
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//         className="ml-[150px] h-[1000px] overflow-hidden relative"
//       >
//         <div className="w-full h-full absolute top-0 left-0 overflow-y-scroll scrollbar-hide">
//           {items.map((item, index) => (
//             <div key={index} className="w-full h-[189px] mt-[23px] shadow-lg flex">
//               <img src={item.img} alt="" className="w-[52px] h-[52px] mt-[20px] ml-[44px]" />
//               <div className="ml-[23px] text-start">
//                 <h3 className="text-[#F27329] text-[30px] font-semibold mt-[20px]">{item.title}</h3>
//                 <p className="text-[#1D2228] text-[20px] font-normal mt-[25px]">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }






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
    description: "Partnering with top colleges and leading industries to /> provide cutting-edge courses and real-world insights."
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
    title: "11. Personalized learning paths",
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
    <div className="w-full h-[2366px] flex  shadow-md bg-slate-200 ">
      <div className="sticky top-[100px] self-start w-[491px] h-[249px] text-start mb-[100px]  mt-[100px] ml-[104px] mr-[166px] ">
        <h2 className="text-[40px] font-bold text-[#022956] text-start">
          What Sets<br />FrictionLearn Apart<br />From Other Platforms
        </h2>
        <p className="text-lg text-start mt-4 mb-[40px]">
          Discover the unique features and benefits that make FrictionLearn the best platform for your learning needs.
        </p>
      </div>
      <div
        ref={scrollContainerRef}
        className="scroll-hidden overflow-y-scroll   my-[100px] mr-[50px] "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {items.map((item, index) => (
          <div key={index} className="">
            <div className="flex flex-row items-center bg-white rounded-lg shadow-md  w-[654px] h-[189px]  mb-[50px]">
             <div  className='mb-[101px]  mt-[36px]'> <img src={item.img} alt={item.title} className="w-[52px] h-[52px] object-cover ml-[20px]" /></div>
              
        
            <div className=' relative mb-[40px] ml-[24px]' >
            <h3 className="text-[25px] text-[#F27329] font-semibold text-start mt-[40px] mb-[20px]  ml-[30px]">{item.title}</h3>
            <p className="mx-[30px] text-[20px] text-[#1D2228] font-normal text-start ">{item.description}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}