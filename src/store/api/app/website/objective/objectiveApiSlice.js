import { apiSlice } from '@/store/api/apiSlice';

export const objectiveApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getObjectives: builder.query({
			query: () => 'objective',
			providesTags: ['objective'],
		}),

		getObjectivesByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`objective/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
			providesTags: ['objective'],
		}),

		getObjectiveById: builder.query({
			query: (id) => `objective/${id}`,
			providesTags: ['objective'],
		}),

		createObjective: builder.mutation({
			query: (data) => ({
				url: 'objective',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['objective'],
		}),

		updateObjective: builder.mutation({
			query: ({ id, data }) => ({
				url: `objective/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['objective'],
		}),
		updateObjectiveStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `objective/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['objective'],
		}),

		deleteObjective: builder.mutation({
			query: (id) => ({
				url: `objective/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['objective'],
		}),
	}),
});

export const {
	useGetObjectivesQuery,
	useGetObjectivesByPaginationQuery,
	useGetObjectiveByIdQuery,
	useCreateObjectiveMutation,
	useUpdateObjectiveMutation,
	useUpdateObjectiveStatusMutation,
	useDeleteObjectiveMutation,
} = objectiveApi;
