import { apiSlice } from '@/store/api/apiSlice';

export const staffApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getStaff: builder.query({
			query: () => 'staff',
			providesTags: ['Staff'],
		}),

		getStaffByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`staff/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
			providesTags: ['Staff'],
		}),

		getStaffById: builder.query({
			query: (id) => `staff/${id}`,
			providesTags: ['Staff'],
		}),

		createStaff: builder.mutation({
			query: (data) => ({
				url: 'staff',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['Staff'],
		}),

		updateStaff: builder.mutation({
			query: ({ id, data }) => ({
				url: `staff/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['Staff'],
		}),

		updateStaffStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `staff/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['Staff'],
		}),

		deleteStaff: builder.mutation({
			query: (id) => ({
				url: `staff/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Staff'],
		}),

		getStaffByBranchId: builder.query({
			query: (branchId) => `staff/branch/${branchId}`,
			providesTags: ['Staff'],
		}),
	}),
});

export const {
	useGetStaffQuery,
	useGetStaffByPaginationQuery,
	useGetStaffByIdQuery,
	useCreateStaffMutation,
	useUpdateStaffMutation,
	useUpdateStaffStatusMutation,
	useDeleteStaffMutation,
	useGetStaffByBranchIdQuery,
} = staffApi;
