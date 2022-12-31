import mongoose, { mongo } from "mongoose";

const ProductSchema = new mongoose.Schema(
	{
		// They should all be required in reality
		name: String,
		price: Number,
		description: String,
		category: String,
		rating: Number,
		supply: Number,
	},
	{ timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
