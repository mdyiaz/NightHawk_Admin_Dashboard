import { apiSlice } from '@/store/api/apiSlice';

export const officesApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getOffices: builder.query({
			query: () => 'office',
			providesTags: ['Office'],
		}),

		getOfficesByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`office/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
			providesTags: ['Office'],
		}),

		getOfficesById: builder.query({
			query: (id) => `office/${id}`,
			providesTags: ['Office'],
		}),

		createOffices: builder.mutation({
			query: (data) => ({
				url: 'office',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['Office'],
		}),

		updateOffices: builder.mutation({
			query: ({ id, data }) => ({
				url: `office/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['Office'],
		}),

		updateOfficesStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `office/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['Office'],
		}),

		deleteOffices: builder.mutation({
			query: (id) => ({
				url: `office/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Office'],
		}),
	}),
});

export const {
	useGetOfficesQuery,
	useGetOfficesByPaginationQuery,
	useGetOfficesByIdQuery,
	useCreateOfficesMutation,
	useUpdateOfficesMutation,
	useUpdateOfficesStatusMutation,
	useDeleteOfficesMutation,
} = officesApi;
