import { apiSlice } from '@/store/api/apiSlice';

export const parcelStepApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getParcelSteps: builder.query({
			query: () => 'parcel-step',
			providesTags: ['parcelStep'],
		}),

		getParcelStepsByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`parcel-step/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
			providesTags: ['parcelStep'],
		}),

		getParcelStepById: builder.query({
			query: (id) => `parcel-step/${id}`,
			providesTags: ['parcelStep'],
		}),

		createParcelStep: builder.mutation({
			query: (data) => ({
				url: 'parcel-step',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['parcelStep'],
		}),

		updateParcelStep: builder.mutation({
			query: ({ id, data }) => ({
				url: `parcel-step/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['parcelStep'],
		}),

		updateParcelStepStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `parcel-step/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['parcelStep'],
		}),


		deleteParcelStep: builder.mutation({
			query: (id) => ({
				url: `parcel-step/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['parcelStep'],
		}),
	}),
});

export const {
	useGetParcelStepsQuery,
	useGetParcelStepsByPaginationQuery,
	useGetParcelStepByIdQuery,
	useCreateParcelStepMutation,
	useUpdateParcelStepMutation,
	useUpdateParcelStepStatusMutation,
	useDeleteParcelStepMutation,
} = parcelStepApi;
