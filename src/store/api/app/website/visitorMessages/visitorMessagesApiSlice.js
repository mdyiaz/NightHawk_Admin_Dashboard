import { apiSlice } from '@/store/api/apiSlice';

export const visitorMessagesApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getVisitorMessagess: builder.query({
			query: () => 'visitor-message',
			providesTags: ['visitorMessage'],
		}),

		getVisitorMessagessByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`visitor-message/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
			providesTags: ['visitorMessage'],
		}),

		getVisitorMessagessById: builder.query({
			query: (id) => `visitor-message/${id}`,
			providesTags: ['visitorMessage'],
		}),

		createVisitorMessagess: builder.mutation({
			query: (data) => ({
				url: 'visitor-message',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['visitorMessage'],
		}),

		updateVisitorMessagess: builder.mutation({
			query: (id, data) => ({
				url: `visitor-message/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['visitorMessage'],
		}),

		updateVisitorMessagessStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `visitor-message/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['visitorMessage'],
		}),

		deleteVisitorMessagess: builder.mutation({
			query: (id) => ({
				url: `visitor-message/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['visitorMessage'],
		}),
	}),
});

export const {
	useGetVisitorMessagessQuery,
	useGetVisitorMessagessByPaginationQuery,
	useGetVisitorMessagessByIdQuery,
	useCreateVisitorMessagessMutation,
	useUpdateVisitorMessagessMutation,
	useUpdateVisitorMessagessStatusMutation,
	useDeleteVisitorMessagessMutation,
} = visitorMessagesApi;
