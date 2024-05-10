
import { FETCH_ALL_USERS_FAILURE, FETCH_ALL_USERS_SUCCESS } from '../actions/userActions';

const initialState = {
    status: null,
    users: null,
    error: null
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_USERS_SUCCESS:
            return {
                ...state,
                status: true,
                users: action.payload,
                error: null
            };
        case FETCH_ALL_USERS_FAILURE:
            return {
                ...state,
                status: false,
                users: null,
                error: action.payload
            };
        default:
            return state;
    }
};

export default usersReducer;
