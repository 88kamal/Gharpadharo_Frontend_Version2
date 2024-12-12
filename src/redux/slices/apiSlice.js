/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_HOST_URL}/api/v1` }),
//   tagTypes: ["User","GetCity","Shop", "Department", "Role", "Vehicle", "User", "Shop", "Order", "Employee", "Department"], // Ensure this line is here to define the tagTypes globally
  endpoints: (builder) => ({

  }), // Initially, we'll keep this empty
});

export default apiSlice;