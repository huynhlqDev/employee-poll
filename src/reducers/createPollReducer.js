// reducer.js
import { CREATE_POLL_SUCCESS, CREATE_POLL_FAILURE, CLEAR_REQUEST } from '../actions/createPollActions';

const initialState = {
    status: null,
    createdPoll: null,
    createPollError: null
};

const createPollReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POLL_SUCCESS:
            return {
                ...state,
                status: true,
                createdPoll: action.poll,
                createPollError: null
            };
        case CREATE_POLL_FAILURE:
            return {
                ...state,
                status: false,
                createdPoll: null,
                createPollError: action.error
            };
        case CLEAR_REQUEST:
            return {
                ...state,
                status: null,
                createdPoll: null,
                createPollError: null
            }
        default:
            return state;
    }
};

export default createPollReducer;
