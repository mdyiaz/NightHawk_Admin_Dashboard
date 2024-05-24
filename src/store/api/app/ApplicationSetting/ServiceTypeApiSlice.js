import { apiSlice } from "@/store/api/apiSlice";


export const serviceTypeApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getServiceTypes: builder.query({
            query: () => 'service-type',
            providesTags: ['ServiceType'],
        }),

        getServiceTypesByPagination: builder.query({
            query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
                `service-type/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
            providesTags: ['ServiceType'],
        }),

        getServiceTypeById: builder.query({
            query: (id) => `service-type/${id}`,
            providesTags: ['ServiceType'],
        }),


        getServiceTypeByServiceAreaId: builder.query({
            query: (id) => `service-type/service-area/${id}`,
            providesTags: ['ServiceType'],
        }),

        createServiceType: builder.mutation({
            query: (data) => ({
                url: 'service-type',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['ServiceType'],
        }),

        updateServiceType: builder.mutation({
            query: ({ id, data }) => ({
                url: `/service-type/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['ServiceType'],
        }),

        updateServiceTypeStatus: builder.mutation({
            query: ({ id, status }) => ({
                url: `service-type/${id}/status?status=${status}`,
                method: 'PUT',
                body: { status },
            }),
            invalidatesTags: ['ServiceType'],
        }),



        deleteServiceType: builder.mutation({
            query: (id) => ({
                url: `service-type/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['ServiceType'],
        }),
    })
})

export const {
    useGetServiceTypesQuery,
    useGetServiceTypesByPaginationQuery,
    useGetServiceTypeByIdQuery,
    useGetServiceTypeByServiceAreaIdQuery,
    useCreateServiceTypeMutation,
    useUpdateServiceTypeMutation,
    useUpdateServiceTypeStatusMutation,
    useDeleteServiceTypeMutation
} = serviceTypeApi;