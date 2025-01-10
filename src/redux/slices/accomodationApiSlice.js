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
                credentials : true
            }),
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                // Optimistic cache update: patch the shop list before the mutation completes
                const patchResult = dispatch(
                    accomodationApi.util.updateQueryData('getShops', undefined, (draft) => {
                        // Add the new shop optimistically to the cache
                        draft.push(arg); // Assuming `arg` contains the new shop data
                    })
                );

                try {
                    // Await the actual API call
                    const { data } = await queryFulfilled;
                    console.log('Add Accomodation successful:', data);
                } catch (error) {
                    console.error('Add Accomodation failed:', error);

                    // Rollback the optimistic cache update if the mutation fails
                    patchResult.undo();
                }
            },
            invalidatesTags: ['Shop'], // Invalidate cache to refetch the shop list after mutation
        }),

        // / Fetch Shops query
        getAccomodations: builder.query({
            query: ({ search = "", page = 1, limit = 10, city }) => ({
                url: `/accomodation/get-accomodations`,
                method: 'GET',
                params: { search, page, limit, city },  // Query parameters for search, pagination, and city filter
                headers: {
                    "auth-token": JSON.parse(localStorage.getItem("token")),
                },
            }),
            transformResponse: (response) => ({
                accomodations: response.accomodations, // Array of shops
                totalAccomodations: response.totalAccomodations, // Total number of shops
            }),
            providesTags: (result) =>
                result?.accomodations
                    ? result.accomodations.map(({ _id }) => ({ type: 'Accomodation', id: _id }))
                    : [{ type: 'Shop' }],
            keepUnusedDataFor: 3600,  // Cache data for 5 minutes
            refetchOnMountOrArgChange: true,
            refetchOnReconnect: true,
            refetchOnFocus: true,
        }),





}),
    refetchOnReconnect: true,  // Ensure data refetches when connection is restored
});

export const {
    useAddAccomodationMutation,
    useGetAccomodationsQuery
} = accomodationApi;