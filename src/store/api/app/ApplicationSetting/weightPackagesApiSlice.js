import { apiSlice } from "@/store/api/apiSlice";


export const weightTypeApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getWeightTypes: builder.query({
            query: () => 'weight-packages',
            providesTags: ['WeightType'],
        }),

        getWeightPackagesForMerchantAndAddParcelByServiceAreaId: builder.query({
			query: (serviceAreaId) => `weight-packages/service-area/${serviceAreaId}`,
			providesTags: ['WeightType'],
		}),

        getWeightTypesByPagination: builder.query({
            query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
                `weight-packages/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
            providesTags: ['WeightType'],
        }),

        getWeightTypeById: builder.query({
            query: (id) => `weight-packages/${id}`,
            providesTags: ['WeightType'],
        }),

        createWeightType: builder.mutation({
            query: (data) => ({
                url: 'weight-packages',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['WeightType'],
        }),

        updateWeightType: builder.mutation({
            query: (id, status) => ({
                url: `weight-packages/${id}/status?status=${status}`,
                method: 'PUT',
            }),
            invalidatesTags: ['WeightType'],
        }),

        updateWeightTypeStatus: builder.mutation({
            query: ({ id, status }) => ({
                url: `weight-packages/${id}/status?status=${status}`,
                method: 'PUT',
                body: { status },
            }),
            invalidatesTags: ['WeightType'],
        }),

        deleteWeightType: builder.mutation({
            query: (id) => ({
                url: `weight-packages/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['WeightType'],
        }),

        updateWeightType: builder.mutation({
            query: ({ id, data }) => ({
                url: `/weight-packages/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['WeightType'],
        }),

    })
})

export const {
    useGetWeightTypesQuery,
    useGetWeightPackagesForMerchantAndAddParcelByServiceAreaIdQuery,
    useGetWeightTypesByPaginationQuery,
    useGetWeightTypeByIdQuery,
    useUpdateWeightTypeStatusMutation,
    useDeleteWeightTypeMutation,
    useCreateWeightTypeMutation,
    useUpdateWeightTypeMutation
} = weightTypeApi;