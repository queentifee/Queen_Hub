"use server"

import { connectDB } from "@/app/api/database/connectDB";
import cloudinary from "./cloudinary";
import Product from "@/app/api/models/product.model";

export async function addAction(formData: FormData){
   try {
    const image = formData.get('image') as File;
    const name = formData.get('name');
    const price = formData.get('price');
    const link = formData.get('link');
    const description = formData.get('description');

 if(!image || !name || !price || !link ||!description ) {
 console.log ("All fields are required.") ;

 return {
    error: "All fields are required.",
 }
 
 }

 await connectDB();

//  Image processess

const arrayBuffer = await image.arrayBuffer();
const buffer = new Uint8Array(arrayBuffer);
const imageResponse: any = await new Promise((resolve) => {
   cloudinary.uploader
   .upload_stream(
      {
         resource_type: "auto",
         folder: "Queen_artistry"
      },
      async ( result) => {
         // if (error) {
         //    return reject(error.message);

         // }
         return resolve(result);
      }
   )
   .end(buffer);
});
console.log("image response: ", imageResponse)

// store in DB

await Product.create({
   image: imageResponse.secure_url,
   name,
   description,
   link,
   price
});
return {
   success: "Product added successfully"
};
   } catch (error: unknown) {
  if (error instanceof Error) {
    return {
      error: error.message,
    };
  }

  return {
    error: "Something went wrong.",
  };
   }
}