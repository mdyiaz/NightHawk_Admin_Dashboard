import { apiSlice } from '@/store/api/apiSlice';

export const createParcelApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getWeightPackages: builder.query({
            query: () => 'weight-packages',
            providesTags: ['weight-packages'],
        }),
        getSingleWeightPackages: builder.query({
            query: (id) => `weight-packages/${id}`,
            providesTags: ['weight-packages'],
        }),
        getSingleDistrict: builder.query({
            query: (id) => `district/${id}`,
        }),
        getMerchantServiceAreaCharge: builder.query({
            query: ({ merchantId, serviceAreaId }) =>
                `parcel/service-area-charge/${merchantId}/${serviceAreaId}`,
        }),
        getMerchantServiceAreaCod: builder.query({
            query: ({ merchantId, serviceAreaId }) =>
                `parcel/service-area-cod-charge/${merchantId}/${serviceAreaId}`,
        }),

        createParcel: builder.mutation({
            query: (data) => ({
                url: 'parcel',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Parcel'],
        }),
        parcelBulkImport: builder.mutation({
            query: (data) => ({
                url: 'bulk-parcel',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Parcel'],
        }),
    }),
});

export const {
    useGetWeightPackagesQuery,
    useGetSingleWeightPackagesQuery,
    useGetSingleDistrictQuery,
    useGetMerchantServiceAreaChargeQuery,
    useGetMerchantServiceAreaCodQuery,
    useCreateParcelMutation,
    useParcelBulkImportMutation
} = createParcelApi;
