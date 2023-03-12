import React, { useState } from 'react';
import { Footer } from './Footer';
import IMAGES from '../images/index';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export const Contact=()=>{
    const [data, setData] = useState({
        name:'',
        email:'',
        message:''
    });
    // ? OnChange
    let names,value;
    const setUserData=(event)=>{
        names=event.target.name;
        value=event.target.value;
        setData({...data,[names]:value});
    };
    // ? On Submit
    const sendData = async()=>{
        const {name,email,message}=data;
        if(name&&email&&message){
        await fetch("https://my-portfolio-48891-default-rtdb.firebaseio.com/contactlist.json",{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
            setData({name:'',email:'',message:''});
        };
    };
  return (
    <>
    <div className='w-[100vw] md:w-screen sm:p-2 md:p-20 lg:p-10 max-w-[1280px] m-auto'>
        <div className='w-[75vw] lg:w-full h-[70vh] border border-black text-center p-5 m-auto mt-8'>
            <h1 className='text-lg font-[Arvo] font-semibold pb-4 md:text-4xl'>Feel Free to Contact<hr/></h1>
            <div className="relative w-full h-[60vh] sm:h-[50vh] md:h-[60vh]">
                <div className='w-[170px] h-[170px] flex justify-center items-end md:w-[300px] md:h-[300px] bg-[rgba(255,255,255,0.4)] rounded-full animate-pulse'>
                    <div className='w-[80px] h-[80px] md:w-[150px] md:h-[150px] bg-white animate-bounce rounded-full'></div>
                </div>
                <div className={`w-[150px] h-[150px] rounded md:w-[275px] border border-white overflow-hidden md:h-[275px] absolute top-3 right-5 sm:left-20 md:left-40 md:top-16`}><LazyLoadImage className='rounded' src={IMAGES.imgOne} effect="blur"/></div>
                <div className='font-[Arvo] hidden sm:block absolute right-0 bottom-[-4px] md:hidden lg:block lg:w-3/6 lg:top-[5vw]'>
                    <form method='POST' action='https://formspree.io/f/meqwggrb' className='flex flex-col'>
                        <input onChange={setUserData} className='rounded px-2 p-1 m-1 w-full sm:text-sm lg:text-lg' type="text" name='name' placeholder='Name' value={data.name} autoComplete='on' required/>
                        <input onChange={setUserData} className='rounded px-2 p-1 m-1 w-full sm:text-sm lg:text-lg' type="email" name='email' placeholder='Email' value={data.email} autoComplete='on' required/>
                        <textarea onChange={setUserData} value={data.message} className='resize-none rounded px-2 p-1 m-1 w-full sm:text-sm lg:text-lg sm:h-[8vw]' name="message" placeholder='Message' required autoComplete='off'></textarea>
                        <input onClick={sendData} className='p-1 w-full m-1 mb-5 rounded bg-[rgba(255,255,255,0.35)] active:scale-90 font-semibold hover:bg-[rgba(255,255,255,0.7)] sm:font-extralight sm:text-sm lg:font-bold lg:text-xl' type="submit" value="Send"/>
                    </form>
                </div>
                {/* Responsive Design */}
                <div className='z-10 absolute bottom-0 font-[Arvo] sm:hidden md:block lg:hidden'>
                    <form method='POST' action='https://formspree.io/f/meqwggrb'>
                        <input onChange={setUserData} className='rounded px-2 p-1 m-1 w-11/12 md:text-2xl' type="text" name='name' placeholder='Name' value={data.name} autoComplete='on' required/>
                        <input onChange={setUserData} className='rounded px-2 p-1 m-1 w-11/12 md:text-2xl' type="email" name='email' placeholder='Email' value={data.email} autoComplete='on' required/>
                        <textarea onChange={setUserData} className='resize-none rounded px-2 p-1 m-1 w-11/12 md:text-2xl h-[20vw]' name="message" placeholder='Message' value={data.message} required autoComplete='off'></textarea>
                        <input onClick={sendData} className='p-1 w-11/12 m-1 mb-5 rounded bg-[rgba(255,255,255,0.35)] active:scale-90 font-semibold md:font-bold md:text-3xl md:mb-1' type="submit" value="Send"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
