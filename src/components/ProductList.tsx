"use client";

import Link from 'next/link';
import Image from 'next/image';


// interface Product {
//   _id: string,
//   image: string,
//   name: string,
//   price: number

// }

const staticProducts = [
  {
    _id: "1",
    image: "/unsplash10-re.png",
    name: "Shoe 9",
    price: 49.99,
  },
  {
    _id: "2",
    image: "/6-remove.png",
    name: "Bag 8",
    price: 59.99,
  },
   {
    _id: "3",
    image: "/2-remove.png",
    name: "Bag 8",
    price: 59.99,
  },
  {
    _id: "4",
    image: "/shoe0.png",
    name: "Shoe 10",
    price: 69.99,
  },
 
  // Add more products as needed
];

const ProductList = () => {
  return (
    <div id="product" className='bg-gray-50 px-4 md:px-12 py-5 md:py-10 flex justify-center items-center '>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {staticProducts.map((product) => (
          <Link href={`/product/${product._id}`} key={product._id}>
            <div className='relative group w-[17rem] h-72 rounded-sm overflow-hidden border border-amber-300 '>
              <Image src={product.image} alt='img' width={1000} height={1000} className="max-w-[17rem] h-72 object-cover object-center transition-opacity duration-300 group-hover:opacity-10"/>
              <div className='mt-4'> 
                <h2 className='font-semibold text-lg'>{product.name}</h2>
                <p className='font-medium text-sm mt-1'>${product.price}</p>
              </div>
              <div className='absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <button className='border  text-black text-sm px-4 py-2 shadow hover:bg-amber-600'>❤️ Wishlist</button>
                <button className='border text-black text-sm px-4 py-2 shadow hover:bg-amber-600'>🛒 Add to Cart</button>
              </div>
            </div>
          </Link>
        ))} 
      </div>
    </div>
  )
}

// const ProductList = () => {
//     const [products, setProducts] = useState([]);

//     useEffect (() => {
//       axios.get("/api/fetch-product").then((response) => setProducts
//       (response.data.products))
//     }, [])
//   return (
//     <div id="product" className='bg-gray-50 px-4 md:px-12 py-5 md:py-10 flex justify-center items-center '>
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
//        {products.map((product: Product, index) => (
// <Link href={(`/product/${product._id}`)} key={index}>
// <div className='relative group w-[17rem] h-72 rounded-sm overflow-hidden border border-amber-300 '>
// <Image src={product.image}
//  alt='img' 
//  width={1000} 
//  height={1000} 
// className="max-w-[17rem] h-72 object-cover object-center transition-opacity duration-300 group-hover:opacity-10"/>
//  <div className='mt-4'> 
//     <h2 className='font-semibold text-lg'>{product.name}</h2>
//     <p className='font-medium text-sm mt-1'>${product.price}</p>
//  </div>
//  <div className='absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
// <button className='border  text-black text-sm px-4 py-2 shadow hover:bg-amber-600'>
//  ❤️ Wishlist
// </button>
// <button className='border text-black text-sm px-4 py-2 shadow hover:bg-amber-600'>
//       🛒 Add to Cart
// </button>
//  </div>
//  </div>
// </Link>
//        ))} 
//     </div>
    
//     </div>
    
//   )
// }

export default ProductList
