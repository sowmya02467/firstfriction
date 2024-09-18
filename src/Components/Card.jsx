import React from 'react';

function Card({ image, title, description }) {
  return (
    <div className=" bg-white border border-gray-200 rounded-[40px] shadow dark:bg-gray-800 dark:border-gray-700 w-[358px] h-[366px] mx-auto">
      <div className="flex justify-center items-center p-4">
        <img
          className="w-[143px] h-[143px]"
          src={image}
          alt="Card"
        />
      </div>
      <div className="p-2 text-center">
        <h5 className="mb-2 text-[25px] font-black font-Lato font-sans tracking-tight text-[#241443] dark:text-white">
          {title}
        </h5>
        <p className="mb-2 font-normal text-Poppins text-[16px] text-[#FF5C00] dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
