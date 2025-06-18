import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    image: String,
    name: String,
    price: String,
    link: String,
    description: String
},
{timestamps: true}
);

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;

