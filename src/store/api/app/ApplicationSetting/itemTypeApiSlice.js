import { apiSlice } from "@/store/api/apiSlice";


export const itemTypeApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getItemTypes: builder.query({
            query: () => 'item-type',
            providesTags: ['ItemType'],
        }),

        getItemTypesByPagination: builder.query({
            query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
                `item-type/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
            providesTags: ['ItemType'],
        }),

        getItemTypeById: builder.query({
            query: (id) => `item-type/${id}`,
            providesTags: ['ItemType'],
        }),

        getItemTypeByServiceAreaId: builder.query({
            query: (id) => `item-type/service-area/${id}`,
            providesTags: ['ItemType'],
        }),

        createItemType: builder.mutation({
            query: (data) => ({
                url: 'item-type',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['ItemType'],
        }),

        updateItemType: builder.mutation({
            query: ({ id, data }) => ({
                url: `/item-type/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['ItemType'],
        }),
        updateItemTypeStatus: builder.mutation({
            query: ({ id, status }) => ({
                url: `item-type/${id}/status?status=${status}`,
                method: 'PUT',
                body: { status },
            }),
            invalidatesTags: ['ItemType'],
        }),

        deleteItemType: builder.mutation({
            query: (id) => ({
                url: `item-type/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['ItemType'],
        }),
    })
})

export const {
    useGetItemTypesQuery,
    useGetItemTypesByPaginationQuery,
    useGetItemTypeByIdQuery,
    useGetItemTypeByServiceAreaIdQuery,
    useCreateItemTypeMutation,
    useUpdateItemTypeMutation,
    useUpdateItemTypeStatusMutation,
    useDeleteItemTypeMutation
} = itemTypeApi;