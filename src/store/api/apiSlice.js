import envConfig from '@/configs/envConfig';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	tagTypes: [
		'Slider',
		'category',
		'subCategories',
		'footerPage',
		'slider',
		'assets',
		'general-about-us',
		'application-settings',
		'social',
		'blogs',
		'supportedby',
		'innovative'



	],
	baseQuery: fetchBaseQuery({
		baseUrl: envConfig.apiUrl,
		prepareHeaders: (headers, { getState }) => {
			const { auth } = getState().auth;

			if (auth?.accessToken) {
				headers.set('Authorization', `${auth?.accessToken}`);
			}
		},
	}),
	endpoints: (builder) => ({}),
});
