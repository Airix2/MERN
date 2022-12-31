import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
	{
		// They should all be required in reality
		userId: String,
		cost: String,
		products: {
			type: [mongoose.Types.ObjectId],
			of: Number,
		},
	},
	{ timestamps: true }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;
