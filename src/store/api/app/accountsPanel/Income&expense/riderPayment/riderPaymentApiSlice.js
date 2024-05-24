import { apiSlice } from '@/store/api/apiSlice';

export const riderPaymentApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getRiderPayments: builder.query({
			query: () => 'rider-payment',
			providesTags: ['RiderPayment'],
		}),

		getRiderPaymentsByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`rider-payment?page=${page}&limit=${limit}&order=${order}&search=${search}`,
			providesTags: ['RiderPayment'],
		}),

		getRiderPaymentsById: builder.query({
			query: (id) => `rider-payment/${id}`,
			providesTags: ['RiderPayment'],
		}),

		createRiderPayments: builder.mutation({
			query: (data) => ({
				url: 'rider-payment',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['RiderPayment'],
		}),

		updateRiderPayments: builder.mutation({
			query: ({ id, data }) => ({
				url: `rider-payment/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['RiderPayment'],
		}),

		updateRiderPaymentsStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `rider-payment/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['RiderPayment'],
		}),

		deleteRiderPayments: builder.mutation({
			query: (id) => ({
				url: `rider-payment/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['RiderPayment'],
		}),
	}),
});

export const {
	useGetRiderPaymentsQuery,
	useGetRiderPaymentsByPaginationQuery,
	useGetRiderPaymentsByIdQuery,
	useCreateRiderPaymentsMutation,
	useUpdateRiderPaymentsMutation,
	useUpdateRiderPaymentsStatusMutation,
	useDeleteRiderPaymentsMutation,
} = riderPaymentApi;
