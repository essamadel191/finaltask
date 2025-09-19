"use client"

import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import { Category } from '@/Types/product.type'

const CategorySwiper = ({ Categories }: {Categories: Category[]}) => {
    return (
        <div>
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={10}
                loop={true}
                pagination={{ clickable: true }}
                breakpoints={{
                0: {
                    slidesPerView: 2, // phones
                },
                640: {
                    slidesPerView: 3, // small tablets
                },
                1024: {
                    slidesPerView: 6, // desktops
                },
                }}
            >
            {Categories.map((category:Category, idx:number) => (
                    <SwiperSlide key={idx} className="text-center">
                        <Image width={500} height={500}
                        src={category.image}
                        alt={category.name}
                        className="h-[200px] w-full object-cover"
                        />
                        <p className="my-3 mb-7 text-sm font-medium">{category.name}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CategorySwiper
