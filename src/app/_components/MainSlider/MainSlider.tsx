"use client"

import React from 'react'

import banner1 from "./../../../../public/Assets/slider/grocery-banner.jpg"
import banner2 from "./../../../../public/Assets/slider/grocery-banner-2.jpg"

import slider1 from "./../../../../public/Assets/slider/slider-image-1.jpeg"
import slider2 from "./../../../../public/Assets/slider/slider-image-2.jpeg"
import slider3 from "./../../../../public/Assets/slider/slider-image-3.jpeg"
import  Image from 'next/image';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay,Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'




const MainSlider = () => {
  return (
    <div className='mb-10 flex flex-col lg:flex-row gap-1'>
        <div className='w-full lg:w-2/3'>
            <Swiper
                modules={[Autoplay,Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                >
            <SwiperSlide><Image className='w-full h-[250px] sm:h-[400px] lg:h-[600px] object-cover rounded-md' src={slider1} alt="Bags-Banner"/></SwiperSlide>
            <SwiperSlide><Image className='w-full h-[250px] sm:h-[400px] lg:h-[600px] object-cover rounded-md' src={slider2} alt="Bags-Banner"/></SwiperSlide>
            <SwiperSlide><Image className='w-full h-[250px] sm:h-[400px] lg:h-[600px] object-cover rounded-md' src={slider3} alt="Bags-Banner"/></SwiperSlide>
            </Swiper>
        </div>
        <div className='w-full lg:w-1/3 flex flex-col gap-1'>
            <Image className='w-full h-[150px] sm:h-[200px] lg:h-[300px] object-cover rounded-md' src={banner1} alt="Bags-Banner"/>
            <Image className='w-full h-[150px] sm:h-[200px] lg:h-[300px] object-cover rounded-md' src={banner2} alt="Elec-banner"/>
        </div>
    </div>
  )
}

export default MainSlider