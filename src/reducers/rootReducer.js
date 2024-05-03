import { combineReducers } from 'redux';
import authenReducer from './authenReducer';
import pollReducer from './pollReducer';
import answerReducer from './answerReducer';
import loadingReducer from './loadingReducer';
import createPollReducer from './createPollReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
    auth: authenReducer,
    poll: pollReducer,
    answer: answerReducer,
    loading: loadingReducer,
    createPoll: createPollReducer,
    users: usersReducer
});

export default rootReducer;