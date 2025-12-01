import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "@/shared/interfaces";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api", timeout: 10000 }),
  tagTypes: ["Products"],
  refetchOnMountOrArgChange: false,
  refetchOnFocus: false,
  refetchOnReconnect: false,
  keepUnusedDataFor: 3600,
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "products",
      providesTags: ["Products"],
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `products/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Products", id }],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
