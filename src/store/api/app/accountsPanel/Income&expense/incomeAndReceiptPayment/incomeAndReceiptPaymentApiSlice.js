import { apiSlice } from '@/store/api/apiSlice';

export const incomeAndReceiptPaymentApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({

		getReceiptPayment: builder.query({
			query: ({ month = '', year = '' }) =>
				// `expense/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
				`/expense/receipt-payments?month=${month}&year=${year}`,
			providesTags: ['ReceiptPayment'],
		}),

		getIncomePayment: builder.query({
			query: ({ month = '', year = '' }) =>
				// `expense/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
				`/expense/income-statement?month=${month}&year=${year}`,
			providesTags: ['IncomePayment'],
		}),

		getAccountsReport: builder.query({
			query: ({ start_date = '', end_date = '', branch_id = '', merchant_id = '' }) =>
				`/report/accounts/report?end_date=${end_date}&start_date=${start_date}&branch_id=${branch_id}&merchant_id=${merchant_id}`,
			providesTags: ['DashboardSummary'],
		}),





	}),
});

export const {
	useGetReceiptPaymentQuery,
	useGetIncomePaymentQuery,
	useGetAccountsReportQuery,


} = incomeAndReceiptPaymentApi;
