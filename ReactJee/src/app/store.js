
import { languageApi } from "@/pages/language/languageApi";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [languageApi.reducerPath]: languageApi.reducer
    },

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat([
            languageApi.middleware
        ]),
    
});