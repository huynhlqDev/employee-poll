import { createSlice } from "@reduxjs/toolkit";

export const createPollSlice = createSlice({
    name: "createPoll",
    initialState: {
        result: false,
        loading: false,
        poll: null,
        error: null
    },
    reducers: {
        createPollRequest: (state) => {
            state.loading = true;
        },
        createPollSuccess: (state, action) => {
            state.loading = false;
            state.result = true;
            state.poll = action.payload.poll;
            state.error = null;
        },
        createPollError: (state, action) => {
            state.loading = false;
            state.result = false;
            state.error = action.payload.error;
        },
        clearCreatePollData: (state) => {
            state.loading = false;
            state.result = false;
            state.poll = null;
            state.error = null;
        }
    }
});

export const { createPollRequest, createPollSuccess, createPollError, clearCreatePollData } = createPollSlice.actions;
export default createPollSlice.reducer;