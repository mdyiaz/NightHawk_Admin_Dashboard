import { apiSlice } from '@/store/api/apiSlice';

export const blogApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getBlogs: builder.query({
			query: () => 'blog',
			providesTags: ['blog'],
		}),

		getBlogsByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`blog/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
			providesTags: ['blog'],
		}),

		getBlogById: builder.query({
			query: (id) => `blog/${id}`,
			providesTags: ['blog'],
		}),

		createBlog: builder.mutation({
			query: (data) => ({
				url: 'blog',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['blog'],
		}),

		updateBlog: builder.mutation({
			query: ({ id, data }) => ({
				url: `blog/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['blog'],
		}),

		updateBlogStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `blog/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['blog'],
		}),

		deleteBlog: builder.mutation({
			query: (id) => ({
				url: `blog/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['blog'],
		}),
	}),
});

export const {
	useGetBlogsQuery,
	useGetBlogsByPaginationQuery,
	useGetBlogByIdQuery,
	useCreateBlogMutation,
	useUpdateBlogMutation,
	useUpdateBlogStatusMutation,
	useDeleteBlogMutation,
} = blogApi;
