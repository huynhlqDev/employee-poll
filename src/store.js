import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reduxSlice/userSlice";
import usersReducer from "./reduxSlice/usersSlice";
import pollsReducer from "./reduxSlice/pollsSlice";
import createPollReducer from "./reduxSlice/createPollSlice";
import updatePollReducer from "./reduxSlice/updatePollSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        users: usersReducer,
        polls: pollsReducer,
        createPoll: createPollReducer,
        updatePoll: updatePollReducer
    }
})
