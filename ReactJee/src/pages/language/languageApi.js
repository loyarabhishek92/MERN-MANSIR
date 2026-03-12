import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const languageApi = createApi({
    reducerPath: 'languageApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://translate-plus.p.rapidapi.com',
        headers: {
            'x-rapidapi-key': '86b2cf5e3bmshf8e932df45b220ap1d4c82jsn18722771958a',
        }
    }),
    endpoints: (builder) => ({

        translate: builder.mutation({
            query: (data) => ({
                url: '/translate',
                body: data,
                method: 'POST'
            })
        })
    })
})

export const {useTranslateMutation} = languageApi;