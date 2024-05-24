import { apiSlice } from '@/store/api/apiSlice';

export const staffApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getStaffPayment: builder.query({
			query: () => 'staff-payment',
			providesTags: ['StaffPayment'],
		}),

		getStaffPaymentByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`staff-payment/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
			providesTags: ['StaffPayment'],
		}),

		getStaffPaymentById: builder.query({
			query: (id) => `staff-payment/${id}`,
			providesTags: ['StaffPayment'],
		}),

		createStaffPayment: builder.mutation({
			query: (data) => ({
				url: 'staff-payment',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['StaffPayment'],
		}),

		updateStaffPayment: builder.mutation({
			query: ({ id, data }) => ({
				url: `staff-payment/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['StaffPayment'],
		}),

		updateStaffPaymentStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `staff-payment/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['StaffPayment'],
		}),

		deleteStaffPayment: builder.mutation({
			query: (id) => ({
				url: `staff-payment/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['StaffPayment'],
		}),
	}),
});

export const {
	useGetStaffPaymentQuery,
	useGetStaffPaymentByPaginationQuery,
	useGetStaffPaymentByIdQuery,
	useCreateStaffPaymentMutation,
	useUpdateStaffPaymentMutation,
	useUpdateStaffPaymentStatusMutation,
	useDeleteStaffPaymentMutation,
} = staffApi;
