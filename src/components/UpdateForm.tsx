"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast'
import Image from 'next/image';
import axios from 'axios';
import { updateAction } from '@/utils/updateAction';

interface Product {
  image: string;
  _id: string;
  name: string;
  price: number;
  link: string;
  description: string;
}

const UpdateForm = ({ productId }: {productId: string}) => {
    const router = useRouter();
    const [imageUrl, setImageUrl] = useState('')
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        axios.get(`/api/product/${productId}`).then((response) => setProduct(response.data.product));
    },[])

    useEffect(() => {
        if(product) {
            setImageUrl(product.image);
        }

    },[product])
    
    async function clientAddAction(formData: FormData) {
      const {error, success} =  await updateAction(formData, productId)

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

            if (Math.round(fileSize / 1024) > 1024) {
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
            <input type='text'  name='name'
            defaultValue={product?.name}
             placeholder='Enter product name' className='w-fullnpx-3 py-1.5 md:py-2 text-[#252422] rounded-lg
             bg-white border-gray-500'/>
        </div>
        <div className='flex flex-col w-full'>
            <label>
                Price:
            </label>
            <input type='number'  name='price'
            defaultValue={product?.price}
            placeholder='Enter product price' className='w-fullnpx-3 py-1.5 md:py-2 text-[#252422] rounded-lg
             bg-white border-gray-500'/>
        </div>
        <div className='flex flex-col w-full'>
            <label>
                Sellers Link:
            </label>
            <input type='text'  name='link'
            defaultValue={product?.link} placeholder='Enter product link' className='w-fullnpx-3 py-1.5 md:py-2 text-[#252422] rounded-lg
             bg-white border-gray-500'/>
        </div>
        <div className='flex flex-col w-full'>
            <label>
                Description:
            </label>
            <textarea 
            name='description' 
            defaultValue={product?.description}
            placeholder='Enter the product description' 
            className='w-fullnpx-3 py-1.5 md:py-2 text-[#252422] rounded-lg
             bg-white border-gray-500'
            rows={4}>
           </textarea>
        </div>
        <button type='submit' className='w-full bg-amber-500 px-3 py-2 rounded-3xl cursor-pointer'>Update product</button>
    </form>
  )
}

export default UpdateForm