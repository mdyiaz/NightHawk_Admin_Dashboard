import { apiSlice } from "@/store/api/apiSlice";

export const branchApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getBranches: builder.query({
      query: () => '/branche',
      providesTags: ['branch'],
    }),

    getBranchesByPagination: builder.query({
      query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
        `/branche/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
      providesTags: ['branch'],
    }),

    getBranchById: builder.query({
      query: (id) => `/branche/${id}`,
      providesTags: ['branch'],
    }),

    getMerchantByBranchId: builder.query({
      query: (id) => `/merchant/merchant-branche/${id}`,
      providesTags: ['merchant'],
    }),
    getBrachDashboardChartByBranchId: builder.query({
      query: ({branch_id="", duration = "this-month" }) =>
				`/report/branch/parcel?duration=${duration}&branch_id=${branch_id}`,
			providesTags: ['AdminUser'],
    }),
    getRiderByBranchId: builder.query({
      query: (id) => `/rider/rider-branche/${id}`,
      providesTags: ['merchant'],
    }),
    getBranchOverview: builder.query({
      query: () => `/report/branch/overview`,
      providesTags: ['branch'],
    }),
    getBranchUserByBranchId: builder.query({
      query: (id) => `/branche-user/${id}`,
      providesTags: ['merchant'],
    }),

    createBranch: builder.mutation({
      query: (data) => ({
        url: '/branche',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['branch'],
    }),


    updateBranch: builder.mutation({
      query: ({ id, data }) => ({
        url: `/branche/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['branch'],
    }),


    updateBranchStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `branche/${id}/status?status=${status}`,
        method: 'PUT',
        body: { status },
      }),
      invalidatesTags: ['branch'],
    }),


    deleteBranch: builder.mutation({
      query: (id) => ({
        url: `/branche/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['branch'],
    })


  }),
});
export const {
  useGetBranchesQuery,
  useGetBranchesByPaginationQuery,
  useGetBranchByIdQuery,
  useGetMerchantByBranchIdQuery,
  useGetBranchOverviewQuery,
  useGetBrachDashboardChartByBranchIdQuery,
  useGetRiderByBranchIdQuery,
  useGetBranchUserByBranchIdQuery,
  useCreateBranchMutation,
  useUpdateBranchMutation,
  useDeleteBranchMutation,
  useUpdateBranchStatusMutation

} = branchApi;