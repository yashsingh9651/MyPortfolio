import React from 'react'
import Typed from 'react-typed';
import { Footer } from './Footer';
export const Home = () => {
  return (
    <>
    <div className='text-center p-3 w-screen md:p-5 max-w-[1280px] m-auto'>
        <h1 className='text-3xl font-bold mt-[25vw] my-[15vw] sm:m-[3vw] sm:text-2xl md:text-6xl md:mt-[20vw] md:my-[18vw] lg:m-[4vw] lg:mb-[6vw] lg:text-3xl'><Typed
                    strings={['!Hello','!Namaste']}
                    typeSpeed={140}
                    backSpeed={120}
                    backDelay={60}
                    loop={true}
                /></h1>
        <h1 className='text-4xl font-bold sm:text-2xl md:text-6xl md:font-extrabold lg:text-4xl lg:font-extrabold'><Typed
                    strings={['&lt;Coder&gt;','Web Developer']}
                    typeSpeed={140}
                    backSpeed={120}
                    backDelay={80}
                    loop={true}
                /></h1>
        <h1 className='text-md font-medium my-3 md:text-3xl md:font-semibold md:my-10 lg:text-xl'>Front-End Developer Who Writes Clean ,Elegant and Efficient Code.</h1>
        <h1 className='text-sm font-semibold mt-[30vw] sm:mt-[5vw] md:text-2xl md:font-semibold md:mt-[20vw] lg:mt-[10vw] lg:text-lg'>I'm probably the most passionate web developer you will ever get to work with.If you have a great project that needs some amazing skills, I'm your guy.<br/>I can create amzaing responsive website with working contact form</h1>
    </div>
        <Footer/>
    </>
  )
}
