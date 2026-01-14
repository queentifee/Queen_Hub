import React from 'react'
import Image from 'next/image'

const Images = () => {
  return (
<div className="flex w-full h-120 gap-6 p-2">
       <div className=" hidden md:block w-full md:w-1/2 aspect-[4/3] relative group overflow-hidden rounded-md">

  {/* Background Image */}
  <Image
    src="/3-remove.png"
    alt="Image 1"
    fill
    className="object-cover transition duration-300"
  />

  <div className="absolute inset-0 bg-amber-600 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none rounded-md" />
  <div className="absolute inset-0 p-4 flex flex-col justify-center items-center text-white text-center z-10 transition-opacity duration-300 group-hover:opacity-90">
    <h1 className="text-xl font-semibold mb-3">Shop only the best offer.</h1>
    <button className="bg-orange-950 hover:bg-amber-600 px-3 py-1 text-lg rounded shadow">
      Shop Now
    </button>
  </div>
</div>

  <div className="relative w-1/2 md:w-1/4 h-full group overflow-hidden rounded-md">
  {/* Background Image */}
  <Image
    src="/unsplash.jpg"
    alt="Image 1"
    fill
    className="object-cover transition duration-300"
  />

  <div className="absolute inset-0 bg-amber-600 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none rounded-md" />
  <div className="absolute inset-0 p-4 mb-40 flex flex-col justify-center items-center text-white text-center z-10 transition-opacity duration-300 group-hover:opacity-90">
    <button className="bg-orange-950 hover:bg-amber-600 px-3 py-1 text-lg rounded shadow">
      View Collection
    </button>
  </div>
</div>


  {/* Image 3 - 25% width */}
  <div className="relative w-1/2  md:w-1/4 h-full group overflow-hidden rounded-md">
  {/* Background Image */}
  <Image
    src="/unsplash8.jpg"
    alt="Image 1"
    fill
    className="object-cover transition duration-300"
  />

  <div className="absolute inset-0 bg-amber-600 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none rounded-md" />
  <div className="absolute inset-0 p-4  flex flex-col justify-center items-center text-white text-center z-10 transition-opacity duration-300 group-hover:opacity-90">
    <button className="bg-orange-950 hover:bg-amber-600 px-3 py-1 text-lg rounded shadow">
      Discounted Offers
    </button>
  </div>
</div>

  </div>
  
 )
}

export default Images     