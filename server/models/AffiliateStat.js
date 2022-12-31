import mongoose, { mongo } from "mongoose";

const AffiliateStatSchema = new mongoose.Schema(
	{
		// They should all be required in reality
		userId: { type: mongoose.Types.ObjectId, ref: "User" },
		affiliateSales: {
			type: [mongoose.Types.ObjectId],
			ref: "Transaction",
		},
	},
	{ timestamps: true }
);

const AffiliateStat = mongoose.model("AffiliateStat", AffiliateStatSchema);
export default AffiliateStat;
