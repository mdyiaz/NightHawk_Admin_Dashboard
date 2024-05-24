import { apiSlice } from '@/store/api/apiSlice';

export const partnerApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getPartners: builder.query({
			query: () => 'partner',
			providesTags: ['partner'],
		}),

		getPartnersByPagination: builder.query({
			query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
				`partner/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
			providesTags: ['partner'],
		}),

		getPartnerById: builder.query({
			query: (id) => `partner/${id}`,
			providesTags: ['partner'],
		}),

		createPartner: builder.mutation({
			query: (data) => ({
				url: 'partner',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['partner'],
		}),
		updatePartner: builder.mutation({
			query: ({id, data}) => ({
				url: `partner/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['partner'],
		}),

		updatePartnerStatus: builder.mutation({
			query: ({ id, status }) => ({
				url: `partner/${id}/status?status=${status}`,
				method: 'PUT',
				body: { status },
			}),
			invalidatesTags: ['partner'],
		}),

		deletePartner: builder.mutation({
			query: (id) => ({
				url: `partner/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['partner'],
		}),
	}),
});

export const {
	useGetPartnersQuery,
	useGetPartnersByPaginationQuery,
	useGetPartnerByIdQuery,
	useCreatePartnerMutation,
	useUpdatePartnerMutation,
	useUpdatePartnerStatusMutation,
	useDeletePartnerMutation,
} = partnerApi;
