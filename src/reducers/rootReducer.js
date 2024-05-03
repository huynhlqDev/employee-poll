import { combineReducers } from 'redux';
import authenReducer from './authenReducer';
import pollReducer from './pollReducer';
import answerReducer from './answerReducer';
import loadingReducer from './loadingReducer';
import createPollReducer from './createPollReducer';

const rootReducer = combineReducers({
    auth: authenReducer,
    poll: pollReducer,
    answer: answerReducer,
    loading: loadingReducer,
    createPoll: createPollReducer
});

export default rootReducer;