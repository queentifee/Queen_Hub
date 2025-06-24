import { connectDB } from "../database/connectDB";
import Product from "../models/product.model";

export async function GET(_request: Request) {
    await connectDB();

    try {

      const products =  await Product.find({}).sort ({ createdAt: -1});

      return Response.json({products}, {status: 200} );
        
     } catch (error: unknown) {
    if (error instanceof Error) {
        return Response.json({ message: error.message}, {status: 400})
    } else {
        console.log('Unexpected error:', error);
    }
        
    }
}