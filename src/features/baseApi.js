import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "../utils/constants";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/proxy",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (url) => ({
        url: url,
        method: "GET",
        headers: headers,
      }),
    }),
    getFavoriteProduct: builder.query({
      query: (url) => ({
        url: url,
        method: "GET",
        headers: headers,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetFavoriteProductQuery } = baseApi;
