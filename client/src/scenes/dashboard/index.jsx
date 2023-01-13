import { DownloadOutlined } from "@mui/icons-material";
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import React from "react";
import { useGetDashboardQuery } from "state/api";

const Dashboard = () => {
	const theme = useTheme();
	const isNonMediumScreens = useMediaQuery("(min-width:1200px)");
	const { data, isLoading } = useGetDashboardQuery();

	const columns = [
		{
			field: "_id",
			headerName: "ID",
			flex: 1,
		},
		{
			field: "userId",
			headerName: "User Id",
			flex: 1,
		},
		{
			field: "createdAt",
			headerName: "CreatedAt",
			flex: 1,
		},
		{
			field: "products",
			headerName: "# of Products",
			flex: 0.5,
			sortable: false,
			renderCell: (params) => params.value.length,
		},
		{
			field: "cost",
			headerName: "Cost",
			flex: 1,
			renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
		},
	];

	return (
		<Box m="1.5rem 2.5rem">
			<FlexBetween>
				<Header title="DASHBOARD" subtitle="Welcome to you dashboard" />
				<Box>
					<Button
						sx={{
							backgroundColor: theme.palette.secondary.light,
							color: theme.palette.background.alt,
							fontSize: "14px",
							fontWeight: "bold",
							padding: "10px 20px",
						}}
					>
						<DownloadOutlined sx={{ mr: "10px" }} />
						Download Reports
					</Button>
				</Box>
			</FlexBetween>
		</Box>
	);
};

export default Dashboard;
