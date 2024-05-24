import { apiSlice } from '@/store/api/apiSlice';

export const serviceApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getServices: builder.query({
			query: () => 'service',
			providesTags: ['Service'],
		}),

		getServicesByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`service/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
			providesTags: ['Service'],
		}),

		getServiceById: builder.query({
			query: (id) => `service/${id}`,
			providesTags: ['Service'],
		}),

		createService: builder.mutation({
			query: (data) => ({
				url: 'service',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['Service'],
		}),

		updateService: builder.mutation({
			query: ({id, data}) => ({
				url: `service/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['Service'],
		}),

		deleteService: builder.mutation({
			query: (id) => ({
				url: `service/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Service'],
		}),
	}),
});

export const {
	useGetServicesQuery,
	useGetServicesByPaginationQuery,
	useGetServiceByIdQuery,
	useCreateServiceMutation,
	useUpdateServiceMutation,
	useDeleteServiceMutation,
} = serviceApi;
