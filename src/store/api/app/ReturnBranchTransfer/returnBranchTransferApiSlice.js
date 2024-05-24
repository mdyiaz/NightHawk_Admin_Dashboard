
import { apiSlice } from "@/store/api/apiSlice";

export const returnBranchTransferApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        createGenerateReturnBranchTransfer: builder.mutation({
            query: (data) => ({
                url: '/return-branch-transfer',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['returnBranchTransfer'],
        }),


        getAllReturnBranchTransferListByPagination: builder.query({
            query: ({ page = 1, limit = 10, order = 'desc', search = '', from_branch_id = '', to_branch_id = '' }) => `/return-branch-transfer/pages?page=${page}&limit=${limit}&order=${order}&search=${search}&from_branch_id=${from_branch_id}&to_branch_id=${to_branch_id}`,
            providesTags: ['returnBranchTransfer'],
        }),


        getSingleReturnBranchTransferById: builder.query({
            query: (id) => `/return-branch-transfer/${id}`,
        }),


        updateReturnBranchTransferList: builder.mutation({
            query: ({ id, data }) => ({
                url: `/return-branch-transfer/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['returnBranchTransfer'],
        }),


        updateReturnTransferStatus: builder.mutation({
            query: ({ id, status }) => ({
                url: `return-branch-transfer/${id}/status?status=${status}`,
                method: 'PUT',
                body: { status },
            }),
            invalidatesTags: ['returnBranchTransfer'],
        }),




    }),
});
export const {
    useCreateGenerateReturnBranchTransferMutation,
    useGetAllReturnBranchTransferListByPaginationQuery,
    useGetSingleReturnBranchTransferByIdQuery,
    useUpdateReturnBranchTransferListMutation,
    useUpdateReturnTransferStatusMutation
} = returnBranchTransferApiSlice;