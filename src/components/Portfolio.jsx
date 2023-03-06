import React from 'react';
import IMAGES from '../images/index'
import {GrMapLocation} from 'react-icons/gr';
import {FiSettings} from 'react-icons/fi';
import {ImCss3,ImHtmlFive} from 'react-icons/im';
import {SiJavascript,SiTailwindcss,SiExpress,SiRedux,SiVisualstudiocode,SiGithub} from 'react-icons/si';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {FaBootstrap,FaGitAlt} from 'react-icons/fa';
import {IoLogoNodejs} from 'react-icons/io';
import {RiReactjsLine} from 'react-icons/ri';
import {DiMongodb} from 'react-icons/di';
export const Portfolio = () => {
  return (
    <>
    <div className='max-w-[1240px] m-auto p-3 font-[Arvo] text-[#002855]'>
        <div className='flex justify-start bg-[rgba(255,255,255,0.3)] rounded p-1'>
          <div className='w-[200px] md:w-[300px]'><LazyLoadImage className='slideRight rounded' src={IMAGES.imgOne} effect="blur"/></div>
          <div className='px-2'>
          <h1 className='slideRight md:text-2xl mb-2'>I am <span className='md:text-4xl text-purple-800'>Yash Singh</span></h1>
          <h1 className='slideLeft text-[10px] md:text-xl'>Currently Living In Kota India. Having 3 Months Of Experience In Frontend Development.<br/>I Mostly Work With Java Script And Its Framework React Js.<br/>I Have Great Experence In Building Great Product From Scratch.</h1>
          </div>
        </div>
                    <h1 className='flex items-center md:text-3xl gap-2 p-1 md:p-2'><FiSettings/><div>My Skills</div></h1>
                    <div className='w-full grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-3 text-lg'>
                        <div className='slideRight bg-[rgba(255,255,255,0.34)] rounded p-1 text-lg md:text-xl md:p-2  '>
                            <h1>Languages :</h1>
                            <div className="grid grid-cols-3 text-2xl md:text-3xl pt-2">
                                <div className="flex items-center gap-1">
                                    <SiJavascript className='text-[#f0db4f] bg-[#323330]'/>
                                    <h1 className='text-sm md:text-lg'>Java Script</h1>
                                </div>
                                <div className="flex items-center gap-1">
                                    <ImHtmlFive className='text-[#e34c26]'/>
                                    <h1 className='text-sm md:text-lg'>HTML</h1>
                                </div>
                                <div className="flex items-center gap-1">
                                    <ImCss3  className='text-[#2965f1]'/>
                                    <h1 className='text-sm md:text-lg'>CSS</h1>
                                </div>
                            </div>
                        </div>
                        <div className='slideLeft bg-[rgba(255,255,255,0.34)] rounded p-1 text-lg md:text-xl md:p-2'>
                            <h1 className=''>Frameworks :</h1>
                            <div className="grid grid-cols-3 text-3xl md:text-4xl pt-2">
                                <div className="flex items-center gap-1">
                                    <SiTailwindcss className='text-[#38bdf8]'/>
                                    <h1 className='text-sm md:text-lg'>Tailwind</h1>
                                </div>
                                <div className="flex items-center gap-1">
                                    <FaBootstrap className='text-[#7711f7]'/>
                                    <h1 className='text-sm md:text-lg'>Bootstrap</h1>
                                </div>
                                <div className="flex items-center gap-1">
                                    <SiExpress className='text-[#7711f7]'/>
                                    <h1 className='text-sm md:text-lg'>Express.js</h1>
                                </div>
                            </div>
                        </div>
                        <div className='slideRight bg-[rgba(255,255,255,0.34)] rounded p-1 text-lg md:text-xl md:p-2'>
                            <h1>Libraries :</h1>
                            <div className="grid grid-cols-3 text-2xl md:text-3xl pt-2">
                                <div className="flex items-center gap-1">
                                    <RiReactjsLine className='text-[#61dafb]'/>
                                    <h1 className='text-sm md:text-lg'>React</h1>
                                </div>
                                <div className="flex items-center gap-1">
                                    <SiRedux className='text-[#764abc]'/>
                                    <h1 className='text-sm md:text-lg'>Redux</h1>
                                </div>
                            </div>
                        </div>
                        <div className='slideLeft bg-[rgba(255,255,255,0.34)] rounded p-1 text-lg md:text-xl md:p-2'>
                            <h1>Tools :</h1>
                            <div className="grid grid-cols-3 text-2xl md:text-3xl pt-2">
                                <div className="flex items-center gap-1">
                                    <SiVisualstudiocode className='text-[#0078d7]'/>
                                    <h1 className='text-sm md:text-lg'>Visual Studio</h1>
                                </div>
                                <div className="flex items-center gap-1">
                                    <SiGithub className='text-[#000000]'/>
                                    <h1 className='text-sm md:text-lg'>Git Hub</h1>
                                </div>
                                <div className="flex items-center gap-1">
                                    <FaGitAlt className='text-[#f34f29]'/>
                                    <h1 className='text-sm md:text-lg'>Git</h1>
                                </div>
                            </div>
                        </div>
                        <div className='slideRight bg-[rgba(255,255,255,0.34)] rounded p-1 text-lg md:text-xl md:p-2'>
                            <h1>Storage :</h1>
                            <div className="grid grid-cols-3 text-3xl md:text-4xl pt-2">
                                <div className="flex items-center gap-1">
                                    <DiMongodb className='text-[#589636]'/>
                                    <h1 className='text-sm md:text-lg'>Mongo DB</h1>
                                </div>
                            </div>
                        </div>
                        <div className='slideLeft bg-[rgba(255,255,255,0.34)] rounded p-1 text-lg md:text-xl md:p-2'>
                            <h1>Platform :</h1>
                            <div className="grid grid-cols-3 text-2xl md:text-3xl pt-2">
                                <div className="flex items-center gap-1">
                                    <IoLogoNodejs className='text-green-600'/>
                                    <h1 className='text-sm md:text-lg'>Node.js</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                <h1 className='flex items-center md:text-3xl gap-2 my-4 p-1 md:p-2'><GrMapLocation/><div>Location</div></h1>
                <div className="overflow-hidden rounded">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5954.891738541102!2d80.92666442870792!3d25.2154969574661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3984af6b695d5b3d%3A0xbc724a33f644ac4d!2sPetrol%20Pump!5e0!3m2!1sen!2sin!4v1676897244969!5m2!1sen!2sin" width="1220" height="450" title='location' className='m-auto' style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
    </div>
    </>
  )
}
