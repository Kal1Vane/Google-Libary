import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { NameApiStore, ResponseDataBooks } from '../types'
 
 export const dataApi = createApi({
    reducerPath: NameApiStore.dataApi,
    baseQuery: fetchBaseQuery({baseUrl: "https://www.googleapis.com/books/v1/"}),
    endpoints: (build) => ({
      fetchFindBooks : build.query<ResponseDataBooks, string>({
        query : (str : string) => ({
          url: `/volumes?q=${str}`
        })
      })
    }),
 })