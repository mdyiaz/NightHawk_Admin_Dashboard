import { apiSlice } from '@/store/api/apiSlice';

export const featureApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getFeatures: builder.query({
			query: () => 'feature',
			providesTags: ['feature'],
		}),

		getFeaturesByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`feature/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
			providesTags: ['feature'],
		}),

		getFeatureById: builder.query({
			query: (id) => `feature/${id}`,
			providesTags: ['feature'],
		}),

		createFeature: builder.mutation({
			query: (data) => ({
				url: 'feature',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['feature'],
		}),

		updateFeature: builder.mutation({
			query: ({ id, data }) => ({
				url: `feature/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['feature'],
		}),

		
		updateFeatureStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `feature/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['feature'],
		}),

		deleteFeature: builder.mutation({
			query: (id) => ({
				url: `feature/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['feature'],
		}),
	}),
});

export const {
	useGetFeaturesQuery,
	useGetFeaturesByPaginationQuery,
	useGetFeatureByIdQuery,
	useCreateFeatureMutation,
	useUpdateFeatureMutation,
	useUpdateFeatureStatusMutation,
	useDeleteFeatureMutation,
} = featureApi;
