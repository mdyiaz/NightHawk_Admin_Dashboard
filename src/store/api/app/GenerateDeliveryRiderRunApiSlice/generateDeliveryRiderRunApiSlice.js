import { apiSlice } from '@/store/api/apiSlice';

export const generateDeliveryRiderRunApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// getAllParcelLists: builder.query({
		//     query: () => '/parcel',
		//     providesTags: ['ParcelList'],
		// }),

		getRiderRunListsByPagination: builder.query({
			query: ({
				page = 1,
				limit = 10,
				order = 'desc',
				search = '',
				branch_id = '',
				run_type = '',
				status = [],
			}) =>
				`rider-run/pages?page=${page}&limit=${limit}&order=${order}&search=${search}&branch_id=${branch_id}&run_type=${run_type}&status=${status.join(
					'&status='
				)}`,
			providesTags: ['generateDeliveryRiderRun'],
		}),

		getSingleRiderRunById: builder.query({
			query: (id) => `rider-run/${id}`,
			providesTags: ['generateDeliveryRiderRun'],
		}),

		createDeliveryRiderRun: builder.mutation({
			query: (data) => ({
				url: 'rider-run',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['generateDeliveryRiderRun'],
		}),

		updateDeliveryRiderRun: builder.mutation({
			query: ({ id, data }) => ({
				url: `rider-run/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['generateDeliveryRiderRun'],
		}),

		updateRiderRunStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `rider-run/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['generateDeliveryRiderRun'],
		}),

		updateRiderRunReconcilition: builder.mutation({
			query: ({ id, data }) => ({
				url: `rider-run/${id}/reconciliation`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['generateDeliveryRiderRun'],
		}),

		updateRiderRunRiderStatus: builder.mutation({
			query: ({ id, status, run_type }) => ({
				url: `rider-run/${id}/status/rider?status=${status}`,
				method: 'PUT',
				body: { run_type, status },
			}),
			invalidatesTags: ['rider'],
		}),

		updateDeliveryCompleteParcelConfirmForRider: builder.mutation({
			query: ({ id, data }) => ({
				url: `rider-run/${id}/rider/reconciliation`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['rider'],
		}),

		updateDeliveryRiderRunRiderReconciliation: builder.mutation({
			query: ({ id, data }) => ({
				url: `rider-run/${id}/rider/delivery/reconciliation`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['generateDeliveryRiderRun', 'rider'],
		}),


		updateReturnRiderRunRiderReconciliationForRiderPanel: builder.mutation({
			query: ({ id, data }) => ({
				url: `rider-run/${id}/rider/return/reconciliation`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['rider'],
		}),

		// deleteParcel: builder.mutation({
		//     query: (id) => ({
		//         url: `/parcel/${id}`,
		//         method: 'DELETE',
		//     }),
		//     invalidatesTags: ['ParcelList'],
		// }),
	}),
});
export const {
	useCreateDeliveryRiderRunMutation,
	useUpdateDeliveryRiderRunMutation,
	useGetSingleRiderRunByIdQuery,
	useGetRiderRunListsByPaginationQuery,
	useUpdateRiderRunStatusMutation,
	useUpdateRiderRunReconcilitionMutation,
	useUpdateRiderRunRiderStatusMutation,
	useUpdateDeliveryCompleteParcelConfirmForRiderMutation,
	useUpdateDeliveryRiderRunRiderReconciliationMutation,
	useUpdateReturnRiderRunRiderReconciliationForRiderPanelMutation
} = generateDeliveryRiderRunApiSlice;
