import { apiSlice } from '@/store/api/apiSlice';

export const deliveryServiceApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getDeliveryServices: builder.query({
			query: () => 'delivery-service',
			providesTags: ['DeliveryService'],
		}),

		getDeliveryServicesByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`delivery-service/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
			providesTags: ['deliveryService'],
		}),

		getDeliveryServiceById: builder.query({
			query: (id) => `delivery-service/${id}`,
			providesTags: ['deliveryService'],
		}),

		createDeliveryService: builder.mutation({
			query: (data) => ({
				url: 'delivery-service',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['deliveryService'],
		}),

		updateDeliveryService: builder.mutation({
			query: ({ id, data }) => ({
				url: `delivery-service/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['deliveryService'],
		}),
		
		
		updateDeliveryServiceStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `delivery-service/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['deliveryService'],
		}),

		deleteDeliveryService: builder.mutation({
			query: (id) => ({
				url: `delivery-service/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['deliveryService'],
		}),
	}),
});

export const {
	useGetDeliveryServicesQuery,
	useGetDeliveryServicesByPaginationQuery,
	useGetDeliveryServiceByIdQuery,
	useCreateDeliveryServiceMutation,
	useUpdateDeliveryServiceMutation,
	useUpdateDeliveryServiceStatusMutation,
	useDeleteDeliveryServiceMutation,
} = deliveryServiceApi;
