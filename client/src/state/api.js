import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_BASE_URL,
	}),
	reducerPath: "adminApi",
	tagTypes: [
		"User",
		"Products",
		"Customers",
		"Transactions",
		"Geography",
		"Sales",
		"Admins",
		"Performance",
		"Dashboard",
	],
	endpoints: (build) => ({
		getUser: build.query({
			query: (id) => `general/user/${id}`,
			providesTags: ["User"],
		}),
		getProducts: build.query({
			query: () => `client/products`,
			providesTags: ["Products"],
		}),
		getCustomers: build.query({
			query: () => `client/customers`,
			providesTags: ["Customers"],
		}),
		getTransactions: build.query({
			query: ({ page, pageSize, sort, search }) => ({
				url: `client/transactions`,
				method: "GET",
				params: { page, pageSize, sort, search },
			}),
			providesTags: ["Transactions"],
		}),
		getGeography: build.query({
			query: () => ({
				url: `client/geography`,
				method: "GET",
			}),
			providesTags: ["Geography"],
		}),
		getSales: build.query({
			query: () => ({
				url: `sales/sales`,
				method: "GET",
			}),
			providesTags: ["Sales"],
		}),
		getAdmins: build.query({
			query: () => ({
				url: `management/admins`,
				method: "GET",
			}),
			providesTags: ["Admins"],
		}),
		getUserPerformance: build.query({
			query: (userId) => ({
				url: `management/performance/${userId}`,
				method: "GET",
			}),
			providesTags: ["Performance"],
		}),
		getDashboard: build.query({
			query: () => ({
				url: `general/dashboard`,
				method: "GET",
			}),
			providesTags: ["Dashboard"],
		}),
	}),
});

export const {
	useGetUserQuery,
	useGetProductsQuery,
	useGetCustomersQuery,
	useGetTransactionsQuery,
	useGetGeographyQuery,
	useGetSalesQuery,
	useGetAdminsQuery,
	useGetUserPerformanceQuery,
	useGetDashboardQuery,
} = api;
