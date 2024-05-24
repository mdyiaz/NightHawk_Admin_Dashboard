import { apiSlice } from '@/store/api/apiSlice';

export const customerFeedbackApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getCustomerFeedbacks: builder.query({
			query: () => 'customer-feedback',
			providesTags: ['customerFeedback'],
		}),

		getCustomerFeedbacksByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`customer-feedback/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
				providesTags: ['customerFeedback'],
			}),

		getCustomerFeedbackById: builder.query({
			query: (id) => `customer-feedback/${id}`,
			providesTags: ['customerFeedback'],
		}),

		createCustomerFeedback: builder.mutation({
			query: (data) => ({
				url: 'customer-feedback',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['customerFeedback'],
		}),


		updateCustomerFeedback: builder.mutation({
			query: ({ id, data }) => ({
				url: `customer-feedback/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['customerFeedback'],
		}),

		updateCustomerFeedbackStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `customer-feedback/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['customerFeedback'],
		}),


		deleteCustomerFeedback: builder.mutation({
			query: (id) => ({
				url: `customer-feedback/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['customerFeedback'],
		}),
	}),
});

export const {
	useGetCustomerFeedbacksQuery,
	useGetCustomerFeedbacksByPaginationQuery,
	useGetCustomerFeedbackByIdQuery,
	useCreateCustomerFeedbackMutation,
	useUpdateCustomerFeedbackMutation,
	useUpdateCustomerFeedbackStatusMutation,
	useDeleteCustomerFeedbackMutation,
} = customerFeedbackApi;
