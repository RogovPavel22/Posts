import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IPost } from "./posts.types";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getPosts: build.query<IPost[], number>({
      query: (limit) => `posts?_limit=${limit}&_page=1`,
    }),
    getNumrPost: build.query<IPost, string>({
      query: (num) => `posts${num && `/${num}`}`
    })
  }),
});

export const { useGetPostsQuery, useGetNumrPostQuery } = postsApi;
