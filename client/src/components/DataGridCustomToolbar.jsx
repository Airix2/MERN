import { Search } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import {
	GridToolbarColumnsButton,
	GridToolbarContainer,
	GridToolbarDensitySelector,
	GridToolbarExport,
} from "@mui/x-data-grid";
import React from "react";
import FlexBetween from "./FlexBetween";

const DataGridCustomToolbar = ({ searchInput, setSearchInput, setSearch }) => {
	const checkEnter = (e) => {
		if (e.keyCode === 13) {
			setSearch(searchInput);
		}
	};
	return (
		<GridToolbarContainer>
			<FlexBetween width={"100%"}>
				<FlexBetween>
					<GridToolbarColumnsButton />
					<GridToolbarDensitySelector />
					<GridToolbarExport />
				</FlexBetween>
				<TextField
					label="Search..."
					sx={{ mb: "0.5rem", width: "15rem" }}
					onChange={(e) => setSearchInput(e.target.value)}
					value={searchInput}
					onKeyDown={(e) => checkEnter(e)}
					variant="standard"
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									onClick={() => {
										setSearch(searchInput);
									}}
								>
									<Search />
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
			</FlexBetween>
		</GridToolbarContainer>
	);
};

export default DataGridCustomToolbar;
