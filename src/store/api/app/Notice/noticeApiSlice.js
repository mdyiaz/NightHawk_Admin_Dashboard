import { apiSlice } from '@/store/api/apiSlice';

export const sliderApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getNotices: builder.query({
            query: () => 'notice',
            providesTags: ['Notice'],
        }),

        getNoticesByPagination: builder.query({
            query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
                `/notice/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
            providesTags: ['Notice'],
        }),

        getNoticeById: builder.query({
            query: (id) => `notice/${id}`,
            providesTags: ['Notice'],
        }),

        createNotice: builder.mutation({
            query: (data) => ({
                url: 'notice',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Notice'],
        }),

        updateNotice: builder.mutation({
            query: ({ id, data }) => ({
                url: `notice/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Notice'],
        }),

        updateNoticeStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `notice/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['Notice'],
		}),

        deleteNotice: builder.mutation({
            query: (id) => ({
                url: `notice/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Notice'],
        }),
    }),
});

export const {
    useGetNoticesQuery,
    useGetNoticesByPaginationQuery,
    useGetNoticeByIdQuery,
    useCreateNoticeMutation,
    useUpdateNoticeMutation,
    useUpdateNoticeStatusMutation,
    useDeleteNoticeMutation,
} = sliderApi;
