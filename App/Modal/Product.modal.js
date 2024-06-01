import { Schema , model } from "mongoose";

const productSchema = new Schema({
    
    name: {
        type: String,
        required: true,
        trim: true

    },
    shellerId: {
        type:String,
        required: true,
        unique: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    numReviews: {
        type: Number,
        required: true
    },

})

const Product = model("Product", productSchema);

export default Product;