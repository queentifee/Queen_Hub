"use client";

import { addAction } from '@/utils/addAction'
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from 'react';
import toast from 'react-hot-toast'
import Image from 'next/image';

const AddForm = () => {
    const router = useRouter();
    const [imageUrl, setImageUrl] = useState('')
    async function clientAddAction(formData: FormData) {
      const {error, success} =  await addAction(formData)

      if(error) {
        // toast notification
        toast.error(error)
      }

      if(success) {
        toast.success(success);
        router.push('/');
        setImageUrl('');
      }

    }

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if(file) {
            const fileSize = file.size;

            if (Math.round(fileSize / 2024) > 2024) {
                toast.error ("image greater tham 1MB is not allowed");

            }else {
                setImageUrl(URL.createObjectURL(file));
            }
        }
    }
  return (
    <form
    action={clientAddAction}
     className='w-full max-w-xl mx-auto flex flex-col justify-center items-center space-y-4 mt-3 md:mt-5'>
        {imageUrl && 
        (<Image
        src={imageUrl}
            alt="img"
            width={1000}
            height={1000}
            className="max-w-full max-h-72 object-cover object-center rounded-lg"
        
          />)}
        <div className='flex flex-col w-full'>
            <label>
                Product Image:
            </label>
            <input type='file' accept='image/*' name='image'
            onChange={handleImageChange} className='w-fullnpx-3 py-1.5 md:py-2 text-[#252422] rounded-lg
             bg-white border-gray-500'/>
        </div>
        <div className='flex flex-col w-full'>
            <label>
                Name:
            </label>
            <input type='text'  name='name' placeholder='Enter product name' className='w-fullnpx-3 py-1.5 md:py-2 text-[#252422] rounded-lg
             bg-white border-gray-500'/>
        </div>
        <div className='flex flex-col w-full'>
            <label>
                Price:
            </label>
            <input type='number'  name='price' placeholder='Enter product price' className='w-fullnpx-3 py-1.5 md:py-2 text-[#252422] rounded-lg
             bg-white border-gray-500'/>
        </div>
        <div className='flex flex-col w-full'>
            <label>
                Seller's Link:
            </label>
            <input type='text'  name='link' placeholder='Enter product link' className='w-fullnpx-3 py-1.5 md:py-2 text-[#252422] rounded-lg
             bg-white border-gray-500'/>
        </div>
        <div className='flex flex-col w-full'>
            <label>
                Description:
            </label>
            <textarea 
            name='description' 
            placeholder='Enter the product description' 
            className='w-fullnpx-3 py-1.5 md:py-2 text-[#252422] rounded-lg
             bg-white border-gray-500'
            rows={4}>
           </textarea>
        </div>
        <button type='submit' className='w-full bg-amber-500 px-3 py-2 rounded-3xl cursor-pointer'>Add product</button>
    </form>
  )
}

export default AddForm