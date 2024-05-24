import { apiSlice } from '@/store/api/apiSlice';

export const pageContentApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getPageContents: builder.query({
			query: () => 'page-content',
			providesTags: ['pageContent'],
		}),

		getPageContentsByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`page-content/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
			providesTags: ['pageContent'],
		}),

		getPageContentById: builder.query({
			query: (id) => `page-content/${id}`,
			providesTags: ['pageContent'],
		}),

		createPageContent: builder.mutation({
			query: (data) => ({
				url: 'page-content',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['pageContent'],
		}),

		updatePageContent: builder.mutation({
			query: ({ id, data }) => ({
				url: `page-content/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['pageContent'],
		}),

		updatePageContentStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `page-content/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['pageContent'],
		}),

		deletePageContent: builder.mutation({
			query: (id) => ({
				url: `page-content/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['pageContent'],
		}),
	}),
});

export const {
	useGetPageContentsQuery,
	useGetPageContentsByPaginationQuery,
	useGetPageContentByIdQuery,
	useCreatePageContentMutation,
	useUpdatePageContentMutation,
	useUpdatePageContentStatusMutation,
	useDeletePageContentMutation,
} = pageContentApi;
