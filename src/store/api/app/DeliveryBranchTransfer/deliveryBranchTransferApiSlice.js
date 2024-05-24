
import { apiSlice } from "@/store/api/apiSlice";

export const deliveryBranchTransferApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        createGenerateDeliveryBranchTransfer: builder.mutation({
            query: (data) => ({
                url: '/delivery-branch-transfer',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['ParcelList'],
        }),


        getAllDeliveryBranchTransferListByPagination: builder.query({
            query: ({ page = 1, limit = 10, order = 'desc', search = '', from_branch_id= '', to_branch_id= '',   }) => `/delivery-branch-transfer/pages?page=${page}&limit=${limit}&order=${order}&search=${search}&from_branch_id=${from_branch_id}&to_branch_id=${to_branch_id}`,
            providesTags: ['deliveryBranchTransfer'],
        }),

        getSingleDeliveryBranchTransferById: builder.query({
            query: (id) => `/delivery-branch-transfer/${id}`,
        }),


        updateDeliveryBranchTransferList: builder.mutation({
            query: ({ id, data }) => ({
                url: `/delivery-branch-transfer/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['deliveryBranchTransfer'],
        }),


        updateDeliveryTransferStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `delivery-branch-transfer/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['deliveryBranchTransfer'],
		}),


        updateReceivedBranchTransferStatusReconcilition: builder.mutation({
            query: ({ id, data }) => ({
                url: `/delivery-branch-transfer/${id}/status/reconciliation`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['deliveryBranchTransfer'],
        }),



    }),
});
export const {
    useCreateGenerateDeliveryBranchTransferMutation,
    useGetAllDeliveryBranchTransferListByPaginationQuery,
    useGetSingleDeliveryBranchTransferByIdQuery,
    useUpdateDeliveryBranchTransferListMutation,
    useUpdateDeliveryTransferStatusMutation,
    useUpdateReceivedBranchTransferStatusReconcilitionMutation

} = deliveryBranchTransferApiSlice;