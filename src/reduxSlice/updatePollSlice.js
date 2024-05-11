import { createSlice } from "@reduxjs/toolkit";

export const updatePollSlice = createSlice({
    name: "updatePoll",
    initialState: {
        result: false,
        loading: false,
        error: null
    },
    reducers: {
        updatePollRequest: (state) => {
            state.loading = true;
        },
        updatePollSuccess: (state, action) => {
            state.loading = false;
            state.result = true;
            state.error = false;
        },
        updatePollError: (state, action) => {
            state.loading = false;
            state.result = false;
            state.error = action.payload.error;
        }
    }
});

export const { updatePollRequest, updatePollSuccess, updatePollError } = updatePollSlice.actions;
export default updatePollSlice.reducer;