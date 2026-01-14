"use client"

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

export default function Hero() {
  return (
    <div className="bg-gray-50 px-4 md:px-9 py-6 md:py-9 flex flex-col md:flex-row w-full gap-6">
      
      {/* Left Column */}
      <div className="relative w-full md:w-1/2 h-[350px] md:h-[600px] group overflow-hidden rounded-md">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="h-full"
        >
          {['/bag8.jpg', '/unsplash4.jpg'].map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative h-full group">
                <Image
                  src={src}
                  alt={`Bag Image ${idx + 1}`}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-5 md:p-10 z-10 text-white bg-gradient-to-t from-black/50 to-transparent">
                  <h1 className="text-lg md:text-2xl font-semibold mb-3 md:mb-6">
                    Our amazing collection specially designed for you
                  </h1>
                  <button className="bg-orange-950 hover:bg-amber-600 px-3 py-1 text-sm md:text-lg rounded shadow">
                    {idx === 0 ? 'View Bag Collection' : 'View Shoe Collection'}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        
        {/* Top Right Block */}
        <div className="hidden md:block relative h-[220px] md:h-[290px] group overflow-hidden rounded-md">
          <Image
            src="/unsplash9.jpg"
            alt="Special Offers"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 px-4 flex flex-col items-start justify-center text-white bg-gradient-to-t from-black/60 to-transparent">
            <h1 className="text-lg md:text-xl font-semibold mb-3">
              Shop only the best offer on Queen&rsquo;s Hub
            </h1>
            <button className="bg-orange-950 hover:bg-amber-600 px-3 py-1 text-sm md:text-lg rounded shadow">
              Shop Now
            </button>
          </div>
        </div>

        {/* Bottom Right Row */}
        <div className="grid grid-cols-2 gap-3 md:gap-6 h-auto md:h-[290px]">
          
          {/* Bottom Left */}
          <div className="relative w-full h-[220px] md:h-full group overflow-hidden rounded-md">
            <Image
              src="/shoe9.jpg"
              alt="Shoe Discounts"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-gradient-to-t from-black/60 to-transparent">
              <h1 className="text-lg md:text-xl font-semibold mb-3">
                Shop Discounted Offers
              </h1>
              <button className="bg-orange-950 hover:bg-amber-600 px-3 py-1 text-sm md:text-lg rounded shadow">
                Discounted
              </button>
            </div>
          </div>

          {/* Bottom Right */}
          <div className="relative w-full h-[220px] md:h-full group overflow-hidden rounded-md">
            <Image
              src="/5.png"
              alt="More Discounts"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 text-white bg-gradient-to-t from-black/60 to-transparent">
              <h1 className="text-lg md:text-xl font-semibold mb-3 text-center px-3">
                Shop your favourite item. Up to 40% off
              </h1>
              <button className="bg-orange-950 hover:bg-amber-600 px-3 py-1 text-sm md:text-lg rounded shadow">
                Discounted
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
