import envConfig from '@/configs/envConfig';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	tagTypes: [
		'Slider',
		'Office',
		'Newsletter',
		'VisitorMessage',
		'PageContent',
		'AboutPoint',
		'ParcelStep',
		'SocialLink',
		'BecomeMerchant',
		'BecomeFranchise',
		'branch',
		'branchUser',
		'rider',
		'merchant',
		'designation',
		'teamMember',
		'partner',
		'customerFeedback',
		'frequentlyAskQuestion',
		'objective',
		'deliveryService',
		'feature',
		'blog',
		'socialLink',
		'parcelStep',
		'pageContent',
		'visitorMessage',
		'newsletter',
		'ServiceArea',
		'WeightType',
		'ServiceType',
		'ItemType',
		'District',
		'Area',
		'Notice',
		'ParcelList',
		'deliveryBranchTransfer',
		'generateDeliveryRiderRun',
		'returnBranchTransfer',
		'paymentList',
		'serviceAreaWeightPackage',
		'BranchDeliveryReceivePayment',
		'MerchantPaymentDeliveryReceiveList',
		'MerchantsDeliveryPayment',
		'ConfirmMerchantsDeliveryPayment',
		'Staff',
		'ExpenseHead',
		'StaffPayment',
		'Expense',



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
