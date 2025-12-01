import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category } from "@/shared/interfaces";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api", timeout: 10000 }),
  tagTypes: ["Categories"],
  refetchOnMountOrArgChange: false,
  refetchOnFocus: false,
  refetchOnReconnect: false,
  keepUnusedDataFor: 3600,
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => "categories",
      providesTags: ["Categories"],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
