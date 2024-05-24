import { apiSlice } from '@/store/api/apiSlice';

export const branchPaymentApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({

		getBranchDeliveryReceivePaymentListByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`account/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
			providesTags: ['BranchDeliveryReceivePayment'],
		}),

		getBranchDeliveryReceivePaymentListById: builder.query({
			query: (id) => `account/${id}`,
			providesTags: ['BranchDeliveryReceivePayment'],
		}),

		getBranchDeliveryPaymentListByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`account/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}&search=${1}&search=${2}&search=${3}`,
			providesTags: ['BranchDeliveryReceivePayment'],
		}),

		updateRejectBranchDeliveryStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `account/reject-branch-delivery-payment/${id}/status`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['BranchDeliveryReceivePayment'],
		}),

		updateAcceptBranchPaymentReconcilition: builder.mutation({
			query: ({ id, data }) => ({
				url: `account/accept-branch-delivery-payment/${id}/status`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['BranchPaymentDeliveryReceive', 'AcceptBranchPaymentReceiveList'],
		}),

		updateRejectBranchPaymentReconcilition: builder.mutation({
			query: ({ id, data }) => ({
				url: `account/reject-branch-delivery-payment/${id}/status`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['RejectBranchPaymentDeliveryReceive'],
		}),

		updateConfirmMerchantPaymentReconcilition: builder.mutation({
			query: ({ id, data }) => ({
				url: `account/merchant/comfirmed-delivery-payment/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['BranchDeliveryReceivePayment', 'MerchantPaymentDeliveryReceiveList'],
		}),




	}),
});

export const {
	useGetBranchDeliveryReceivePaymentListByPaginationQuery,
	useGetBranchDeliveryReceivePaymentListByIdQuery,
	useGetBranchDeliveryPaymentListByPaginationQuery,
	useUpdateRejectBranchDeliveryStatusMutation,
	useUpdateAcceptBranchPaymentReconcilitionMutation,
	useUpdateRejectBranchPaymentReconcilitionMutation,
	useUpdateConfirmMerchantPaymentReconcilitionMutation

} = branchPaymentApi;
