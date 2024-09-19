import React, { useState, useEffect } from "react";
import backgroundOne from "../assets/backgroundone.png";
import backgroundTwo from "../assets/backgroundtwo.png";
import backgroundThree from "../assets/backgroundthree.png";
import arrowone from "../assets/arrow.png";
const slides = [
  {
    backgroundImage: `url(${backgroundOne})`,
    title: (
      <>
        <p className="text-[16px] text-[#241443] font-semibold ">
          100% Quality courses
        </p>
        Advance Your Career in<br></br> a Digitalized{" "}
        <span className=" bg-[#FFCC1F] p-1 rounded-full text-[#241443]">
          World
        </span>
      </>
    ),

    subtitle:
      "We Have 32k+ Online Courses with Gamified Technology & 400K+ Online Registered Students.",
  },
  {
    backgroundImage: `url(${backgroundTwo})`,
    title: (
      <>
        <p className="text-[16px] text-[#241443] font-semibold ">
          100% Quality courses
        </p>
        Find Your Perfect Courses And<br></br> Improve Your{" "}
        <span className=" bg-[#F27329] p-1 rounded-full text-[#241443]">
          Skills
        </span>{" "}
        through<br></br> FrictionLearn!
      </>
    ),

    subtitle:
      "We Have 32k+ Online Courses with Gamified Technology & 400K+ Online Registered Students..",
  },
  {
    backgroundImage: `url(${backgroundThree})`,
    title: (
      <>
        <p className="text-[16px] text-[#241443] font-semibold ">
          100% Quality courses
        </p>
        Show your Creativity to<br></br> the world with<br></br>{" "}
        <span className=" text-[#F27329] ">Friction</span>Learn!
      </>
    ),

    subtitle:
      "Prepare yourself for the careers of tomorrow with our tailored programs.",
  },
];

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-auto">
    <div
      className="w-full h-[769px] bg-cover bg-center transition-all duration-1000 relative"
      style={{ backgroundImage: slides[currentSlide].backgroundImage }}
    >
      {/* Carousel Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full ml-10">
        <h2 className="text-[#241443] text-[52px] font-semibold text-Poppins">
          {slides[currentSlide].title}
        </h2>
        <h3
          className="text-[#241443] text-[20px]  mt-4 font-medium text-Poppins"
          dangerouslySetInnerHTML={{
            __html: slides[currentSlide].subtitle,
          }}
        ></h3>
        <div className="mt-8 text-center md:text-left">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-[#F27329] text-white text-[18px] font-semibold rounded-full hover:bg-orange-400 transition-colors"
          >
            Become an Instructor
            <img src={arrowone} alt="Arrow" className="w-4 h-3 ml-3" />
          </a>
        </div>

        <div className="flex mt-10 space-x-10">
          <div className="text-white text-center">
            <h4 className="text-[52px] font-medium bold text-[#241443] text-Poppins">
              1k+
            </h4>
            <p className="text-[16px] font-semibold text-Poppins text-[#241443]">
              Active Learner
            </p>
          </div>
          <div className="text-[#241443] text-center">
            <h4 className="text-[52px] font-medium bold text-[#241443] text-Poppins">
              3k+
            </h4>
            <p className="text-[16px] font-semibold text-Poppins text-[#241443]">
              Certified Students
            </p>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-[#F2F2F2]" : "bg-[#F2F2F2]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  </div>
  );
}
