import React from 'react';
import { useNavigate } from "react-router-dom";
import backgroundImage from '../assets/backgroundcolor.png'; 
import illution from '../assets/illisution.png';
import logo from '../assets/logo.png';
import google from '../assets/googlelogo.png';
import facebook from '../assets/facebooklogo.png';
import apple from '../assets/appleicon.png';
import twitter from '../assets/linkedinlogo.png'


export default function Signup() {
  const navigate = useNavigate();
  return (
    <div
      className=' w-full flex justify-center items-center  h-[719px] bg-cover bg-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}

>

      <div className='w-[1260px] h-[750px] bg-white shadow-lg rounded-lg   '>

      <div className="header w-[full]  flex flex-row justify-between  mt-[30px]">
      <div className="w-[157px] h-[64px] ml-[20px]">
      <img
        src={logo}
        alt="friction learn logo"
        className="w-[157px] h-[64px]"
        onClick={() => navigate("/")}
      />
    </div>

<div className='flex flex-row justify-evenly space-x-6  mr-[30px]'>


<p className='text-[#022956]  h-[23px] '>Already have an Account ?</p>




    <button className='rounded-full  border border-[#022956] py-1 px-2 w-[121px] h-[33px]   hover:bg-[#022956]  hover:text-[#ffffff]'>SIGN IN</button>
</div>

</div>





<div  className='flex flex-row mt-[20px]'>





      <div className='flex-1  flex justify-center items-center'>
          <img
            src={illution}
            alt='Illustration'
            className=' w-[400px] h-[439px] '
          />
        </div>


        <div className='flex-1 flex flex-col justify-center items-start mt-[-30px]'>
          <h1 className='text-[36px]  h-[45px] mb-2 font-bold text-[#022956] font-sans-sarif-[lato]  '>Welcome to FrictionLearn</h1>
          <p className='text-[#022956] h-[22px] border-transparent hover:border-b-4 '>Register your Account</p>

          <form className='space-y-4 w-full'>
            <div>
            <label className="block     w-[70px] h-[30px] text-[#022956] text-[22px] font-medium border-b-4 border-transparent ">
  Name
</label>

              <input
                type='text'
                placeholder='Enter your full name...'
                className='w-[368px] h-[51px] px-4 py-2 mt-[10px] border border-gray-600 rounded-md    hover:border-[#03A9F4]  hover:border-[4px]'
              />
            </div>

            <div>
              <label className='block    w-[70px] h-[30px] text-[#022956] text-[22px] font-medium border-b-4 border-transparent'>Mail Id</label>
              <input
                type='email'
                placeholder='pawar@gmail.com'
                className='w-[368px] h-[51px] px-4 py-2 mt-[10px] border-[#022956] border-[1px]  rounded-md    hover:border-[#03A9F4]    hover:border-[4px]'
              />
            </div>


            <label className='block w-[270px] h-[30px] text-[#022956] text-[22px] font-medium border-transparent border-b-4'>
  Are you student or mentor
  </label>

  <select className='w-[368px] h-[51px] px-4 py-2 border-[1px] border-[#022956] rounded-md hover:border-[#03A9F4] hover:border-[2px]'>
  <option value="mentor">Mentor</option>
  <option value="student">Student</option>
</select>

            <div>
  <label className='block w-[170px] h-[30px] text-[#022956] text-[22px] font-medium border-transparent border-b-4'>
    Mobile Number
  </label>
  
  <div className="flex items-center mt-[10px]">
    <input
      type='text'
      placeholder='+91 2254365895'
      className='w-[368px] h-[51px] px-4 py-2 border-[#022956] border-[1px] rounded-md hover:border-[#03A9F4] hover:border-[4px]'
    />

   
  </div>
</div>


            <button className='w-[180px] h-[49px] py-2 mt-6 bg-[#022956] text-white font-semibold rounded-md    hover:border-[#022956]  hover:border-[4px]  hover:bg-[#ffffff] hover:text-[#022956]'>
              SIGN UP
            </button>
          </form>

          <div className='flex space-x-4 mt-8'>
            <button className='text-gray-600 mt-[10px] h-[25px]  border-transparent  '>Create account with</button>
             <img src={google} alt='Google' className='w-[40px] h-[40px]   hover:border-[#03A9F4]  hover:border-[4px]' /> 
            <img src={facebook} alt='Apple' className='w-[40px] h-[40px]     hover:border-[#03A9F4]  hover:border-[4px]' />
            <img src={apple} alt='Facebook' className='w-[40px] h-[40px]   hover:border-[#03A9F4]  hover:border-[4px]' />
            <img src={twitter} alt='LinkedIn' className='w-[40px] h-[40px]   hover:border-[#03A9F4]  hover:border-[4px]' /> 
          </div>
        </div>

      
      </div>
      </div>
    </div>
  );
}
