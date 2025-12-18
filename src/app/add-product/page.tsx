import AddForm from '@/components/AddForm'
import React from 'react'
import Image from 'next/image'

const AddProductPage = () => {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center">
      <h2 className="text-center font-semibold pt-8 text-xl md:text-2xl w-full mx-auto mb-8">Add a new Product</h2>
      <div className="flex flex-col md:flex-row w-full max-w-6xl h-full rounded-lg overflow-hidden shadow-lg">
        {/* Left: Image */}
        <div className="relative w-full md:w-1/2  md:h-auto">
          <Image
            src="/unsplash5.jpg"
            alt="Background Image"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Right: Form */}
        <div className="w-full md:w-1/2  flex items-center justify-center bg-gray-100 p-6">
          <AddForm />
        </div>
      </div>
    </div>
  )
}

export default AddProductPage
