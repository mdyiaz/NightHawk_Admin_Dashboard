import { apiSlice } from "@/store/api/apiSlice";

export const merchantParcelsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({


        getSingleParcelById: builder.query({
            query: (id) => `/parcel/${id}`,

        }),


        getDeleveriesByPaginationAndStatus: builder.query({
            query: ({ page = 1, limit = 50, order = 'desc', search = '', status = [], status_start = '', status_end = '', delivery_type = [] }) =>
                `/parcel/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}&status=${status.join('&status=')}&status_start=${status_start}&status_end=${status_end}&delivery_type=${delivery_type.join('&delivery_type=')}`,
            providesTags: ['parcelList'],
        }),

        updateParcelStatus: builder.mutation({
            query: ({ id, status }) => ({
                url: `parcel/${id}/status?status=${status}`,
                method: 'PUT',
                body: { status },
            }),
            invalidatesTags: ['parcelList'],
        }),

        updateParcel: builder.mutation({
			query: ({ id, data }) => ({
				url: `parcel/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['parcelList'],
		}),



    }),
});
export const {
    useGetDeleveriesByPaginationAndStatusQuery,
    useUpdateParcelStatusMutation,
    useGetSingleParcelByIdQuery,
    useUpdateParcelMutation

} = merchantParcelsApi;