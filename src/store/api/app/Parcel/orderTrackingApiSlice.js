import { apiSlice } from '@/store/api/apiSlice';

export const orderTrackingApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

         getOrderTrackingByParcelInvoiceIdAndMerchantOrderId : builder.query({
            query: ({parcelInvoiceId, merchantOrderId}) => `parcel/find/pages?parcel_invoice=${parcelInvoiceId}&merchant_order_id=${merchantOrderId}`
         }),


         getParcelLogByParcelId : builder.query({
            query: (parcelId) => `parcel/${parcelId}/logs`
         })

    }),
});

export const {
    useGetOrderTrackingByParcelInvoiceIdAndMerchantOrderIdQuery,
    useGetParcelLogByParcelIdQuery,

} = orderTrackingApi;
