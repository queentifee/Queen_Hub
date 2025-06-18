
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='min-h-[70vh] md:min-h-[60vh] lg:min-h-[90vh] flex flex-col md:flex-row justify-center items-center bg-white px-4 md:px-12 text-black'>
       <div className='max-w-2xl'>
      <h1 className='text-5xl pt-6 md:pt-0 md:text-7xl leading-tight font-semibold'>  Timeless elegance on your wrist</h1>
      <p className='text-[#495057] mt-4'>Discover elegance infused with fashion and class</p>
      <Link href="#product">
      <button className='mt-8 bg-amber-600 px-3 py-2 rounded-md cursor-pointer '>Shop the collection</button>
      </Link>
       </div>
       <div className='mt-3'>
        <Image src="/hero-1.avif" alt="img" width={500} height={700}/>
       </div>
    </div>
  )
}
