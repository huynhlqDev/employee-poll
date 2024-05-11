import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoggedIn: false,
        loading: false,
        user: null,
        error: null
    },
    reducers: {
        fetchUserRequest: (state) => {
            state.loading = true;
        },
        fetchUserSuccess: (state, action) => {
            state.isLoggedIn = true;
            state.loading = false;
            state.error = false;
            state.user = action.payload.user;
        },
        fetchUserError: (state, action) => {
            state.isLoggedIn = false;
            state.loading = false;
            state.error = action.payload.error;
        },
        clearUser: (state) => {
            state.isLoggedIn = false;
            state.user = null;
            state.error = null;
        }
    }
});

export const { fetchUserRequest, fetchUserSuccess, fetchUserError, clearUser } = userSlice.actions;
export default userSlice.reducer;