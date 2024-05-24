import { apiSlice } from "@/store/api/apiSlice";

export const merchantApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMerchants: builder.query({
            query: () => '/merchant',
            providesTags: ['merchant'],
        }),

        getTopMerchantsForAdmin: builder.query({
            query: () => '/report/admin/merchant-parcel-count',
            providesTags: ['merchant'],
        }),

        getMostParcelsDeliveredMerchantListForBranch: builder.query({
            query: () => '/report/branch/merchant-parcel-count',
            providesTags: ['merchant'],
        }),

        getCompleteDeliveryMerchantList: builder.query({
            query: () => '/parcel/completed-delivery-merchants',
            providesTags: ['merchant'],
        }),

        

        getMerchantsByPaginationAndSearches: builder.query({
            query: ({ page = 1, limit = 10, order = 'desc', search = '' , status = '', branch_id = '' }) =>
                `/merchant/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}&status=${status}&branch_id=${branch_id}`,
            providesTags: ['merchant'],
        }),

        // /account/merchant/delivery-payment/find/pages?page=1&limit=10&order=desc&search=MPAY-00041
       

        getMerchantById: builder.query({
            query: (id) => `/merchant/${id}`,
            providesTags: ['merchant'],
        }),

        getMerchantsByBranchId: builder.query({
            query: (id) => `/merchant/merchant-branche/${id}`,
            providesTags: ['merchant'],
        }),


        getServiceAreaByMerchantId: builder.query({
            query: (id) => `/merchant/${id}/searvice-area`,
            providesTags: ['merchant'],
        }),


        createMerchant: builder.mutation({
            query: (data) => ({
                url: '/merchant',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['merchant'],
        }),


        updateMerchant: builder.mutation({
            query: ({ id, data }) => ({
                url: `/merchant/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['merchant'],
        }),

        updateMerchantStatus: builder.mutation({
            query: ({ id, status }) => ({
                url: `merchant/${id}/status?status=${status}`,
                method: 'PUT',
                body: { status },
            }),
            invalidatesTags: ['merchant'],
        }),


        deleteMerchant: builder.mutation({
            query: (id) => ({
                url: `/merchant/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['merchant'],
        }),

        getMerchantPaymentDeliveryById: builder.query({
            query: (id) => `/account/merchant/pending-delivery-payment/${id}`,
            providesTags: ['MerchantPaymentDelivery'],
        }),



        createGenerateMerchantDeliveryPayment: builder.mutation({
            query: (data) => ({
                url: '/account/merchant/pending-delivery-payment',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['GenerateBrancDeliveryPayment','MerchantsDeliveryPayment'],
        }),

        updateGenerateMerchantDeliveryPaymentList: builder.mutation({
            query: ({ id, data }) => ({
                url: `/account/merchant/pending-delivery-payment/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['GenerateBrancDeliveryPayment','MerchantsDeliveryPayment'],
        }),



    }),
});
export const {
    useGetMerchantsQuery,
    useGetTopMerchantsForAdminQuery,
    useGetMostParcelsDeliveredMerchantListForBranchQuery,
    useGetCompleteDeliveryMerchantListQuery,
    useGetMerchantsByPaginationAndSearchesQuery,
    useGetMerchantByIdQuery,
    useGetMerchantsByBranchIdQuery,
    useGetServiceAreaByMerchantIdQuery,
    useCreateMerchantMutation,
    useUpdateMerchantMutation,
    useDeleteMerchantMutation,
    useUpdateMerchantStatusMutation,
    useGetMerchantPaymentDeliveryByIdQuery,
    useCreateGenerateMerchantDeliveryPaymentMutation,
    useUpdateGenerateMerchantDeliveryPaymentListMutation




} = merchantApi;