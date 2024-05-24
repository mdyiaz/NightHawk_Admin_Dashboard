import { apiSlice } from "@/store/api/apiSlice";


export const serviceAreaSettingApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getServiceAreaSettings: builder.query({
            query: () => 'service-area-setting',
            providesTags: ['ServiceAreaSetting'],
        }),

        getServiceAreaSettingsByPagination: builder.query({
            query: (page, limit, order, search) =>
                `service-area-setting/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
            providesTags: ['ServiceAreaSetting'],
        }),

        getServiceAreaSettingById: builder.query({
            query: (id) => `service-area-setting/${id}`,
            providesTags: ['ServiceAreaSetting'],
        }),

        createServiceAreaSetting: builder.mutation({
            query: (data) => ({
                url: 'service-area-setting',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['ServiceAreaSetting'],
        }),

        updateServiceAreaSetting: builder.mutation({
			query: ({ id, data }) => ({
				url: `service-area-setting/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['ServiceAreaSetting'],
		}),

        updateServiceAreaSettingStatus: builder.mutation({
            query: ({id, status}) => ({
                url: `service-area-setting/${id}/status?status=${status}`,
                method: 'PUT',
            }),
            invalidatesTags: ['ServiceAreaSetting'],
        }),

        deleteServiceAreaSetting: builder.mutation({
            query: (id) => ({
                url: `service-area-setting/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['ServiceAreaSetting'],
        }),
    })
})

export const {
    useGetServiceAreaSettingsQuery,
    useGetServiceAreaSettingsByPaginationQuery,
    useGetServiceAreaSettingByIdQuery,
    useCreateServiceAreaSettingMutation,
    useUpdateServiceAreaSettingMutation,
    useDeleteServiceAreaSettingMutation,
    useUpdateServiceAreaSettingStatusMutation
} = serviceAreaSettingApi;