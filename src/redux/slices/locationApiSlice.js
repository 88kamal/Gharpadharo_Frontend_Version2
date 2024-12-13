import toast from 'react-hot-toast';
import apiSlice from './apiSlice';

export const localityApi = apiSlice.injectEndpoints({
  tagTypes: ['GetCity'], 
  endpoints: (builder) => ({
    getLocalities: builder.query({
      query: () => 'locality/get-localities',
      transformResponse: (data) => data || [],
      providesTags: ['GetCity'],
      keepUnusedDataFor : 3600, 
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
      refetchOnFocus: true,
    }),


    // // Add City 
    // addCity: builder.mutation({
    //   query: (cityData) => {
    //     const formData = new FormData();
    //     formData.append('cityName', cityData.cityName);
    //     formData.append('cityState', cityData.cityState);
    
    //     if (cityData.cityImage) {
    //       formData.append('cityImage', cityData.cityImage);
    //     }
    
    //     return {
    //       url: 'city/add-city',
    //       method: 'POST',
    //       body: formData,
    //       headers: {
    //         "auth-token": JSON.parse(localStorage.getItem("token")),
    //     },
    //     };
    //   },
    //   invalidatesTags: ['GetCity'],
    //   onQueryStarted: async (cityData, { dispatch, queryFulfilled }) => {
    //     const optimisticCity = {
    //       id: Date.now(),
    //       cityName: cityData.cityName,
    //       cityState: cityData.cityState,
    //       cityImage: cityData.cityImage || null,
    //     };
    
    //     const patchResult = dispatch(
    //       cityApi.util.updateQueryData('getCities', undefined, (draft) => {
    //         draft.push(optimisticCity);
    //       })
    //     );
    
    //     try {
    //       const { data } = await queryFulfilled;
    //       // console.log('City added successfully', data);
    //     } catch (error) {
    //       // console.error('Failed to add city', error);
    //       patchResult.undo();
    //     }
    //   },
    // }),

    // Edit City 
    // editCity: builder.mutation({
    //   query: ({ id, cityData }) => {
    //     console.log("276 id, cityData", id, cityData)
    //     const formData = new FormData();
    //     formData.append('cityName', cityData.cityName);
    //     formData.append('cityState', cityData.cityState);

    //     if (cityData.cityImage) {
    //       formData.append('cityImage', cityData.cityImage);
    //     }

    //     return {
    //       url: `city/edit-city/${id}`,
    //       method: 'PUT',
    //       body: formData,
    //       headers: {
    //         "auth-token": JSON.parse(localStorage.getItem("token")),
    //     },
    //     };
    //   },
    //   invalidatesTags: ['GetCity'], 
    //   onQueryStarted: async ({ id, cityData }, { dispatch, queryFulfilled }) => {
    //     const patchResult = dispatch(
    //       cityApi.util.updateQueryData('getCities', undefined, (draft) => {
    //         const cityIndex = draft.findIndex((city) => city.id === id);
    //         if (cityIndex !== -1) {
    //           draft[cityIndex] = { ...draft[cityIndex], ...cityData };
    //         }
    //       })
    //     );

    //     try {
    //       const { data } = await queryFulfilled;
    //       console.log('City updated successfully', data);
    //       // toast.success(data.message);
    //     } catch (error) {
    //       console.error('Failed to update city', error);
    //       patchResult.undo();
    //       // toast.error('Failed to update city');
    //     }
    //   },
    // }),

    // Get Cities For Admin 
    // getCitiesForAdmin: builder.query({
    //   query: ({ search = "", page = 1, limit = 10 } = {}) => ({
    //     url: `city/get-cities-admin`,
    //     params: { search, page, limit },
    //     headers : {
    //       "auth-token": JSON.parse(localStorage.getItem("token"))
    //     }
    //   }),
    //   transformResponse: (data) => data || [],
    //   providesTags: ['GetCity'],
    //   keepUnusedDataFor : 3600,
    //   refetchOnMountOrArgChange: true,
    //   refetchOnReconnect: true,
    //   refetchOnFocus: true,
    // }),

    // Delete City 
    // deleteCity: builder.mutation({
    //   query: (id) => ({
    //     url: `city/delete-city`,
    //     method: 'DELETE',
    //     params: { id },
    //     headers: {
    //       "auth-token": JSON.parse(localStorage.getItem("token")),
    //   },
    //   }),
    //   invalidatesTags: ['GetCity'],
    //   onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
    //     const patchResult = dispatch(
    //       cityApi.util.updateQueryData('getCities', undefined, (draft) => {
    //         return draft.filter(city => city.id !== id);
    //       })
    //     );
    
    //     try {
    //       const { data } = await queryFulfilled;
    //       // console.log('City deleted successfully', data);
    //       toast.success(data?.message);
    //     } catch (error) {
    //       // console.log('Failed to delete city', error?.error?.data?.error);
    //       toast.error(error?.error?.data?.error);
    //       patchResult.undo();
    //     }
    //   },
    // }),

  }),
});

export const {
  useGetLocalitiesQuery
//   useAddCityMutation,
//   useEditCityMutation, // Added hook for edit city
//   useGetCitiesForAdminQuery,
//   useDeleteCityMutation,
} = localityApi;