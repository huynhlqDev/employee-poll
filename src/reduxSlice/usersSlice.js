import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        status: false,
        loading: false,
        users: null,
        error: null
    },
    reducers: {
        fetchUsersRequest: (state) => {
            state.loading = true;
        },
        fetchUsersSuccess: (state, action) => {
            state.loading = false;
            state.error = false;
            state.status = true;
            state.users = action.payload.users;
        },
        fetchUsersError: (state, action) => {
            state.loading = false;
            state.status = false;
            state.error = action.payload.error;
        }
    }
});

export const { fetchUsersRequest, fetchUsersSuccess, fetchUsersError } = usersSlice.actions;
export default usersSlice.reducer;