import { apiSlice } from '@/store/api/apiSlice';

export const riderApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getRiders: builder.query({
			query: () => '/rider',
			providesTags: ['rider'],
		}),

		getRidersByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`/rider/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
			providesTags: ['rider'],
		}),

		getRidersByBranchId: builder.query({
			query: (id) => `/rider/rider-branche/${id}`,
			providesTags: ['rider'],
		}),

		getRiderById: builder.query({
			query: (id) => `/rider/${id}`,
			providesTags: ['rider'],
		}),

		createRider: builder.mutation({
			query: (data) => ({
				url: '/rider',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['rider'],
		}),

		updateRider: builder.mutation({
			query: ({ id, data }) => ({
				url: `/rider/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['rider'],
		}),

		updateRiderStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `rider/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['rider'],
		}),

		deleteRider: builder.mutation({
			query: (id) => ({
				url: `/rider/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['rider'],
		}),

		// ----
		getRidersRunByPagination: builder.query({
			query: ({
				page = 1,
				limit = 10,
				order = 'desc',
				rider_id = '',
				run_type = 1,
			}) =>
				`/rider-run//pages?page=${page}&limit=${limit}&order=${order}&rider_id=${rider_id}&run_type=${run_type}`,
			providesTags: ['rider'],
		}),

		getAllParcelListsPickupParcelListByPagination: builder.query({
			query: ({
				page = 1,
				limit = 10,
				order = 'desc',
				search = '',
				pickup_rider_id = '',
			}) =>
				`/parcel/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}&status=${6}&status=${8}&pickup_rider_id=${pickup_rider_id}`,
			providesTags: ['rider'],
		}),

		getAllParcelListsDeliveryParcelListByPagination: builder.query({
			query: ({
				page = 1,
				limit = 10,
				order = 'desc',
				search = '',
				pickup_rider_id = '',
			}) =>
				`/parcel/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}&status=${17}&status=${19}&pickup_rider_id=${pickup_rider_id}`,
			providesTags: ['rider'],
		}),

		getAllParcelListsDeliveryCompleteParcelListByPagination: builder.query({
			query: ({
				page = 1,
				limit = 10,
				order = 'desc',
				search = '',
				pickup_rider_id = '',
			}) =>
				`/parcel/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}&status=${21}&status=${22}&status=${25}&pickup_rider_id=${pickup_rider_id}&delivery_type=${1}&delivery_type=${2}`,
			providesTags: ['rider'],
		}),

		getRidersReturnParcelListByPagination: builder.query({
			query: ({
				page = 1,
				limit = 10,
				order = 'desc',
				search = '',
				return_rider_id = '',
			}) =>
				`/parcel/rider-run/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}&status=${31}&status=${33}&return_rider_id=${return_rider_id}&run_type=${3}`,
			providesTags: ['rider'],
		}),

		getAllParcelListsCollectionParcelListByPagination: builder.query({
			query: ({
				page = 1,
				limit = 10,
				order = 'desc',
				search = '',
				pickup_rider_id = '',
			}) =>
				`/parcel/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}&status=${21}&status=${25}&pickup_rider_id=${pickup_rider_id}`,
			providesTags: ['rider'],
		}),

		getAllParcelListSaidAmountParcelListByPagination: builder.query({
			query: ({
				page = 1,
				limit = 10,
				order = 'desc',
				search = '',
				pickup_rider_id = '',
			}) =>
				`/parcel/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}&status=${25}&pickup_rider_id=${pickup_rider_id}`,
			providesTags: ['rider'],
		}),

		getRiderRunById: builder.query({
			query: (id) => `/rider-run/${id}`,
			providesTags: ['rider'],
		}),

		getRiderByBranchId: builder.query({
			query: (branchId) => `/rider/rider-branche/${branchId}`,
			providesTags: ['Area'],
		}),
		getRiderPaymentByRiderId: builder.query({
			query: (riderId) => `/rider-payment/salary-and-parcel/${riderId}`,
			providesTags: ['Area'],
		}),

		getAllParcelListsForRiderByPagination: builder.query({
			query: ({
				page = 1,
				limit = 10,
				order = 'desc',
				search = '',
				pickup_rider_id = '',
			}) =>
				`/parcel/rider-run/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}&status=${6}&status=${8}&pickup_rider_id=${pickup_rider_id}&run_type=${1}`,
			providesTags: ['rider'],
		}),

		getAllDeliveryParcelListsForRiderByPagination: builder.query({
			query: ({
				page = 1,
				limit = 10,
				order = 'desc',
				search = '',
				delivery_rider_id = '',
			}) =>
				`/parcel/rider-run/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}&status=${17}&status=${19}&delivery_rider_id=${delivery_rider_id}&run_type=${2}`,
			providesTags: ['rider'],
		}),
	}),
});
export const {
	useCreateRiderMutation,
	useDeleteRiderMutation,
	useGetRiderByIdQuery,
	useGetRidersQuery,
	useGetRidersByPaginationQuery,
	useUpdateRiderMutation,
	useUpdateRiderStatusMutation,
	useGetRidersRunByPaginationQuery,
	useGetRidersByBranchIdQuery,
	useGetAllParcelListsPickupParcelListByPaginationQuery,
	useGetAllParcelListsDeliveryParcelListByPaginationQuery,
	useGetAllParcelListsDeliveryCompleteParcelListByPaginationQuery,
	useGetRidersReturnParcelListByPaginationQuery,
	useGetAllParcelListsCollectionParcelListByPaginationQuery,
	useGetAllParcelListSaidAmountParcelListByPaginationQuery,
	useGetRiderRunByIdQuery,
	useGetRiderByBranchIdQuery,
	useGetAllParcelListsForRiderByPaginationQuery,
	useGetRiderPaymentByRiderIdQuery,
	useGetAllDeliveryParcelListsForRiderByPaginationQuery,
} = riderApi;
