import { apiSlice } from '@/store/api/apiSlice';

export const assetsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAssets: builder.query({
            query: () => 'assets',
            providesTags: ['assets'],
        }),

        getAssetsByPagination: builder.query({
            query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
                `assets/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
            providesTags: ['assets'],
        }),

        getAssetsById: builder.query({
            query: (id) => `assets/${id}`,
            providesTags: ['assets'],
        }),

        createAssets: builder.mutation({
            query: (data) => ({
                url: 'assets',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['assets'],
        }),

        updateAssets: builder.mutation({
            query: ({ id, data }) => ({
                url: `assets/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['assets'],
        }),



        deleteAssets: builder.mutation({
            query: (id) => ({
                url: `assets/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['assets'],
        }),
    }),
});

export const {
    useCreateAssetsMutation,
    useDeleteAssetsMutation,
    useGetAssetsByPaginationQuery,
    useGetAssetsQuery,
    useGetAssetsByIdQuery,
    useUpdateAssetsMutation

} = assetsApiSlice;
