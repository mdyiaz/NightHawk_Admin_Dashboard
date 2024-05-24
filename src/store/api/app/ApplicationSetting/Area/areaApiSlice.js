import { apiSlice } from "@/store/api/apiSlice";

export const areaApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getAreas: builder.query({
      query: () => '/area',
      providesTags: ['Area'],
    }),

    getAreasByPagination: builder.query({
      query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
        `/area/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
      providesTags: ['Area'],
    }),

    getAreaById: builder.query({
      query: (id) => `/area/${id}`,
      providesTags: ['Area'],
    }),

    getAreaByDistrictId: builder.query({
      query: (districtId) => `/area/district/${districtId}`,
      providesTags: ['Area'],
    }),

    createArea: builder.mutation({
      query: (data) => ({
        url: '/area',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Area'],
    }),


    updateArea: builder.mutation({
      query: ({ id, data }) => ({
        url: `/area/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Area'],
    }),

    updateAreaStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `area/${id}/status?status=${status}`,
        method: 'PUT',
        body: { status },
      }),
      invalidatesTags: ['Area'],
    }),


    deleteArea: builder.mutation({
      query: (id) => ({
        url: `/area/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Area'],
    })


  }),
});
export const {
  useCreateAreaMutation,
  useDeleteAreaMutation,
  useGetAreaByIdQuery,
  useGetAreasByPaginationQuery,
  useGetAreasQuery,
  useUpdateAreaMutation,
  useUpdateAreaStatusMutation,
  useGetAreaByDistrictIdQuery
} = areaApi;