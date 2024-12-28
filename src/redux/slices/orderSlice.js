import apiSlice from "./apiSlice";

// Define your API slice
export const orderApiSlice = apiSlice.injectEndpoints({
  tagTypes: "Order",
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: ({ roomId }) => ({
        url: `/order/create-order/${roomId}`,
        method: 'POST',
        headers: {
          "auth-token": JSON.parse(localStorage.getItem("token")),
        },
      }),
      invalidatesTags: ['Order'], // Invalidate Order tag on create
      keepUnusedDataFor : 3600,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
      refetchOnFocus: true,
    }),
    verifyPayment: builder.mutation({
      query: (paymentData) => ({
        url: '/order/verify-payment',
        method: 'PUT',
        body: paymentData,
        headers: {
          "auth-token": JSON.parse(localStorage.getItem("token")),
      },
      }),
      invalidatesTags: ['Order'], // Invalidate Order tag on payment verification
      keepUnusedDataFor : 3600,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
      refetchOnFocus: true,
    }),
    
    
  }),
});

export const { useCreateOrderMutation, useVerifyPaymentMutation } = orderApiSlice;