import { apiSlice } from "@/store/api/apiSlice";


export const serviceAreaWeightPackageApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // getWeightTypes: builder.query({
        //     query: () => 'weight-packages',
        //     providesTags: ['WeightType'],
        // }),

        getServiceAreaWeightPackageByPagination: builder.query({
            query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
                `service-area-weight-package?page=${page}&limit=${limit}&order=${order}&search=${search}`,
            providesTags: ['serviceAreaWeightPackage'],
        }),

        getServiceAreaWeightPackageById: builder.query({
            query: (id) => `service-area-setting/${id}`,
            providesTags: ['serviceAreaWeightPackage'],
        }),

        createServiceAreaWeightPackage: builder.mutation({
            query: (data) => ({
                url: 'service-area-weight-package',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['serviceAreaWeightPackage'],
        }),

        updateServiceAreaWeightPackage: builder.mutation({
			query: ({ id, data }) => ({
				url: `service-area-weight-package/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['serviceAreaWeightPackage'],
		}),

        updateServiceAreaWeightPackageStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `service-area-setting/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['serviceAreaWeightPackage'],
		}),

        deleteServiceAreaWeightPackage: builder.mutation({
            query: (id) => ({
                url: `service-area-setting/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['serviceAreaWeightPackage'],
        }),
    })
})

export const { 
    useGetServiceAreaWeightPackageByPaginationQuery,
    useGetServiceAreaWeightPackageByIdQuery,
    useUpdateServiceAreaWeightPackageStatusMutation,
    useCreateServiceAreaWeightPackageMutation,
    useUpdateServiceAreaWeightPackageMutation,
    useDeleteServiceAreaWeightPackageMutation,
    
    

} = serviceAreaWeightPackageApiSlice;