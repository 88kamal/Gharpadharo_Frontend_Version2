/* eslint-disable no-unused-vars */
import apiSlice from "./apiSlice";

export const roomApi = apiSlice.injectEndpoints({
    tagTypes: ['Rooms'], // Define the tag type for caching and invalidation
    endpoints: (builder) => ({
        addRooms: builder.mutation({
            query: (roomData) => ({
                url: '/accomodation/add-room',
                method: 'POST',
                body: roomData,
                formData: true,
                headers: {
                    // Adjust for your authentication token
                    "auth-token": JSON.parse(localStorage.getItem("token")),
                },
            }),
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                // Optional: You can perform optimistic updates or handle side-effects here
                try {
                    // Await the actual API call
                    const { data } = await queryFulfilled;
                    console.log('Add Accomodation successful:', data);
                } catch (error) {
                    console.error("Add Room failed:", error);
                }
            },

            invalidatesTags: ['Rooms'], // Invalidate Vehicle data to trigger refetch

        }),
        getRoomsByAccomodationId: builder.query({
            query: ({ accomodationId, page = 1, limit = 10 }) => {
                console.log({
                    accomodationId, page, limit
                });

                // Construct the query string with the provided parameters
                const queryParams = new URLSearchParams();
                queryParams.append('page', page);
                queryParams.append('limit', limit);

                // Construct the final URL
                return {
                    url: `/accomodation/get-rooms/${accomodationId}?${queryParams.toString()}`,
                    headers: {
                        "auth-token": JSON.parse(localStorage.getItem("token")),
                    },
                };
            },
            providesTags: (result, error, { accomodationId }) =>
                result
                    ? [
                        { type: 'Rooms', id: accomodationId },
                        ...result.rooms.map(({ _id }) => ({ type: 'Rooms', id: _id })),
                    ]
                    : [{ type: 'Rooms', id: accomodationId }],
            keepUnusedDataFor: 3600, // Cache data for 60 seconds after last unmount
            refetchOnFocus: true, // Refetch on window focus
            refetchOnReconnect: true, // Refetch on reconnect
            refetchOnMountOrArgChange: true, // Refetch on remount or argument change
        }),


    }),

    refetchOnReconnect: true,
});

export const { useAddRoomsMutation ,useGetRoomsByAccomodationIdQuery} = roomApi;