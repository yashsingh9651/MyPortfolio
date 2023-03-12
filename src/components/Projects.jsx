import React from "react";
import  ProjectData  from "../Data/ProjectData";
// ? Import Swiper React components...
import { EffectCoverflow, Pagination,Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// ? Import Swiper styles...
import "swiper/css";
import "swiper/css/effect-coverflow";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "swiper/css/pagination";
export const Projects=()=>{
  return (
    <>
      <div className="max-w-[1240px] mx-auto flex justify-center overflow-x-hidden items-center h-[88vh] mt-8 lg:mt-0">
        <div className="w-[90vw] lg:w-[80vw] h-[84vh] m-auto slideRight">
          <Swiper
            effect={"coverflow"}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow,Pagination,Autoplay]}
            className="mySwiper"
          >
            {ProjectData.map((project)=>{
              return(<SwiperSlide key={project.id} className="bg-cover bg-center overflow-hidden">
              <div className="bg-[rgba(255,255,255,0.25)] w-[85vw] lg:w-[40vw] max-w-[700px] rounded m-auto lg:h-[80vh] h-[65vh] p-2 relative">
                <LazyLoadImage className="rounded" src={project.image} effect="blur" alt="" />
                <h1 className="text-lg font-medium md:text-4xl md:font-bold my-2">{project.title}</h1>
                <h1 className="text-sm md:text-xl">{project.description}</h1>
                <button className="w-11/12 lg:w-full cursor-default m-auto absolute bottom-10 border-none"><a className="lg:px-28 md:py-2 p-1 px-14 md:text-lg rounded border border-black hover:scale-50 hover:bg-transparent bg-[rgba(255,255,255,0.35)]" target={'_blank'} rel="noreferrer" href={project.url}>Visit Website</a></button>
              </div>
            </SwiperSlide>)
            })}
          </Swiper>
        </div>
      </div>
    </>
  )
}
