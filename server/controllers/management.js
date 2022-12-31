import User from "../models/Users.js";
import Transaction from "../models/Transaction.js";
import mongoose from "mongoose";

export const getAdmins = async (req, res) => {
	try {
		const admins = await User.find({ role: "admin" }).select("-password");
		res.status(200).json(admins);
	} catch (error) {
		console.log(error.message);
		res.status(404).json({ message: error.message });
	}
};

export const getUserPerformance = async (req, res) => {
	try {
		const { id } = req.params;
		const userWithStats = await User.aggregate([
			{ $match: { _id: new mongoose.Types.ObjectId(id) } },
			{
				$lookup: {
					from: "affiliatestats",
					localField: "_id",
					foreignField: "userId",
					as: "affiliateStats",
				},
			},
			// flattens the array/object
			{ $unwind: "$affiliateStats" },
		]);
		const saleTransactions = await Promise.all(
			userWithStats[0].affiliateStats.affiliateSales.map((id) => {
				return Transaction.findById(id);
			})
		);
		const filteredSaleTransaction = saleTransactions.filter(
			(transaction) => transaction !== null
		);
		res.status(200).json({
			user: userWithStats[0],
			sales: filteredSaleTransaction,
		});
	} catch (error) {
		console.log(error.message);
		res.status(404).json({ message: error.message });
	}
};
