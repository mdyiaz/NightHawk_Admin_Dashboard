import { apiSlice } from '@/store/api/apiSlice';

export const frequentlyAskQuestionApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getFrequentlyAskQuestions: builder.query({
			query: () => 'faq',
			providesTags: ['frequentlyAskQuestion'],
		}),

		getFrequentlyAskQuestionsByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`faq/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
				providesTags: ['frequentlyAskQuestion'],
		}),

		getFrequentlyAskQuestionById: builder.query({
			query: (id) => `faq/${id}`,
			providesTags: ['frequentlyAskQuestion'],
		}),

		createFrequentlyAskQuestion: builder.mutation({
			query: (data) => ({
				url: 'faq',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['frequentlyAskQuestion'],
		}),

		updateFrequentlyAskQuestion: builder.mutation({
			query: ({ id, data }) => ({
				url: `faq/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['frequentlyAskQuestion'],
		}),

		updateFrequentlyAskQuestionStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `faq/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['frequentlyAskQuestion'],
		}),


		deleteFrequentlyAskQuestion: builder.mutation({
			query: (id) => ({
				url: `faq/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['frequentlyAskQuestion'],
		}),
	}),
});

export const {
	useGetFrequentlyAskQuestionsQuery,
	useGetFrequentlyAskQuestionsByPaginationQuery,
	useGetFrequentlyAskQuestionByIdQuery,
	useCreateFrequentlyAskQuestionMutation,
	useUpdateFrequentlyAskQuestionMutation,
	useUpdateFrequentlyAskQuestionStatusMutation,
	useDeleteFrequentlyAskQuestionMutation,
} = frequentlyAskQuestionApi;
