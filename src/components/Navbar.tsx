"use client";

import React, { ChangeEvent } from 'react'
import Link from 'next/link'
import { Search, ShoppingBag, Plus } from 'lucide-react'
// import AuthSection from '@/app/auth';
import { useRouter } from 'next/navigation'
import { SignedIn } from '@clerk/nextjs';



export default function Navbar() {
  const router = useRouter();

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", e.target.value);

    const searchQuery = urlParams.toString();

    router.push(`/search-page?${searchQuery}`)
  }
  return (<nav className="px-4 md:px-12 py-4 md:py-6 bg-white">
  <div className="relative flex items-center justify-between">

    {/* LEFT: Search Bar */}
    <div className="relative w-[120px] sm:w-[200px] md:w-[200px]">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="w-4 h-4" />
      </div>
      <input
        type="text"
        onChange={handleSearch}
        className="h-[36px] pl-10 border border-black/70 text-sm rounded-lg w-full
        focus:outline-0 bg-transparent"
        placeholder="Search..."
      />
    </div>

    {/* CENTER: Logo */}
    {/* <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center gap-2"> */}
    <div className='flex items-center gap-2 absolute left-1/2 -translate-x-1/2'>
      <ShoppingBag className="w-7 h-7 md:w-8 md:h-8" />
      <Link
        href="/"
        className="text-2xl md:text-3xl font-extrabold leading-none"
      >
        Queen&rsquo;s
      </Link>
    </div>

        {/* RIGHT: Buttons */}
        <div className='flex items-center gap-3 ml-auto'>
          <SignedIn>
            <Link href={"/add-product"}>    
              <button className='flex items-center gap-1 font-semibold bg-gray-200 px-2 py-1 rounded-md hover:bg-gray-300 whitespace-nowrap'>
                <Plus className='w-5 h-5 text-gray-700' />
                <span className='hidden md:inline'>Add Product</span>
              </button>
            </Link>
          </SignedIn>
       
  
</div>
    </div>
      {/* <div className="mt-4 max-w-full h-px bg-gray-200 "></div> 
    <div className='mt-2 flex justify-center items-center space-x-8'>
      <Link href={"/"}>
        <button className=' font-medium text-sm rounded-md cursor-pointer'>HOME</button>
        </Link>
       <Link href={"/"}>
        <button className=' font-medium text-sm rounded-md cursor-pointer'>SHOP</button>
        </Link>
         <Link href={"/"}>
        <button className=' font-medium text-sm cursor-pointer'>ABOUT US</button>
        </Link>
</div> */}

</nav>
  )
}
