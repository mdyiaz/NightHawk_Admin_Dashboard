import { apiSlice } from "@/store/api/apiSlice";

export const allParcelListApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getAllParcelLists: builder.query({
      query: () => '/parcel',
      providesTags: ['ParcelList'],
    }),

    getAllParcelListsByPagination: builder.query({
      query: ({ page = 1, limit = 10, order = 'desc', search = '', pickup_branch_id = '', delivery_branch_id = '', return_branch_id = '', start_date = '', end_date = '', status = [], delivery_type = [], status_start = '', merchant_id = '', status_end = '', payment_type = [], }) =>
        `/parcel/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}&pickup_branch_id=${pickup_branch_id}&delivery_branch_id=${delivery_branch_id}&return_branch_id=${return_branch_id}&status_start=${status_start}&merchant_id=${merchant_id}&status_end=${status_end}&start_date=${start_date}&end_date=${end_date}&status=${status.join('&status=')}&delivery_type=${delivery_type.join('&delivery_type=')}&payment_type=${payment_type.join('&payment_type=')}`,
      providesTags: ['ParcelList'],
    }),

    getPendingParcelByPagination: builder.query({
      query: ({ page = 1, limit = 10, order = 'desc', search = '', start_date = '', end_date = '' }) =>
        `/parcel/delivery-pending/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}&start_date=${start_date}&end_date=${end_date}`,
      providesTags: ['ParcelList'],
    }),


    getAllParcelListsByMerchantPaymentDeliveryANdPagination: builder.query({
      query: ({ page = 1, limit = 10, order = 'desc', search = '', merchant_id = '' }) =>
        `/parcel/merchant-payment-delivery/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}&merchant_id=${merchant_id}`,
      providesTags: ['ParcelList'],
    }),




    getAllParcelListsForBranchByPagination: builder.query({
      query: ({ page = 1, limit = 10, order = 'desc', search = '', pickup_branch_id = '', delivery_branch_id = '', start_date = '', end_date = '', return_branch_id = '', status = [], delivery_type = [], status_start = '', status_end = '', payment_type = [], }) =>
        `/parcel/all/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}&pickup_branch_id=${pickup_branch_id}&delivery_branch_id=${delivery_branch_id}&return_branch_id=${return_branch_id}&status_start=${status_start}&start_date=${start_date}&end_date=${end_date}&status_end=${status_end}&status=${status.join('&status=')}&delivery_type=${delivery_type.join('&delivery_type=')}&payment_type=${payment_type.join('&payment_type=')}`,
      providesTags: ['ParcelList'],
    }),




    getAllReturnParcelPendingListsByPagination: builder.query({
      query: ({ page = 1, limit = 10, order = 'desc', search = '', status = [], delivery_type = [], }) =>
        `/parcel/retun-branch-transfer/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}&status=${status.join('&status=')}&delivery_type=${delivery_type.join('&delivery_type=')}`,
      providesTags: ['ParcelList'],
    }),

    getAllDeliveryParcelPendingListsByPagination: builder.query({
      query: ({ page = 1, limit = 10, order = 'desc', search = '', delivery_branch_id = '', status = [], delivery_type = '', }) =>
        `/parcel/status/25/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}&delivery_branch_id=${delivery_branch_id}&status=${status.join('&status=')}&delivery_type=${delivery_type}`,
      providesTags: ['ParcelList'],
    }),



    getSingleParcelById: builder.query({
      query: (id) => `/parcel/${id}`,
      providesTags: ['ParcelList'],
    }),

    createAllParcelList: builder.mutation({
      query: (data) => ({
        url: '/parcel',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['ParcelList'],
    }),


    updateAllParcelList: builder.mutation({
      query: ({ id, data }) => ({
        url: `/parcel/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['ParcelList'],
    }),


    deleteParcel: builder.mutation({
      query: (id) => ({
        url: `/parcel/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['ParcelList'],
    }),

    getAllParcelListsPrintByPagination: builder.query({
      query: ({ order = 'desc', search = '', pickup_branch_id = '', delivery_branch_id = '', return_branch_id = '', start_date = '', end_date = '', status = [], delivery_type = [], status_start = '', merchant_id = '', status_end = '', payment_type = [], }) =>
        `/parcel/find/pages?order=${order}&search=${search}&pickup_branch_id=${pickup_branch_id}&delivery_branch_id=${delivery_branch_id}&return_branch_id=${return_branch_id}&status_start=${status_start}&merchant_id=${merchant_id}&status_end=${status_end}&start_date=${start_date}&end_date=${end_date}&status=${status.join('&status=')}&delivery_type=${delivery_type.join('&delivery_type=')}&payment_type=${payment_type.join('&payment_type=')}`,
      providesTags: ['ParcelList'],
    }),




  }),
});
export const {
  useCreateAllParcelListMutation,
  useGetAllParcelListsByPaginationQuery,
  useGetPendingParcelByPaginationQuery,
  useGetAllParcelListsForBranchByPaginationQuery,
  useGetAllParcelListsByMerchantPaymentDeliveryANdPaginationQuery,
  useGetAllParcelListsQuery,
  useUpdateAllParcelListMutation,
  useGetSingleParcelByIdQuery,
  useDeleteParcelMutation,
  useGetAllDeliveryParcelPendingListsByPaginationQuery,
  useGetAllReturnParcelPendingListsByPaginationQuery,
  useGetAllParcelListsPrintByPaginationQuery



} = allParcelListApi;