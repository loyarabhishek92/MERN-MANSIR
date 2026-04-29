import { getUserFromLocal, setUserToLocal } from "@/local/local";
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        users: getUserFromLocal()
    },
    reducers: {
        setUser: (state, action) => {
            state.users.push(action.payload);
            setUserToLocal(state.users);
        }
    }
});

export const {setUser} = userSlice.actions;