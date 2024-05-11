import { _saveQuestion } from "../data/_DATA";
import { createPollRequest, createPollSuccess, createPollError, clearCreatePollData } from "../reduxSlice/createPollSlice";

export const savePoll = (author, optionOneText, optionTwoText) => {

    return (dispatch) => {
        dispatch(createPollRequest());

        _saveQuestion({
            author,
            optionOneText,
            optionTwoText
        })
            .then(poll => {
                dispatch(createPollSuccess({ poll }))
            })
            .catch(error => {
                createPollError({ error })
            })
    }

}

export const clearState = () => {
    return (dispatch) => {
        dispatch(clearCreatePollData())
    }
}