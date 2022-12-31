import OverallStats from "../models/OverallStat.js";

export const getSales = async (req, res) => {
	try {
		const stats = await OverallStats.find();
		res.status(200).json(stats[0]);
	} catch (error) {
		console.log(error.message);
		res.status(404).json({ message: error.message });
	}
};
