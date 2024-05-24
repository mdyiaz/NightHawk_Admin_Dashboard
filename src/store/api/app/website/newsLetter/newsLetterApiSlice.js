import { apiSlice } from '@/store/api/apiSlice';

export const newsLetterApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getNewsLetters: builder.query({
			query: () => 'newsLetter',
			providesTags: ['newsletter'],
		}),

		getNewsLettersByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`newsLetter/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
			providesTags: ['newsletter'],
		}),

		getNewsLetterById: builder.query({
			query: (id) => `newsLetter/${id}`,
			providesTags: ['newsletter'],
		}),

		createNewsLetter: builder.mutation({
			query: (data) => ({
				url: 'newsLetter',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['newsletter'],
		}),

		updateNewsLetter: builder.mutation({
			query: (id, data) => ({
				url: `newsLetter/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['newsletter'],
		}),

		updateNewsLetterStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `newsLetter/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['newsletter'],
		}),

		deleteNewsLetter: builder.mutation({
			query: (id) => ({
				url: `newsLetter/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['newsletter'],
		}),
	}),
});

export const {
	useGetNewsLettersQuery,
	useGetNewsLettersByPaginationQuery,
	useGetNewsLetterByIdQuery,
	useCreateNewsLetterMutation,
	useUpdateNewsLetterMutation,
	useUpdateNewsLetterStatusMutation,
	useDeleteNewsLetterMutation,
} = newsLetterApi;
