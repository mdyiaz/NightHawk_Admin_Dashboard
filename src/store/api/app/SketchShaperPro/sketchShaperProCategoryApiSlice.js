import { apiSlice } from '@/store/api/apiSlice';

export const sketchShaperProCategoryApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getSketchShaperProCategories: builder.query({
			query: () => 'sketchshaper-pro-categories',
			providesTags: ['sketchShaperProCategories'],
		}),

		getSketchShaperProCategoriesByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc' }) =>
				`sketchshaper-pro-categories/pages?page=${page}&limit=${limit}&order=${order}`,
			providesTags: ['sketchShaperProCategories'],
		}),

		getSketchShaperProCategoryById: builder.query({
			query: (id) => `sketchshaper-pro-categories/${id}`,
			providesTags: ['sketchShaperProCategories'],
		}),

		createSketchShaperProCategory: builder.mutation({
			query: (data) => ({
				url: 'sketchshaper-pro-categories',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['sketchShaperProCategories'],
		}),

		updateSketchShaperProCategory: builder.mutation({
			query: ({ id, data }) => ({
				url: `sketchshaper-pro-categories/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['sketchShaperProCategories'],
		}),

		deleteSketchShaperProCategory: builder.mutation({
			query: (id) => ({
				url: `sketchshaper-pro-categories/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['sketchShaperProCategories'],
		}),
	}),
});

export const {
	useGetSketchShaperProCategoriesQuery,
	useGetSketchShaperProCategoriesByPaginationQuery,
	useGetSketchShaperProCategoryByIdQuery,
	useCreateSketchShaperProCategoryMutation,
	useUpdateSketchShaperProCategoryMutation,
	useDeleteSketchShaperProCategoryMutation,
} = sketchShaperProCategoryApiSlice;
