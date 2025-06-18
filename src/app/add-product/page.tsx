import AddForm from '@/components/AddForm'
import React from 'react'

const AddProductPage = () => {
  return (
    <div className='px-4 md:px-12 bg-amber-100 pb-8'>
        <h2 className='text-center font-semibold pt-8 text-xl md:text-2xl w-full mx-auto'>Add a new Product</h2>
        < AddForm/>
    </div>
  )
}

export default AddProductPage
