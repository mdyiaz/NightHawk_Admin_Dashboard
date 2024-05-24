import { apiSlice } from '@/store/api/apiSlice';

export const becomeFranchiseApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getBecomeFranchises: builder.query({
			query: () => 'content/becomefranchise',
			providesTags: ['BecomeFranchise'],
		}),

		createBecomeFranchise: builder.mutation({
			query: (data) => ({
				url: 'content/create-becomefranchisee',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['BecomeFranchise'],
		}),
	}),
});

export const { useGetBecomeFranchisesQuery, useCreateBecomeFranchiseMutation } =
	becomeFranchiseApi;
