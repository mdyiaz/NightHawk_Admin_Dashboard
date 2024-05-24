import { apiSlice } from '@/store/api/apiSlice';

export const expenseApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getExpenses: builder.query({
			query: () => 'expense',
			providesTags: ['Expense'],
		}),

		getExpensesByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`expense/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
			providesTags: ['Expense'],
		}),

		getExpensesById: builder.query({
			query: (id) => `expense/${id}`,
			providesTags: ['Expense'],
		}),

		createExpenses: builder.mutation({
			query: (data) => ({
				url: 'expense',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['Expense'],
		}),

		updateExpenses: builder.mutation({
			query: ({ id, data }) => ({
				url: `expense/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['Expense'],
		}),

		// updateExpensesStatus: builder.mutation({
		// 	query: ({ id, status }) => ({
		// 		// url: `expense/${id}/status?status=${status}`,
		// 		url: `expense/${id}/status?status=${status}`,
		// 		method: 'PUT',
		// 		body: { status },
		// 	}),
		// 	invalidatesTags: ['Expense'],
		// }),


		updateExpenseStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `expense/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['Expense'],
		}),


		deleteExpenses: builder.mutation({
			query: (id) => ({
				url: `expense/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Expense'],
		}),
	}),
});

export const {
	useGetExpensesQuery,
	useGetExpensesByPaginationQuery,
	useGetExpensesByIdQuery,
	useCreateExpensesMutation,
	useUpdateExpensesMutation,
	useUpdateExpensesStatusMutation,
	useDeleteExpensesMutation,
	useUpdateExpenseStatusMutation
} = expenseApi;
