import React,{useState} from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import {GiIndiaGate,GiSkills} from "react-icons/gi";
import {AiFillHome,AiFillContacts,AiOutlineFundProjectionScreen} from "react-icons/ai";
import { Link,useLocation } from "react-router-dom";
export const Navbar = () => {
  const location = useLocation();
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div
        className="z-50 w-screen p-3 bg-[rgba(255,255,255,0.25)] md:py-8 lg:py-4"
      >
        <div className="max-w-[1240px] mx-auto flex justify-between items-center px-3">
          <div
            className="text-2xl font-extrabold font-[Phudu] md:text-5xl lg:text-3xl"
          >
            <div className="flex justify-center items-center gap-1 slideRight">
            <GiIndiaGate/><div>Yash Singh</div>
            </div>
          </div>
          {!toggle?<HiMenuAlt1 onClick={()=>{setToggle(!toggle)}} className="text-2xl md:text-4xl lg:hidden block" />
          :<GrClose className="text-2xl md:text-4xl" onClick={()=>{setToggle(!toggle)}}/>}
          <ul className="slideLeft hidden gap-8 text-lg font-[Arvo] lg:flex lg:text-xl lg:font-medium">
            <li>
              <Link to="/">Home{location.pathname==='/'&&<div className="w-full h-1 bg-black"></div>}</Link>
            </li>
            <li>
              <Link to="/portfolio">portfolio{location.pathname==='/portfolio'&&<div className="w-full h-1 bg-black"></div>} </Link>
            </li>
            <li>
              <Link to="/projects">Projects{location.pathname==='/projects'&&<div className="w-full h-1 bg-black"></div>} </Link>
            </li>
            <li>
              <Link to="/contact">Contact Me{location.pathname==='/contact'&&<div className="w-full h-1 bg-black"></div>} </Link>
            </li>
          </ul>
          {/* Responsive Menu */}
          <ul onClick={()=>{setToggle(false)}} className={`font-[Arvo] bg-gradient-to-r from-[#85fccb] to-[#adb1ff] z-20 duration-500 lg:hidden w-2/4 p-3 h-screen text-lg fixed ${!toggle?'left-[-100%]':'left-[0px]'} top-[16vw] sm:top-[9vw] md:top-[15vw] font-semibold md:text-4xl`}>
            <li className={`${location.pathname==='/'&&"bg-[rgba(255,255,255,0.34)] rounded"} p-3 md:p-7`}>
              <Link className="flex items-center gap-1" to="/"><AiFillHome className="text-xl md:text-4xl"/><div>Home</div></Link>
            </li>
            <li className={`${location.pathname==='/portfolio'&&"bg-[rgba(255,255,255,0.34)] rounded"} p-3 md:p-7`}>
              <Link className="flex items-center gap-1" to="/portfolio"><GiSkills className="text-xl md:text-4xl"/><div>Portfolio</div></Link>
            </li>
            <li className={`${location.pathname==='/projects'&&"bg-[rgba(255,255,255,0.34)] rounded"} p-3 md:p-7`}>
              <Link className="flex items-center gap-1" to="/projects"><AiOutlineFundProjectionScreen className="text-xl md:text-4xl"/><div>Projects</div></Link>
            </li>
            <li className={`${location.pathname==='/contact'&&"bg-[rgba(255,255,255,0.34)] rounded"} p-3 md:p-7`}>
              <Link className="flex items-center gap-1" to="/contact"><AiFillContacts className="text-xl md:text-4xl"/><div>Contact Me</div></Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
