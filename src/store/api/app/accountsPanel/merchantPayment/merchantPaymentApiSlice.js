import { apiSlice } from '@/store/api/apiSlice';

export const merchantPaymentApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({


		getMerchantsDeliveryPaymentByPaginationAndSearches: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '', }) =>
				`/account/merchant/delivery-payment/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
			providesTags: ['MerchantsDeliveryPayment',],
		}),

		updateAcceptBranchPaymentReconcilition: builder.mutation({
			query: ({ id, data }) => ({
				url: `account/accept-branch-delivery-payment/${id}/status`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['MerchantsDeliveryPayment'],
		}),

		updateRejectBranchPaymentReconcilition: builder.mutation({
			query: ({ id, data }) => ({
				url: `account/reject-branch-delivery-payment/${id}/status`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['MerchantsDeliveryPayment'],
		}),

		updateConfirmMerchantPaymentReconcilition: builder.mutation({
			query: ({ id, data }) => ({
				url: `account/merchant/comfirmed-delivery-payment/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['ConfirmMerchantsDeliveryPayment', 'MerchantsDeliveryPayment'],
		}),

		deleteMerchantDeliveryPayment: builder.mutation({
			query: ({ id }) => ({
				url: `/account/merchant/pending-delivery-payment/${id}`,
				method: 'DELETE',

			}),
			invalidatesTags: ['MerchantsDeliveryPayment'],
		}),

		getMerchantPaymentDeliveryById: builder.query({
			query: (id) => `/account/merchant/pending-delivery-payment/${id}`,
			providesTags: ['MerchantsDeliveryPayment'],
		}),




	}),
});

export const {
	useGetMerchantsDeliveryPaymentByPaginationAndSearchesQuery,
	useUpdateAcceptBranchPaymentReconcilitionMutation,
	useUpdateRejectBranchPaymentReconcilitionMutation,
	useUpdateConfirmMerchantPaymentReconcilitionMutation,
	useDeleteMerchantDeliveryPaymentMutation,
	useGetMerchantPaymentDeliveryByIdQuery,



} = merchantPaymentApi;
