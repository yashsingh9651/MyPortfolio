import React from 'react';
import {GrMapLocation} from 'react-icons/gr';
import {FiSettings} from 'react-icons/fi';
import {ImCss3,ImHtmlFive} from 'react-icons/im';
import {SiJavascript,SiTailwindcss,SiExpress,SiRedux,SiVisualstudiocode,SiGithub} from 'react-icons/si';
import {FaBootstrap,FaWindows} from 'react-icons/fa';
import {RiReactjsLine} from 'react-icons/ri';
import {DiMongodb} from 'react-icons/di';
import { Footer } from './Footer';
export const Portfolio = () => {
  return (
    <>
    <div className='max-w-[1240px] m-auto p-3 font-[Arvo] text-[#002855]'>
                    <h1 className='flex items-center md:text-3xl gap-2 p-1 md:p-2'><FiSettings/><div>Skills</div></h1>
                    <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-3 text-lg'>
                        <div className='bg-[rgba(255,255,255,0.34)] rounded p-1 text-lg md:text-xl md:p-2  '>
                            <h1>Languages :</h1>
                            <div className="grid grid-cols-3 text-2xl md:text-3xl pt-2">
                                <SiJavascript className='text-[#f0db4f] bg-[#323330]'/>
                                <ImHtmlFive className='text-[#e34c26]'/>
                                <ImCss3  className='text-[#2965f1]'/>
                            </div>
                        </div>
                        <div className='bg-[rgba(255,255,255,0.34)] rounded p-1 text-lg md:text-xl md:p-2'>
                            <h1 className=''>Frameworks :</h1>
                            <div className="grid grid-cols-3 text-3xl md:text-4xl pt-2">
                                <SiTailwindcss className='text-[#38bdf8]'/>
                                <FaBootstrap className='text-[#7711f7]'/>
                                <SiExpress className='text-[#7711f7]'/>
                            </div>
                        </div>
                        <div className='bg-[rgba(255,255,255,0.34)] rounded p-1 text-lg md:text-xl md:p-2'>
                            <h1>Libraries :</h1>
                            <div className="grid grid-cols-3 text-2xl md:text-3xl pt-2">
                                <RiReactjsLine className='text-[#61dafb]'/>
                                <SiRedux className='text-[#764abc]'/>
                            </div>
                        </div>
                        <div className='bg-[rgba(255,255,255,0.34)] rounded p-1 text-lg md:text-xl md:p-2'>
                            <h1>Tools :</h1>
                            <div className="grid grid-cols-3 text-2xl md:text-3xl pt-2">
                                <SiVisualstudiocode className='text-[#0078d7]'/>
                                <SiGithub className='text-[#ffff]'/>
                            </div>
                        </div>
                        <div className='bg-[rgba(255,255,255,0.34)] rounded p-1 text-lg md:text-xl md:p-2'>
                            <h1>Storage :</h1>
                            <div className="grid grid-cols-3 text-3xl md:text-4xl pt-2">
                                <DiMongodb className='text-[#589636]'/>
                            </div>
                        </div>
                        <div className='bg-[rgba(255,255,255,0.34)] rounded p-1 text-lg md:text-xl md:p-2'>
                            <h1>Platform :</h1>
                            <div className="grid grid-cols-3 text-2xl md:text-3xl pt-2">
                                <FaWindows className='text-[#00a1f1]'/>
                            </div>
                        </div>
                    </div>
                <h1 className='flex items-center md:text-3xl gap-2 my-4 p-1 md:p-2'><GrMapLocation/><div>Location</div></h1>
                <div className="overflow-hidden rounded">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5954.891738541102!2d80.92666442870792!3d25.2154969574661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3984af6b695d5b3d%3A0xbc724a33f644ac4d!2sPetrol%20Pump!5e0!3m2!1sen!2sin!4v1676897244969!5m2!1sen!2sin" width="1220" height="450" className='m-auto' style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
    </div>
    </>
  )
}
