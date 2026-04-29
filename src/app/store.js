
import { quoteApi } from "@/pages/quote/quoteApi";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [quoteApi.reducerPath]: quoteApi.reducer
    },

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat([
           quoteApi.middleware
        ]),
    
});