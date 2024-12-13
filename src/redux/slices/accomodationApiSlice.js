import apiSlice from './apiSlice';

export const accomodationApi = apiSlice.injectEndpoints({
    tagTypes: ['Accomodation'],  // Define tagTypes for cache invalidation
    endpoints: (builder) => ({
        // Add Shop mutation
        addAccomodation: builder.mutation({
            query: (accomodationData) => ({
                url: '/accomodation/add-accomodation',
                method: 'POST',
                body: accomodationData,
                formData: true,
            }),
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                // Optimistic cache update: patch the shop list before the mutation completes
                // const patchResult = dispatch(
                //     shopApi.util.updateQueryData('getShops', undefined, (draft) => {
                //         // Add the new shop optimistically to the cache
                //         draft.push(arg); // Assuming `arg` contains the new shop data
                //     })
                // );

                try {
                    // Await the actual API call
                    const { data } = await queryFulfilled;
                    console.log('Add Accomodation successful:', data);
                } catch (error) {
                    console.error('Add Accomodation failed:', error);

                    // Rollback the optimistic cache update if the mutation fails
                    // patchResult.undo();
                }
            },
            invalidatesTags: ['Shop'], // Invalidate cache to refetch the shop list after mutation
        }),
          
    }),
    refetchOnReconnect: true,  // Ensure data refetches when connection is restored
});

export const {
    useAddAccomodationMutation,
} = accomodationApi;