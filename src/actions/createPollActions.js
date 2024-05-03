import { setLoading } from "./loadingAction";
import { _saveQuestion } from "../data/_DATA";

export const CREATE_POLL_SUCCESS = 'CREATE_POLL_SUCCESS';
export const CREATE_POLL_FAILURE = 'CREATE_POLL_FAILURE';
export const CLEAR_REQUEST = 'CLEAR_REQUEST';

export const createPollSuccess = (poll) => ({ type: CREATE_POLL_SUCCESS, poll });
export const createPollFailure = (error) => ({ type: CREATE_POLL_FAILURE, error });
export const clearRequest = () => ({ type: CLEAR_REQUEST});

export const createPoll = (author, optionOneText, optionTwoText) => {
    
    return (dispatch) => {
        dispatch(setLoading(true));
        _saveQuestion({
            author,
            optionOneText,
            optionTwoText
        })
            .then(poll => {
                dispatch(createPollSuccess(poll))
            })
            .catch(error => {
                createPollFailure(error)
            })
            .finally(() => {
                dispatch(setLoading(false));
            })
    }

}

export const clearState = () => {
    return (dispatch) => {
        dispatch(clearRequest())
    }
}