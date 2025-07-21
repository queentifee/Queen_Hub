"use client"

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

export default function Hero() {
  return (
    <div className="bg-gray-200 px-9 py-9 flex w-full gap-6">
      
      {/* Left Column */}
      <div className="relative w-1/2 h-[600px] group overflow-hidden rounded-md">
    <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000}}
        // navigation
        // pagination={{clickable: true}}
        loop= {true}
        className='h-full'
        >
          {['/bag8.jpg', '/unsplash4.jpg'].map((src, idx) => (
            <SwiperSlide key = {idx}>
              <div className='relative h-[600px] group'>
 <Image
          src={src}
          alt={`Bag Image ${idx + 1}`}
          fill
          className="object-cover transition duration-300"
        />
        <div className="absolute inset-0 flex items-end justify-end p-10 z-10 text-white transition-opacity duration-300 group-hover:opacity-90 bg-gradient-to-t from-black/40 to-transparent">
  <h1 className="text-2xl font-semibold mb-9">
          Our amazing collection specially designed for you
        </h1>
                  <button className="bg-orange-950 hover:bg-amber-600 px-1 mb-10 text-lg rounded shadow">
          {idx === 0 ? 'View Bag Collection' : 'View Shoe Collection'}
        </button>
        </div>
      
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
          </div>

       

      {/* Right Column */}
      <div className="w-1/2 flex flex-col gap-6">
        
        {/* Top Right Block */}
        <div className="relative h-[290px] group overflow-hidden rounded-md">
          <Image
            src="/unsplash9.jpg"
            alt="Special Offers"
            fill
            className="object-cover transition duration-300"
          />
          <div className="absolute inset-0 flex px-3 flex-col items-start justify-center z-10 text-white text-center transition-opacity duration-300 group-hover:opacity-90 bg-gradient-to-t from-black/60 to-transparent">
            <h1 className="text-xl font-semibold mb-3">Shop only the best offer on Queen's Hub</h1>
            <button className="bg-orange-950 hover:bg-amber-600 px-2 text-lg rounded shadow">
              Shop Now
            </button>
          </div>
        </div>

        {/* Bottom Right Row */}
        <div className="flex gap-6 h-[290px]">
          
          {/* Left Bottom Image */}
          <div className="relative w-1/2 group overflow-hidden rounded-md">
            <Image
              src="/shoe9.jpg"
              alt="Shoe Discounts"
              fill
              className="object-cover transition duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-center transition-opacity duration-300 group-hover:opacity-90 bg-gradient-to-t from-black/60 to-transparent">
                          <h1 className="text-xl font-semibold mb-3">Shop Discounted Offers</h1>

              <button className="bg-orange-950 hover:bg-amber-600 px-2  mr-2 text-lg rounded shadow">
                Discounted
              </button>
            </div>
          </div>

          {/* Right Bottom Image */}
          <div className="relative w-1/2 group overflow-hidden rounded-md">
            <Image
              src="/5.png"
              alt="More Discounts"
              fill
              className="object-cover transition duration-300"
            />
            <div className="absolute inset-0 flex items-end justify-center z-10 text-white text-center transition-opacity duration-300 group-hover:opacity-90 bg-gradient-to-t from-black/60 to-transparent">
             <h1 className="text-xl font-semibold mb-9">Shop your favourite item. Up to 40% off</h1>

              <button className="bg-orange-950 hover:bg-amber-600 px-2  mb-9 text-lg rounded shadow">
                Discounted
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
