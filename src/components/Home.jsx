import React from 'react'
import Typed from 'react-typed';
import { Footer } from './Footer';
export const Home = () => {
  return (
    <>
    <div className='text-center p-3 w-[93vw] md:w-screen md:p-5 max-w-[1280px] m-auto'>
        <h1 className='slideMoreLeft text-2xl font-bold mt-[25vw] sm:m-[3vw] sm:text-2xl md:text-5xl md:mt-[20vw] lg:mt-[6vw] lg:text-3xl'><Typed
                    strings={['!Hello','!Namaste']}
                    typeSpeed={140}
                    backSpeed={120}
                    backDelay={60}
                    loop={true}
                /></h1>
        <h1 className='slideMoreRight text-2xl font-bold sm:text-2xl my-7 md:my-12 md:text-5xl md:font-extrabold lg:text-3xl lg:font-extrabold'>I am a <Typed
                    strings={['&lt;Coder&gt;','Web Developer']}
                    className="text-purple-800"
                    typeSpeed={140}
                    backSpeed={120}
                    backDelay={80}
                    loop={true}
                /></h1>
        <h1 className='slideMoreLeft text-md font-medium mb-3 md:text-3xl md:font-semibold md:mb-10 lg:text-xl'>Front-End Developer Who Writes Clean ,Elegant and Efficient Code.</h1>
        <h1 className='text-sm font-semibold mt-[30vw] sm:mt-[5vw] md:text-2xl md:font-semibold md:mt-[20vw] lg:mt-[10vw] lg:text-lg'>I'm probably the most passionate web developer you will ever get to work with.If you have a great project that needs some amazing skills, I'm your guy.<br/>I can create amazing responsive website with working contact form</h1>
    </div>
        <Footer/>
    </>
  )
}
