import { combineReducers } from 'redux';
import authenReducer from './authenReducer';
import pollReducer from './pollReducer';
import answerReducer from './answerReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
    auth: authenReducer,
    poll: pollReducer,
    answer: answerReducer,
    loading: loadingReducer
});

export default rootReducer;