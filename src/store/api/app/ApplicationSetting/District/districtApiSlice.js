import { apiSlice } from "@/store/api/apiSlice";

export const branchApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getDistricts: builder.query({
            query: () => '/district',
            providesTags: ['District'],
        }),

        getDistrictsByPagination: builder.query({
            query: ({ page = 1, limit = 100, order = 'desc', search = '' }) =>
                `/district/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
            providesTags: ['District'],
        }),

        getDistrictById: builder.query({
            query: (id) => `/district/${id}`,
            providesTags: ['District'],
        }),

        createDistrict: builder.mutation({
            query: (data) => ({
                url: '/district',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['District'],
        }),


        updateDistrict: builder.mutation({
            query: ({ id, data }) => ({
                url: `/district/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['District'],
        }),

        updateDistrictStatus: builder.mutation({
            query: ({ id, status }) => ({
                url: `district/${id}/status?status=${status}`,
                method: 'PUT',
                body: { status },
            }),
            invalidatesTags: ['District'],
        }),

        deleteDistrict: builder.mutation({
            query: (id) => ({
                url: `district/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['District'],
        })

    }),
});

export const {
    useCreateDistrictMutation,
    useDeleteDistrictMutation,
    useGetDistrictByIdQuery,
    useGetDistrictsByPaginationQuery,
    useGetDistrictsQuery,
    useUpdateDistrictStatusMutation,
    useUpdateDistrictMutation,

} = branchApi;