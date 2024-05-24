import { apiSlice } from "@/store/api/apiSlice";

export const completeDeliveryPaymentApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // getSliders: builder.query({
        //     query: () => 'slider',
        //     providesTags: ['Slider'],
        // }),

        getPaymentListByPagination: builder.query({
            query: ({ page = 1, limit = 10, order = 'desc', search = '' }) =>
                `account/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}`,
            providesTags: ['paymentList'],
        }),

        getCompleteDeliveryPaymentListByPagination: builder.query({
            query: ({ page = 1, limit = 10, order = 'desc', search = '', status_start= '', status_end= '', delivery_type= [], delivery_branch_id= '',  }) =>
                `parcel/complete-delivery-parcel-list/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}&status_start=${status_start}&status_end=${status_end}&delivery_branch_id=${delivery_branch_id}&delivery_type=${delivery_type.join('&delivery_type=')}`,
            providesTags: ['paymentList'],
        }),

        forDeliveryPaymentGenerateByPagination: builder.query({
            query: ({ page = 1, limit = 10, order = 'desc', search = '', delivery_branch_id= '',  }) =>
                `parcel/delivery-payment/find/pages?page=${page}&limit=${limit}&order=${order}&search=${search}&delivery_branch_id=${delivery_branch_id}`,
            providesTags: ['paymentList'],
        }),

        getPaymentById: builder.query({
            query: (id) => `account/${id}`,
            providesTags: ['paymentList'],
        }),

        createDeliveryPayment: builder.mutation({
            query: (data) => ({
                url: 'account',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['paymentList'],
        }),

        updateDeliveryPayment: builder.mutation({
            query: ({ id, data }) => ({
                url: `account/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['paymentList'],
        }),

        // updateSliderStatus: builder.mutation({
        //     query: ({ id, status }) => ({
        //         url: `slider/${id}/status?status=${status}`,
        //         method: 'PUT',
        //         body: { status },
        //     }),
        //     invalidatesTags: ['Slider'],
        // }),

        // deleteSlider: builder.mutation({
        //     query: (id) => ({
        //         url: `slider/${id}`,
        //         method: 'DELETE',
        //     }),
        //     invalidatesTags: ['Slider'],
        // }),
    }),
});

export const {
    useGetPaymentListByPaginationQuery,
    useGetPaymentByIdQuery,
    useGetCompleteDeliveryPaymentListByPaginationQuery,
    useForDeliveryPaymentGenerateByPaginationQuery,
    useCreateDeliveryPaymentMutation,
    useUpdateDeliveryPaymentMutation

} = completeDeliveryPaymentApiSlice;
