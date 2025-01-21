import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/proxy",
  }),
  endpoints: (builder) => ({
    getStructures: builder.query({
      query: (url) => ({
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          href: url,
        }),
      }),
    }),
  }),
});

export const { useGetStructuresQuery } = baseApi;
