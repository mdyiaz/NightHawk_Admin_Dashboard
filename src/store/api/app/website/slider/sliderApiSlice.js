import { apiSlice } from '@/store/api/apiSlice';

export const sliderApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getSliders: builder.query({
			query: () => 'slider',
			providesTags: ['Slider'],
		}),

		getSlidersByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`slider/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
			providesTags: ['Slider'],
		}),

		getSliderById: builder.query({
			query: (id) => `slider/${id}`,
			providesTags: ['Slider'],
		}),

		createSlider: builder.mutation({
			query: (data) => ({
				url: 'slider',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['Slider'],
		}),

		updateSlider: builder.mutation({
			query: ({ id, data }) => ({
				url: `slider/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['Slider'],
		}),

		updateSliderStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `slider/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['Slider'],
		}),

		deleteSlider: builder.mutation({
			query: (id) => ({
				url: `slider/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Slider'],
		}),
	}),
});

export const {
	useGetSlidersQuery,
	useGetSlidersByPaginationQuery,
	useGetSliderByIdQuery,
	useCreateSliderMutation,
	useUpdateSliderMutation,
	useUpdateSliderStatusMutation,
	useDeleteSliderMutation,
} = sliderApi;
