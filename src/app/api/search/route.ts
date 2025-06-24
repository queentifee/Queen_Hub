import { NextRequest } from "next/server";
import { connectDB } from "../database/connectDB";
import Product from "../models/product.model";

export async function GET (request: NextRequest) {
    try {
        await connectDB();

        const searchParams = request.nextUrl.searchParams
        const searchTerm = searchParams.get("searchTerm");

        const products = await Product.find ({
            name: {$regex: searchTerm, $options: "i"}
        }).sort({ createdAt: -1});

        return Response.json({products}, {status: 200});
    } catch (error: unknown) {

    if (error instanceof Error) {
         return Response.json({ message: error.message}, {status: 400})
    } else {
        console.log('Unexpected error:', error);
    }
    
}
}