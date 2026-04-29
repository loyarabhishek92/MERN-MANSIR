
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// export const base = 'http://192.168.18.24:5000';
export const base = 'https://mern-mansir.onrender.com';

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://mern-mansir.onrender.com/api'}),
    endpoints: (builder) => ({}),
})