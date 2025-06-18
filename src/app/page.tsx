 import Hero from "@/components/Hero";
 import ProductList from "@/components/ProductList";
 export default function Home() {
  return (
   <div className="bg-amber-50">
    <Hero/>

    <h2 className="w-full text-center text-2xl md:text-4xl font-semi-bold py-6">All Products</h2>
    <ProductList/>
   </div>
  );
}
