import { apiSlice } from "@/store/api/apiSlice";


export const serviceAreaApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getServiceAreas: builder.query({
            query: () => 'service-area',
            providesTags: ['ServiceArea'],
        }),
        getServiceAreasByPagination: builder.query({
            query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
                `/service-area/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
            providesTags: ['ServiceArea'],
        }),


        getServiceAreaById: builder.query({
            query: (id) => `service-area/${id}`,
            providesTags: ['ServiceArea'],
        }),

        createServiceArea: builder.mutation({
            query: (data) => ({
                url: 'service-area',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['ServiceArea'],
        }),

        // updateServiceArea: builder.mutation({
        //     query: (id) => ({
        //         url: `service-area/${id}`,
        //         method: 'PUT',
        //     }),
        //     invalidatesTags: ['ServiceArea'],
        // }),
        updateServiceArea: builder.mutation({
            query: ({ id, data }) => ({
                url: `/service-area/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['ServiceArea'],
        }),


        updateServiceAreaStatus: builder.mutation({
            query: ({ id, status }) => ({
                url: `service-area/${id}/status?status=${status}`,
                method: 'PUT',
                body: { status },
            }),
            invalidatesTags: ['ServiceArea'],
        }),


        deleteServiceArea: builder.mutation({
            query: (id) => ({
                url: `service-area/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['ServiceArea'],
        }),
    })
})

export const {
    useGetServiceAreasQuery,
    useGetServiceAreasByPaginationQuery,
    useGetServiceAreaByIdQuery,
    useCreateServiceAreaMutation,
    useUpdateServiceAreaMutation,
    useUpdateServiceAreaStatusMutation,
    useDeleteServiceAreaMutation
} = serviceAreaApi;