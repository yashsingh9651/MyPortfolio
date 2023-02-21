import React from 'react';
import { Footer } from './Footer';
export const Contact = () => {
  return (
    <>
    <div className='w-screen p-9 sm:p-2 md:p-20 lg:p-10 max-w-[1280px] m-auto'>
        <div className='w-full h-[70vh] border border-black text-center p-5'>
            <h1 className='text-lg font-[Arvo] font-semibold pb-4 md:text-4xl'>Feel Free to Contact<hr/></h1>
            <div className="relative w-full h-[60vh] sm:h-[50vh] md:h-[60vh]">
                <div className='w-[170px] h-[170px] flex justify-center items-end md:w-[300px] md:h-[300px] bg-[rgba(255,255,255,0.4)] rounded-full animate-pulse'>
                    <div className='w-[80px] h-[80px] md:w-[150px] md:h-[150px] bg-white animate-bounce rounded-full'></div>
                </div>
                {/* <div className='w-[150px] h-[150px] md:w-[275px] overflow-hidden md:h-[300px] absolute top-0 right-5 sm:left-20 md:left-40 md:top-16'></div> */}
                <div className='font-[Arvo] hidden sm:block absolute right-0 bottom-[-4px] md:hidden lg:block lg:w-3/6 lg:top-[5vw]'>
                    <form className='flex flex-col' action="https://formspree.io/f/meqwggrb" method='POST'>
                        <input className='rounded px-2 p-1 m-1 w-full sm:text-sm lg:text-lg' type="text" name='username' placeholder='Name' autoComplete='on' required/>
                        <input className='rounded px-2 p-1 m-1 w-full sm:text-sm lg:text-lg' type="email" name='email' placeholder='Email' autoComplete='on' required/>
                        <textarea className='rounded px-2 p-1 m-1 w-full sm:text-sm lg:text-lg h-[20vw] sm:h-[8vw]' name="message" placeholder='Message' required autoComplete='off'></textarea>
                        <input className='p-1 w-full m-1 mb-5 rounded bg-[rgba(255,255,255,0.35)] active:scale-90 font-semibold sm:font-extralight sm:text-sm lg:font-bold lg:text-xl' type="submit" value="Send"/>
                    </form>
                </div>
                {/* Responsive Design */}
                <div className='z-10 absolute bottom-0 font-[Arvo] sm:hidden md:block lg:hidden'>
                    <form action="https://formspree.io/f/meqwggrb" method='POST'>
                        <input className='rounded px-2 p-1 m-1 w-full md:text-2xl' type="text" name='username' placeholder='Name' autoComplete='on' required/>
                        <input className='rounded px-2 p-1 m-1 w-full md:text-2xl' type="email" name='email' placeholder='Email' autoComplete='on' required/>
                        <textarea className='rounded px-2 p-1 m-1 w-full md:text-2xl h-[20vw]' name="message" placeholder='Message' required autoComplete='off'></textarea>
                        <input className='p-1 w-full m-1 mb-5 rounded bg-[rgba(255,255,255,0.35)] active:scale-90 font-semibold md:font-bold md:text-3xl md:mb-1' type="submit" value="Send"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
