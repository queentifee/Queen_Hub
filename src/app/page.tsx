 import Hero from "@/components/Hero";
import Images from "@/components/Image";
 import ProductList from "@/components/ProductList";
 export default function Home() {
  return (
   <div className="bg-amber-50">
    <Hero/>

    <h2 className="w-full text-2xl md:text-4xl font-semi-bold px-4 py-6">Exlusive Products</h2>
    <ProductList/>
    <div className="flex items-center justify-center mt-6">
  <div className="flex-grow h-px bg-[#8B4513] ml-5 mb-8"></div> {/* Thin brown line (left) */}

  <button className=" text-md mb-8 px-6 py-2 border border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition">
    View All Products
  </button>

  <div className="flex-grow h-px bg-[#8B4513] mr-5 mb-8"></div> {/* Thin brown line (right) */}
</div>
<Images/>
   </div>
  );
}
