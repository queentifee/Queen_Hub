"use client";

import React, { ChangeEvent } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter();

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", e.target.value);

    const searchQuery = urlParams.toString();

    router.push(`/search-page?${searchQuery} `)
  }
  return (
<nav className='px-4 md:px-12 py-4 md:py-6 bg-amber-900'>
    <div className='flex justify-between items-center'>
        <Link href={"/"} className='hidden md:inline-block text-lg font-semibold'>QueenArtistry</Link>
        <div className='relative max-w-[300px] md:w-[400px]'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <Search className='w-4 h-4'/>
            </div>

            <input type="text"
            onChange={handleSearch}
             className='h-[36px] relative pl-10 border-[1px] boreder-black/[0.7] text-sm rounded-[8px] w-full py-2 px-3
             focus:outline-0 bg-transparent' placeholder= "search"/>
        </div>
        <Link href={"/add-product"}>
        <button className='bg-amber-600 px-3 py2 rounded-md cursor-pointer'>Add Product</button>
        </Link>
    </div>
</nav>
  )
}
