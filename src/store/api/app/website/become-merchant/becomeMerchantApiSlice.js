import { apiSlice } from '@/store/api/apiSlice';

export const becomeMerchantApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getBecomeMerchants: builder.query({
			query: () => 'content/becomemerchant',
			providesTags: ['BecomeMerchant'],
		}),

		createBecomeMerchant: builder.mutation({
			query: (data) => ({
				url: 'content/create-becomemerchant',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['BecomeMerchant'],
		}),
	}),
});

export const { useGetBecomeMerchantsQuery, useCreateBecomeMerchantMutation } =
	becomeMerchantApi;
