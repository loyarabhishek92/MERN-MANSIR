
import { bookApi } from "@/pages/books/bookApi";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [bookApi.reducerPath]: bookApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([bookApi.middleware]),
    
});