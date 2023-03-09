import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { GiIndiaGate, GiSkills } from "react-icons/gi";
import {
  AiFillHome,
  AiFillContacts,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
export const Navbar = () => {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="box-border w-screen p-3 z-50 relative bg-[rgba(255,255,255,0.25)] shadow-[0_15px_35px_rgba(0,0,0,0.05)] md:py-8 lg:py-4">
        <div className="max-w-[1240px] mx-auto flex justify-between items-center px-3">
            <div className="text-2xl font-extrabold font-[Phudu] md:text-5xl lg:text-3xl flex justify-center items-center gap-1 slideRight">
              <GiIndiaGate />
              <div>Yash Singh</div>
          </div>
          {!toggle ? (
            <HiMenuAlt1
              onClick={() => {
                setToggle(!toggle);
              }}
              className="text-2xl md:text-4xl lg:hidden block"
            />
          ) : (
            <GrClose
              className="text-2xl md:text-4xl"
              onClick={() => {
                setToggle(!toggle);
              }}
            />
          )}
          <ul className="slideLeft hidden gap-8 text-lg font-[Arvo] lg:flex lg:text-xl lg:font-medium">
            <li>
              <Link to="/">
                Home
                {location.pathname === "/" && (
                  <div className="w-full h-1 bg-black"></div>
                )}
              </Link>
            </li>
            <li>
              <Link to="/portfolio">
                portfolio
                {location.pathname === "/portfolio" && (
                  <div className="w-full h-1 bg-black"></div>
                )}{" "}
              </Link>
            </li>
            <li>
              <Link to="/projects">
                Projects
                {location.pathname === "/projects" && (
                  <div className="w-full h-1 bg-black"></div>
                )}{" "}
              </Link>
            </li>
            <li>
              <Link to="/contact">
                Contact Me
                {location.pathname === "/contact" && (
                  <div className="w-full h-1 bg-black"></div>
                )}{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
          {/* Responsive Menu */}
      <ul
        onClick={() => {
          setToggle(false);
        }}
        className={`font-[Arvo]  bg-[rgba(255,255,255,0.25)] shadow-[0_15px_35px_rgba(0,0,0,0.05)] backdrop-blur-lg z-20 duration-500 lg:hidden w-2/4 p-3 h-screen text-lg fixed ${
          !toggle ? "left-[-100%]" : "left-[0px]"
        } sm:top-[3vw] top-[10vw] md:top-[10vw] font-semibold md:text-4xl border-r border-[rgba(255,255,255,0.63)]`}
      >
        <li
          className={`mt-5 md:mt-12 ${
            location.pathname === "/" &&
            "bg-[rgba(255,255,255,0.34)] rounded"
          } p-3 md:p-7`}
        >
          <Link className="flex items-center gap-1" to="/">
            <AiFillHome className="text-xl md:text-4xl" />
            <div>Home</div>
          </Link>
        </li>
        <li
          className={`${
            location.pathname === "/portfolio" &&
            "bg-[rgba(255,255,255,0.34)] rounded"
          } p-3 md:p-7`}
        >
          <Link className="flex items-center gap-1" to="/portfolio">
            <GiSkills className="text-xl md:text-4xl" />
            <div>Portfolio</div>
          </Link>
        </li>
        <li
          className={`${
            location.pathname === "/projects" &&
            "bg-[rgba(255,255,255,0.34)] rounded"
          } p-3 md:p-7`}
        >
          <Link className="flex items-center gap-1" to="/projects">
            <AiOutlineFundProjectionScreen className="text-xl md:text-4xl" />
            <div>Projects</div>
          </Link>
        </li>
        <li
          className={`${
            location.pathname === "/contact" &&
            "bg-[rgba(255,255,255,0.34)] rounded"
          } p-3 md:p-7`}
        >
          <Link className="flex items-center gap-1" to="/contact">
            <AiFillContacts className="text-xl md:text-4xl" />
            <div>Contact Me</div>
          </Link>
        </li>
      </ul>
    </>
  );
};
