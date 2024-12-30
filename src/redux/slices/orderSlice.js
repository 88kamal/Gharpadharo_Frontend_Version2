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
    getOrders: builder.query({
      query: () => ({
        url: '/order/get-orders',
        method: 'GET',
        headers: {
          "auth-token": JSON.parse(localStorage.getItem("token")),
        },
      }),
      providesTags: ['Order'], // Provides Order tag for cache consistency
      keepUnusedDataFor: 3600,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
      refetchOnFocus: true,
    }),
    
    getOrdersByAccomodation: builder.query({
      query: ({ accomodationId, status, startDate, endDate, limit = 10, page = 1 }) => {
        // Build the query string dynamically
        const queryParams = new URLSearchParams();
        if (startDate) queryParams.append('startDate', startDate);
        if (endDate) queryParams.append('endDate', endDate);
        if (status) queryParams.append('status', status);
        queryParams.append('limit', limit);
        queryParams.append('page', page);
    
        return {
          url: `/order/get-orders/${accomodationId}?${queryParams.toString()}`, // Corrected the route parameter casing
          headers: {
            "auth-token": localStorage.getItem("token"), // No need to parse JSON for a simple token string
          },
        };
      },
      providesTags: (result) =>
        result?.orders
          ? result.orders.map(({ _id }) => ({ type: 'Orders', id: _id }))
          : [{ type: 'Orders', id: 'LIST' }], // Ensure a stable tag for invalidation
      keepUnusedDataFor: 60, // Cache duration
      refetchOnFocus: true,
      refetchOnReconnect: true,
      refetchOnMountOrArgChange: true,
    }),
    
    
    
    
  }),
});

export const { useCreateOrderMutation, useVerifyPaymentMutation,useGetOrdersQuery,useGetOrdersByAccomodationQuery } = orderApiSlice;