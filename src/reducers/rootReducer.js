import { combineReducers } from 'redux';
import authenReducer from './authenReducer';
import pollReducer from './pollReducer';
import answerReducer from './answerReducer';

const rootReducer = combineReducers({
    auth: authenReducer,
    poll: pollReducer,
    answer: answerReducer
});

export default rootReducer;