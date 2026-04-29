import { userSlice } from "@/pages/form/userSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer
    }
});