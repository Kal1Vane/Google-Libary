import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NameApiStore, ResponseDataBooks } from "../types";

const API_KEY = process.env.REACT_APP_API_KEY;
if(!API_KEY){
  alert('НУЖЕН API_KEY В .ENV');
}

export const dataApi = createApi({
  reducerPath: NameApiStore.dataApi,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/books/v1/",
  }),
  endpoints: (build) => ({
    fetchFindBooks: build.query<ResponseDataBooks, string>({
      query: (str: string) => ({
        url: `/volumes?q=${str}&key=${API_KEY}&maxResults=40`,
      }),
    }),
  }),
});
