"use client";

import React, { ChangeEvent } from 'react'
import Link from 'next/link'
import { Search, ShoppingBag, ShoppingCart, Plus } from 'lucide-react'
import AuthSection from '@/app/auth';
import { useRouter } from 'next/navigation'
import { SignedIn } from '@clerk/nextjs';

export default function Navbar() {
  const router = useRouter();

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", e.target.value);

    const searchQuery = urlParams.toString();

    router.push(`/search-page?${searchQuery} `)
  }
  return (
<nav className='px-4 md:px-12 py-4 md:py-6 bg-white'>
    <div className='flex justify-between items-center'>
       <div className='relative max-w-[200px] md:w-[300px]'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <Search className='w-4 h-4'/>
            </div>

            <input type="text"
            onChange={handleSearch}
             className='h-[36px] relative pl-10 border-[1px] boreder-black/[0.7] text-md rounded-[8px] w-full py-2 px-3
             focus:outline-0 bg-transparent' placeholder= "Search..."/>
        </div>
        <div className='relative flex items-center space-x-1'>
         <div className=' ps-2 '>
                <ShoppingBag className='w-8 h-8 font-bold'/>
            </div>
        <Link href={"/"} 
        className='hidden md:inline-block text-3xl font-extrabold'>
  Queen&rsquo;s
          </Link>
        </div>
      <div className='relative flex items-center gap-3'>
  <AuthSection />

    <button className='flex items-center gap-2 font-semibold bg-gray-200 p-1 rounded-md hover:bg-gray-300'>
  <ShoppingCart className='w-5 h-5 text-gray-700' />
   Cart
</button>
<SignedIn>
<Link href={"/add-product"}>    
<button className='flex items-center font-semibold bg-gray-200 p-1 rounded-md hover:bg-gray-300'>
  <Plus className='w-5 h-5 text-gray-700' />
   Add Product
</button>
</Link>
</SignedIn>
  
</div>
    </div>
      <div className="mt-4 max-w-full h-px bg-gray-200 "></div> 
    <div className='mt-2 flex justify-center items-center space-x-8'>
      <Link href={"/add-product"}>
        <button className=' font-medium text-sm rounded-md cursor-pointer'>HOME</button>
        </Link>
       <Link href={"/add-product"}>
        <button className=' font-medium text-sm rounded-md cursor-pointer'>SHOP</button>
        </Link>
         <Link href={"/add-product"}>
        <button className=' font-medium text-sm cursor-pointer'>ABOUT US</button>
        </Link>
</div>

</nav>
  )
}
