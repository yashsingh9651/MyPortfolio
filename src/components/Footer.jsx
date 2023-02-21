import React from "react";
import {FaGithub,FaLinkedinIn,FaTwitter} from 'react-icons/fa';
import {RiInstagramFill,RiWhatsappFill} from 'react-icons/ri';
export const Footer =()=>{
  return (
    <>
    <div className='absolute bottom-0 flex justify-center w-screen'>
        <div className='flex justify-around text-3xl w-[90%] p-5 sm:text-xl sm:p-3 md:text-6xl lg:text-3xl'>
            <div className='animate-bounce p-3 mx-1 rounded-lg bg-[rgba(255,255,255,0.35)] hover:rotate-[360deg] hover:duration-700 hover:shadow-[0_0_20px_black] hover:blur-[0.7px] active:shadow-[20px_20px_700px_black]'><a target={"_blank"} href="https://wa.me/qr/EZPIX56PGTK6B1"><RiWhatsappFill className="text-[#25D366]"/></a></div>
            <div className='animate-bounce p-3 mx-1 rounded-lg bg-[rgba(255,255,255,0.35)] hover:rotate-[360deg] hover:duration-700 hover:shadow-[0_0_20px_black] hover:blur-[0.7px] active:shadow-[20px_20px_700px_black]'><a target={"_blank"} href="https://www.instagram.com/yash27_singh/"><RiInstagramFill className="text-[#E1306C]"/></a></div>
            <div className='animate-bounce p-3 mx-1 rounded-lg bg-[rgba(255,255,255,0.35)] hover:rotate-[360deg] hover:duration-700 hover:shadow-[0_0_20px_black] hover:blur-[0.7px] active:shadow-[20px_20px_700px_black]'><a target={"_blank"} href="https://www.linkedin.com/in/yash-singh-a191b0262/"><FaLinkedinIn className="text-[#0A66C2]"/></a></div>
            <div className='animate-bounce p-3 mx-1 rounded-lg bg-[rgba(255,255,255,0.35)] hover:rotate-[360deg] hover:duration-700 hover:shadow-[0_0_20px_black] hover:blur-[0.7px] active:shadow-[20px_20px_700px_black]'><a target={"_blank"} href="https://twitter.com/yash_singh9"><FaTwitter className="text-[#1DA1F2]"/></a></div>
            <div className='animate-bounce p-3 mx-1 rounded-lg bg-[rgba(255,255,255,0.35)] hover:rotate-[360deg] hover:duration-700 hover:shadow-[0_0_20px_black] hover:blur-[0.7px] active:shadow-[20px_20px_700px_black]'><a target={"_blank"} href="https://github.com/yashsingh9651"><FaGithub className="text-black"/></a></div>
        </div>
        </div>
    </>
  )
}
