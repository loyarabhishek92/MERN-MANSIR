import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://69ad51a5b50a169ec87f235c.mockapi.io'}),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => ({
                url: '/Book',
                method: 'GET'
            })
        })
    })
});

export const {useGetBooksQuery, useLazyGetBookdQuery} = bookApi;