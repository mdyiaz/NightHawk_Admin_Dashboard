import { apiSlice } from '@/store/api/apiSlice';

export const aboutPointApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAboutPoints: builder.query({
			query: () => 'about-point',
			providesTags: ['AboutPoint'],
		}),

		getAboutPointsByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`about-point/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
			providesTags: ['AboutPoint'],
		}),

		getAboutPointById: builder.query({
			query: (id) => `about-point/${id}`,
			providesTags: ['AboutPoint'],
		}),

		createAboutPoint: builder.mutation({
			query: (data) => ({
				url: 'about-point',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['AboutPoint'],
		}),

		updateAboutPoint: builder.mutation({
			query: ({ id, data }) => ({
				url: `about-point/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['AboutPoint'],
		}),

		deleteAboutPoint: builder.mutation({
			query: (id) => ({
				url: `about-point/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['AboutPoint'],
		}),
	}),
});

export const {
	useGetAboutPointsQuery,
	useGetAboutPointsByPaginationQuery,
	useGetAboutPointByIdQuery,
	useCreateAboutPointMutation,
	useUpdateAboutPointMutation,
	useDeleteAboutPointMutation,
} = aboutPointApi;
