import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://69ad51a5b50a169ec87f235c.mockapi.io'}),
    endpoints: (builder) => ({

        getBook: builder.query({
            query: (id) => ({
                url: `/Book/${id}`,
                method: 'GET'
            }),
            providesTags: ['Book']
        }),



        getBooks: builder.query({
            query: () => ({
                url: '/Book',
                method: 'GET'
            }),
            providesTags: ['Book']
        }),

        addBook: builder.mutation({
            query: (data) => ({
                url: '/Book',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Book']
        }),

        updateBook: builder.mutation({
            query: (q) => ({
                url: `/Book/${q.id}`,
                method: 'PUT',
                body: q.data
            }),
            invalidatesTags: ['Book']
        }),

        removeBook: builder.mutation({
            query: (id) => ({
                url: `/Book/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Book']
        }),
    })
});

export const {useGetBooksQuery, useLazyGetBookdQuery, useAddBookMutation, useRemoveBookMutation, useGetBookQuery, useUpdateBookMutation} = bookApi;