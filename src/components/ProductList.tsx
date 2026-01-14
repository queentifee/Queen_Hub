"use client";

import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

interface Product {
  _id: string,
  image: string,
  name: string,
  price: number
}

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect (() => {
      axios.get("/api/fetch-product").then((response) => setProducts
      (response.data.products))
    }, [])
  return (
    <div id="product" className='bg-gray-50 px-4 md:px-12 py-5 md:py-10 flex justify-center items-center '>
  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full max-w-7xl">
       {products.slice(-4).map((product: Product) => (
<Link href={(`/product/${product._id}`)} key={product._id}>
<div className='relative group w-full h-72 rounded-sm overflow-hidden border border-amber-300 '>
<Image src={product.image}
 alt='img' 
 width={1000} 
 height={1000} 
className="w-full h-72 object-cover object-center transition-opacity duration-300 group-hover:opacity-10"/>

 <div className='absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
<button className='border  text-black text-sm px-4 py-2 shadow hover:bg-amber-600'>
 ❤️ Wishlist
</button>
<button className='border text-black text-sm px-4 py-2 shadow hover:bg-amber-600'>
      🛒 Add to Cart
</button>
 </div>
 </div>
</Link>
       ))} 
    </div>
    
    </div>
    
  )
}

export default ProductList
