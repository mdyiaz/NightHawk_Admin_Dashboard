import { apiSlice } from "@/store/api/apiSlice";

export const branchApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBranchUsers: builder.query({
            query: () => '/branche-user',
            providesTags: ['branchUser'],
        }),

        getBranchUserByPagionationAndSearches: builder.query({
            query: ( page = 1, limit = 10, order = 'desc', search = '' ) =>
                `branche-user/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
                providesTags: ['branchUser'],
        }),

        getBranchUserById: builder.query({
            query: (id) => `/branche-user/${id}`,
            providesTags: ['branchUser'],
        }),


        createBranchUser: builder.mutation({
            query: (data) => ({
                url: '/branche-user',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['branchUser'],
        }),


        updateBranchUser: builder.mutation({
            query: ({id, data}) => ({
                url: `/branche-user/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['branchUser'],
        }),

        updateBranchUserStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `branche-user/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['branchUser'],
		}),

        deleteBranchUser: builder.mutation({
            query: (id) => ({
                url: `/branche-user/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['branchUser'],
        })



    }),
});
export const {
    useGetBranchUsersQuery,
    useGetBranchUserByPagionationAndSearchesQuery,
    useGetBranchUserByIdQuery,
    useCreateBranchUserMutation,
    useUpdateBranchUserMutation,
    useDeleteBranchUserMutation,
    useUpdateBranchUserStatusMutation

} = branchApi;