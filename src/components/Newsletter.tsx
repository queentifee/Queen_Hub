"use client"

import React from 'react'




const Newsletter = () => {
  return (
    <div className='bg-gray-100 py-12 px-4'>
        
        <div className='flex flex-col item-center justify-center text-center max-w-2xl mx-auto '>
        <h1 className=' text-amber-700  text-3xl font-bold'  >Newsletter</h1>

        <h1 className='text-4xl font-black mt-2'>SignUp & get 20% off</h1>

        <p className='text-2xl item-center justify-center text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>


            <form className='flex items-center mt-4 w-full max-w-md'>
<input
type='email'
placeholder='Email Address'
className='flex-grow p-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500'
/>
<button
type='submit'
className='bg-amber-700 text-white px-5 py-3 rounded-r-md hover:bg-amber-800 transition duration-300'
>
    Subscribe
    </button>



            </form>

            
            
            
            {/* button in front to the form input */}
        </div>


        </div>
  )
}

export default Newsletter