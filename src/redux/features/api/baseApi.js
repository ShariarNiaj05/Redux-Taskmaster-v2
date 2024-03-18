import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: builder => ({
        getTask: builder.query({
            query: () => '/tasks'
        })
    })
})
export const { useGetTaskQuery } = baseApi;

export default baseApi;