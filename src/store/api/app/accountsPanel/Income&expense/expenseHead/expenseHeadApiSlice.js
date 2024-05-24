import { apiSlice } from '@/store/api/apiSlice';

export const expenseHeadApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getExpenseHeads: builder.query({
			query: () => 'expense-head',
			providesTags: ['ExpenseHead'],
		}),

		getExpenseHeadsByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`expense-head/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
			providesTags: ['ExpenseHead'],
		}),

		getExpenseHeadsById: builder.query({
			query: (id) => `expense-head/${id}`,
			providesTags: ['ExpenseHead'],
		}),

		createExpenseHeads: builder.mutation({
			query: (data) => ({
				url: 'expense-head',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['ExpenseHead'],
		}),

		updateExpenseHeads: builder.mutation({
			query: ({ id, data }) => ({
				url: `expense-head/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['ExpenseHead'],
		}),

		updateExpenseHeadsStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `expense-head/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['ExpenseHead'],
		}),

		deleteExpenseHeads: builder.mutation({
			query: (id) => ({
				url: `expense-head/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['ExpenseHead'],
		}),
	}),
});

export const {
	useGetExpenseHeadsQuery,
	useGetExpenseHeadsByPaginationQuery,
	useGetExpenseHeadsByIdQuery,
	useCreateExpenseHeadsMutation,
	useUpdateExpenseHeadsMutation,
	useUpdateExpenseHeadsStatusMutation,
	useDeleteExpenseHeadsMutation,
} = expenseHeadApi;
