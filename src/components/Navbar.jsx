import React,{useState} from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import {GiIndiaGate,GiSkills} from "react-icons/gi";
import {AiFillHome,AiFillContacts,AiOutlineFundProjectionScreen} from "react-icons/ai";
export const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div
        className="w-screen p-3 bg-[rgba(255,255,255,0.25)] md:py-8 lg:py-4"
      >
        <div className="max-w-[1240px] mx-auto flex justify-between items-center px-3">
          <div
            className="text-2xl font-extrabold font-[Phudu] md:text-5xl lg:text-3xl"
          >
            <div className="flex justify-center items-center gap-1">
            <GiIndiaGate/><div>Yash Singh</div>
            </div>
          </div>
          {!toggle?<HiMenuAlt1 onClick={()=>{setToggle(!toggle)}} className="text-2xl md:text-4xl lg:hidden block" />
          :<GrClose className="text-2xl md:text-4xl" onClick={()=>{setToggle(!toggle)}}/>}
          <ul className="hidden gap-8 text-lg font-[Arvo] lg:flex lg:text-xl lg:font-medium">
            <li>
              <a href="/">Home{window.location.pathname==='/'&&<div className="w-full h-1 bg-black"></div>} </a>
            </li>
            <li>
              <a href="/portfolio">Portfolio{window.location.pathname==='/portfolio'&&<div className="w-full h-1 bg-black"></div>} </a>
            </li>
            <li>
              <a href="/projects">Projects{window.location.pathname==='/projects'&&<div className="w-full h-1 bg-black"></div>} </a>
            </li>
            <li>
              <a href="/contact">Contact Me{window.location.pathname==='/contact'&&<div className="w-full h-1 bg-black"></div>} </a>
            </li>
          </ul>
          {/* Responsive Menu */}
          <ul className={`font-[Arvo] bg-gradient-to-r from-[#85fccb] to-[#adb1ff] z-20 duration-500 lg:hidden w-2/4 p-3 h-screen text-lg fixed ${!toggle?'left-[-100%]':'left-[0px]'} top-[15vw] sm:top-[9vw] md:top-[15vw] font-semibold md:text-4xl`}>
            <li className={`${window.location.pathname==='/'&&"bg-[rgba(255,255,255,0.34)] rounded"} p-3 md:p-7`}>
              <a className="flex items-center gap-1" href="/"><AiFillHome className="text-xl"/><div>Home</div></a>
            </li>
            <li className={`${window.location.pathname==='/portfolio'&&"bg-[rgba(255,255,255,0.34)] rounded"} p-3 md:p-7`}>
              <a className="flex items-center gap-1" href="/portfolio"><GiSkills className="text-xl"/><div>Portfolio</div></a>
            </li>
            <li className={`${window.location.pathname==='/projects'&&"bg-[rgba(255,255,255,0.34)] rounded"} p-3 md:p-7`}>
              <a className="flex items-center gap-1" href="/projects"><AiOutlineFundProjectionScreen className="text-xl"/><div>Projects</div></a>
            </li>
            <li className={`${window.location.pathname==='/contact'&&"bg-[rgba(255,255,255,0.34)] rounded"} p-3 md:p-7`}>
              <a className="flex items-center gap-1" href="/contact"><AiFillContacts className="text-xl"/><div>Contact Me</div></a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
