import React,{useState} from "react";
import "../index.css";  // Import CSS
import image from "../assets/image.png";  // Adjust path as needed
import logo from "../assets/logo.png";
import arr from '../assets/arr.png';
// import searchicon from '../assets/searchicon.png';
import sectiontwoOne from '../assets/sectiontwo.png' ;
import sectiontwoTwo from '../assets/sectiontwothree.png';
import sectiontwothree from '../assets/sectiontwotwo.png';
import groupone from '../assets/sectionthreeone.png';
import grouptwo from '../assets/sectionthreetwo.png';
import groupthree from '../assets/sectionthreethree.png';
// import closeicon from '../assets/Vector (16).png'; 
import Footer from "./Footer";
import closeicon from '../assets/vectorOne.png';
import searchicon from '../assets/searchicon.png';
import imageone from '../assets/image 79.png';
import imagetwo from '../assets/image 79 (1).png';
import imagethree from '../assets/image 85.png';






export default function Community() {

// search bar
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

// how communitys
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const events = [
    { date: 'Sun, Sep 13', title: 'Leadership Skills for Tech Professionals' },
    { date: 'Mon, Sep 14', title: 'Advanced JavaScript Workshop' },
    { date: 'Tue, Sep 15', title: 'React Development Best Practices' },
  ];



  return (
    <div className="container">

        {/* section one */}
      <div
        className="h-[729px] w-[full] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* nav bar Content goes here */}
        <nav className="h-[95px] flex items-center "> {/* Added flex and items-center */}
          <div className="ml-[146px] mr-[47px]">
            <img
              src={logo}
              alt="friction learn logo"
              className="w-[157px] h-[64px] mt-[20px]   transparent opacity-75" 
            />



          </div>

          <div className="flex items-center bg-white bg-opacity-75 rounded-md w-[402px] h-[62px] ml-[10px] mt-[20px]">
            <ul className="flex justify-between gap-5 search">
            <li className="flex flex-col-reverse text-[#1D2228] text-[18px] font-bold ml-[20px] my-[28px]">
  <a href="/Courses" className="flex items-center">
    Courses
    <img src={arr} alt="" className="w-[11.13px] h-[7.13px] ml-[10px]" />
  </a>
</li>

          <li className=" text-[18px] font-bold mr-[10px] ml-[10px] my-[28px]  text-orange-500 ">
           <a href="/Community"> Communities
            </a>
            </li>
          <li className="text-[#1D2228] text-[18px] font-bold my-[28px]">
           <a href="/Incubation"> Incubation</a></li>
              
            </ul>
          </div>
          


          {/* search bar */}
        

<div className="flex justify-end mt-5   ml-[30px]  w-[529px]  ">
  <div className={`relative flex items-center justify-end ml-[140px] bg-white bg-opacity-75 rounded-md h-[64px] px-4 ${isOpen ? 'w-[529px]' : 'w-[240px]'}`}>
    <div
      className={`flex items-center rounded-2xl border border-solid             transition-all duration-300 mr-[10px] ${isOpen ? 'w-[350px]' : 'w-[40px]'} h-[42px] ml-auto`}
      style={{ position: 'relative' }}
    >
      <img
        src={searchicon}
        alt="Search Icon"
        className="w-[20px] h-[20px] ml-2 cursor-pointer"
        onClick={handleToggle}
        style={{ order: 1 }}
      />
      <input
        type="text"
        placeholder="Search here"
        className={`border-none outline-none h-full transition-all duration-300   rounded-full  ${isOpen ? 'w-[312px] px-4' : 'w-0 px-0'}`}
        style={{ order: 2 }}
      />
      <img
        src={closeicon}
        alt="Close Icon"
        className="w-[20px] h-[20px] ml-2 cursor-pointer"
        onClick={handleToggle}
        style={{ order: 3, visibility: isOpen ? 'visible' : 'hidden' }}
      />
    </div>
    <button className=" w-[202px] h-[42px]   px-[20px] py-[10px] bg-[#022956] text-white rounded-md">Join Community</button>
  </div>
  {/* <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md">Join Community</button> */}
</div>






        </nav>




     <div   className="w-full h-[230px] flex flex-col  justify-center text-center align-middle  mt-[150px] mx-[204px] mb-[245px]">
         <h1     className=" text-[60px] w-[1033px] h-[170px] mb-[27px]  text-[#FFFFFF] font-black  font-sans font-lato ml-[50px]">Be Part of Something Bigger to<br></br> Achieve More</h1>
          <h3   className=" text-[35px] w-[1033px] h-[170px]  text-[#FFFFFF] font-semibold  font-sans font-lato  ml-[50px]" >Join our community to connect, learn, and grow together.</h3>

     </div>

<div  className="flex flex-row align-middle justify-center"> <button   className="mt-[-120px] text-[22px] w-[229px] h-[56px] bg-[#F27329] text-[#FFFFFF] font-bold  font-sans font-lato rounded-md px-[25px]" >Join Community</button></div>



      </div>


{/* section two */}


<div   className="h-[1053px]">

  <div className="childOne  mt-[67px]  flex flex-row justify-center gap-[67px]">

  <div  className="w-[356px] h-[370px] border border-shadow  shadow-md shadow-gray-300 flex flex-col text-center justify-center      transform transition-transform duration-300 hover:scale-110">
   <div>
    <img src={sectiontwoOne} alt=""  className="w-[50px] h-[65px]  mt-[37px]  ml-[138px] mr-[138px]" />
    <p  className="text-[#1D2228] text-[18px] font-medium font-lato  text-center mt-[27px]"> Our goal is to foster a supportive<br></br> environment for continuous<br></br> learning and professional growth.</p>
   </div>
<div  className="bg-[#F5F5F5] mt-[40px]">
<h3  className="text-[#F27329] text-[28px] font-semibold  py-[38px] pz-[103px]">Our Mission</h3>
</div >


  </div>


  <div  className="w-[356px] h-[370px] border border-shadow  shadow-md shadow-gray-300  flex flex-col text-center justify-center    transform transition-transform duration-300 hover:scale-110">
   <div>
    <img src={sectiontwoTwo} alt=""  className="w-[50px] h-[65px]  mt-[37px]  ml-[138px] mr-[138px]" />
    <p  className="text-[#1D2228] text-[18px] font-medium font-lato  text-center mt-[22px] ">Register for our upcoming<br></br>webinars, workshops, and <br></br>meetups to stay ahead in your<br></br> career.</p>
   </div>
<div  className="bg-[#F5F5F5]  mt-[20px]">
<h3  className="text-[#F27329] text-[28px] font-semibold  py-[38px] pz-[80px] "> Our Events</h3>
</div >


  </div>

  <div  className="w-[356px] h-[370px]  border border-shadow  shadow-md shadow-gray-300  flex flex-col text-center justify-cente    transform transition-transform duration-300 hover:scale-110">
   <div>
    <img src={sectiontwothree} alt=""  className="w-[50px] h-[65px]  mt-[37px]  ml-[138px] mr-[138px]" />
    <p  className="text-[#1D2228] text-[18px] font-medium font-lato  text-center mt-[27px]">Volunteer, participate in<br></br> discussions, and contribute to<br></br> our growing community..</p>
   </div>
<div  className="bg-[#F5F5F5]  mt-[40px]">
<h3  className="text-[#F27329] text-[28px] font-semibold  py-[38px] pz-[103px]">Get Involved</h3>
</div >


  </div>




  </div>


  <div className='w-full h-[1115px]'>
  <div className="heading mt-[105px] flex justify-center items-center text-center">
    <h1 className='text-[#022956] w-[612px] h-[48px] text-[40px] font-black font-sans font-lato'>Upcoming Events</h1>
  </div>
  <div className="elements mt-[72px] flex flex-row justify-center items-center">
    <div className='flex flex-col justify-center items-start'>
      {events.map((event, index) => (
        <React.Fragment key={index}>
          <div 
            className='flex flex-row justify-start items-center mb-6'
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)} 
          >  
            <div className={`content w-[606px] h-[60px] ml-[106px] ${hoveredIndex === index ? 'text-orange-500' : 'text-[#1D2228]'}`}>
              <p className={`text-[16px] font-light font-sans font-lato ${hoveredIndex === index ? 'text-orange-500' : 'text-[#1D2228]'}`}>{event.date}</p>
              <h3 className={`text-[18px] font-medium font-lato ${hoveredIndex === index ? 'text-orange-500' : 'text-[#1D2228]'}`}>{event.title}</h3>
            </div>
            <div className="button w-[194px] h-[42px] bg-[#022956] flex justify-center items-center ml-4">
              <button className='text-[#FFFFFF] text-[16px] font-semibold font-sans font-lato py-2'>Register Now</button>
            </div>
          </div>
          {index < events.length - 1 && <hr className="border-t border-gray-300 w-full my-6" />}
        </React.Fragment>
      ))}
    </div>
    <div className="rightsidecontent ml-10">
      <img 
        src={hoveredIndex === 0 ? imageone : hoveredIndex === 1 ? imagetwo : hoveredIndex === 2 ? imagethree : imagethree} 
        alt="rightsideimage" 
        className='w-[376px] h-[326px]' 
      />
    </div>
  </div>
</div>





</div>






{/* section three */}


<div className='w-full h-[678px] mx-auto p-4 flex flex-col items-center '>
            <div className='text-center '>
                <h1 className='text-[40px] text-[#022956] font-sans font-lato font-black '>Why Communities?</h1>
                <p className='text-[28px] font-lato font-sans font-semibold text-[#F27329] mt-[10px]'>Boost your growth through active and supportive community engagement and <br></br> collaboration.</p>
            </div>
            <div className='flex justify-center align-middle gap-[155px] mt-[155px]'>

                <div className='flex flex-col items-center'>
                    <img src={groupone} alt='groupone' className='w-[318px] h-[190px] mb-4' />
                    <p className='text-center text-base  text-[#1D2228] text-[24px] font-medium font-lato font-sans'>Gain insights and advice from<br/> seasoned industry leaders.</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={grouptwo} alt='grouptwo' className='w-[286px] h-[190px] mb-4' />
                    <p className='text-center text-base   text-[#1D2228] text-[24px] font-medium font-lato font-sans'>Utilize top-notch tools, tech,<br/> and facilities for growth.</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={groupthree} alt='groupthree' className='w-[286px] h-[190px] mb-4' />
                    <p className='text-center text-base   text-[#1D2228] text-[24px] font-medium font-lato font-sans'>Connect with investors, peers, <br/>and potential partners effectively.</p>
                </div>
            </div>
     

</div>



{/* section four */}

<div  className="h-[592px]">
    
   <div    className="flex flex-col text-center justify-center  ">
<h1  className="text-[#022956] text-[40px] font-black font-sans font-lato mt-[61px] mb-[16px]">Our History by the Numbers</h1>
<p  className="text-[#F27329] text-[28px] font-semibold font-lato font-sans text-center ">A snapshot of our community's growth and impact over the years. See how <br></br> we've evolved and the milestones we've achieved together.</p>

   </div>

<div className="w-[1247px] h-[135px]  flex flex-row align-middle justify-center gap-[219px] ml-[124px]  mt-[100px]">

    <div className="one w-[261px] h-[131px] text-center"> 
      
        <h1  className="text-[90px] font-medium font-poppins text-[#022956]">9k+</h1>
        <h3  className="text-[28px] font-semibold font-sans font-lato text-[#2872BB] text-center"> Ideas Liked</h3>
    </div>

    <div className="one w-[261px] h-[131px] text-center"> 
      
      <h1  className="text-[90px] font-medium font-poppins text-[#022956]">8k+</h1>
      <h3  className="text-[28px] font-semibold font-sans font-lato text-[#2872BB] text-center">People Reached</h3>
  </div>



  <div className="one w-[261px] h-[131px] text-center"> 
      
      <h1  className="text-[90px] font-medium font-poppins text-[#022956]">7k+</h1>
      <h3  className="text-[28px] font-semibold font-sans font-lato text-[#2872BB] text-center"> Positive Responses</h3>
  </div>
     
</div>



</div>


<Footer />

     
    </div>
  );
}