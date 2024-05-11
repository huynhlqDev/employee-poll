import { createSlice } from "@reduxjs/toolkit";

export const pollsSlice = createSlice({
    name: "polls",
    initialState: {
        status: false,
        loading: false,
        polls: [],
        error: null
    },
    reducers: {
        fetchPollsRequest: (state) => {
            state.loading = true;
        },
        fetchPollsSuccess: (state, action) => {
            state.loading = false;
            state.status = true;
            state.polls = action.payload.polls;
            state.error = false;
        },
        fetchPollsError: (state, action) => {
            state.loading = false;
            state.status = false;
            state.error = action.payload.error;
        }
    }
});

export const { fetchPollsRequest, fetchPollsSuccess, fetchPollsError } = pollsSlice.actions;
export default pollsSlice.reducer;