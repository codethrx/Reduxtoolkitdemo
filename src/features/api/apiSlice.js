import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004" }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
      providesTags: ["Users"],
    }),
    createUser: builder.mutation({
      query: (name) => ({
        url: "users",
        method: "POST",
        body: { name },
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const japiSlice = createApi({
  reducerPath: "japi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "posts",
      providesTags: ["Posts"],
    }),
  }),
});
//https://fakestoreapi.com/products
export const productSlice = createApi({
  reducerPath: "productapi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://fakestoreapi.com",
    baseUrl: "https://fakestoreapi.com/",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (id) => "products" + "/" + id,
      providesTags: ["Products"],
    }),
  }),
});
export const { useGetUsersQuery, useCreateUserMutation } = apiSlice;
export const { useGetPostsQuery } = japiSlice;
export const { useGetProductsQuery } = productSlice;
