 import Hero from "@/components/Hero";
import Images from "@/components/Image";
import Newsletter from "@/components/Newsletter";
 import ProductList from "@/components/ProductList";
 import Link from "next/link";
 
 export default function Home() {
  return (
   <div>
    <Hero/>

    <h1 className="w-full text-2xl md:text-4xl text-center font-bold px-4 py-6">Exlusive Products</h1>
        <h2 className="w-full text-md md:text-lg mb-3 text-center ">Shop our amazingly exlusive product specially selected for you</h2>


    <ProductList/>
    <div className="flex items-center justify-center mt-6">
  <div className="flex-grow h-px bg-[#8B4513] ml-5 mb-8"></div> {/* Thin brown line (left) */}
<Link href="all-products" >
  <button className=" text-md mb-8 px-6 py-2 border border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition">
    View All Products
  </button>
</Link>
  <div className="flex-grow h-px bg-[#8B4513] mr-5 mb-8"></div> {/* Thin brown line (right) */}
</div>
<Images/>
<Newsletter/>
   </div>
  );
}
