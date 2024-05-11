// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers/rootReducer';
// import { thunk } from 'redux-thunk';

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;

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
