import { apiSlice } from '@/store/api/apiSlice';

export const sketchShaperProFileApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getSketchShaperProFiles: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', categoryId = null }) => {
				let url = `sketchshaper-pro-files/pages?page=${page}&limit=${limit}&order=${order}`;
				if (categoryId) {
					url += `&categoryId=${categoryId}`;
				}
				return url;
			},
			providesTags: ['sketchShaperProFiles'],
		}),

		getSketchShaperProFileById: builder.query({
			query: (id) => `sketchshaper-pro-files/${id}`,
			providesTags: ['sketchShaperProFiles'],
		}),

		initializeUpload: builder.mutation({
			query: (data) => ({
				url: 'sketchshaper-pro-files/initialize',
				method: 'POST',
				body: data,
			}),
		}),

		uploadChunk: builder.mutation({
			query: (data) => ({
				url: 'sketchshaper-pro-files/upload-chunk',
				method: 'POST',
				body: data,
			}),
		}),

		completeUpload: builder.mutation({
			query: (data) => ({
				url: 'sketchshaper-pro-files/complete',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['sketchShaperProFiles'],
		}),

		getUploadStatus: builder.query({
			query: (uploadSessionId) => `sketchshaper-pro-files/status/${uploadSessionId}`,
		}),

		cancelUpload: builder.mutation({
			query: (uploadSessionId) => ({
				url: `sketchshaper-pro-files/cancel/${uploadSessionId}`,
				method: 'DELETE',
			}),
		}),

		updateSketchShaperProFile: builder.mutation({
			query: ({ id, data }) => ({
				url: `sketchshaper-pro-files/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['sketchShaperProFiles'],
		}),

		updateSketchShaperProFilePreview: builder.mutation({
			query: ({ id, data }) => ({
				url: `sketchshaper-pro-files/${id}/preview`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['sketchShaperProFiles'],
		}),

		deleteSketchShaperProFile: builder.mutation({
			query: (id) => ({
				url: `sketchshaper-pro-files/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['sketchShaperProFiles'],
		}),
	}),
});

export const {
	useGetSketchShaperProFilesQuery,
	useGetSketchShaperProFileByIdQuery,
	useInitializeUploadMutation,
	useUploadChunkMutation,
	useCompleteUploadMutation,
	useGetUploadStatusQuery,
	useCancelUploadMutation,
	useUpdateSketchShaperProFileMutation,
	useUpdateSketchShaperProFilePreviewMutation,
	useDeleteSketchShaperProFileMutation,
} = sketchShaperProFileApiSlice;
