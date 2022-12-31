import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useGetDashboardQuery } from "state/api";

const Dashboard = () => {
	const theme = useTheme();
	const isNonMediumScreens = useMediaQuery("(min-width:1200px)");
	const { data, isLoading } = useGetDashboardQuery();

	return <div>Dashboard</div>;
};

export default Dashboard;
