import { apiSlice } from '@/store/api/apiSlice';

export const designationApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getDesignations: builder.query({
			query: () => 'team-member',
			providesTags: ['designation'],
		}),

		getDesignationsByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`designation/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
			providesTags: ['designation'],
		}),

		getDesignationById: builder.query({
			query: (id) => `designation/${id}`,
			providesTags: ['designation'],
		}),

		createDesignation: builder.mutation({
			query: (data) => ({
				url: 'designation',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['designation'],
		}),

		updateDesignation: builder.mutation({
			query: ({ id, data }) => ({
				url: `designation/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['designation'],
		}),

		updateDesignationStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `designation/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['designation'],
		}),

		deleteDesignation: builder.mutation({
			query: (id) => ({
				url: `designation/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['designation'],
		}),
	}),
});

export const {
	useGetSlidersQuery,
	useGetDesignationsByPaginationQuery,
	useGetDesignationByIdQuery,
	useCreateDesignationMutation,
	useUpdateDesignationMutation,
	useUpdateDesignationStatusMutation,
	useDeleteDesignationMutation,
} = designationApi;
