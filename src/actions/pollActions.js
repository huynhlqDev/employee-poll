import { _getQuestions, _saveQuestionAnswer } from "../data/_DATA";
import { fetchPollsRequest, fetchPollsSuccess, fetchPollsError } from "../reduxSlice/pollsSlice";
import { updatePollRequest, updatePollSuccess, updatePollError } from "../reduxSlice/updatePollSlice";
import { login } from "./authenActions";

export const getPolls = () => {
    return (dispatch) => {
        dispatch(fetchPollsRequest());

        _getQuestions()
            .then(questions => {
                const polls = Object.values(
                    Object.values(questions).map(item => item)
                ).map(item => item)
                dispatch(fetchPollsSuccess({ polls }))
            })
            .catch(error => {
                dispatch(fetchPollsError({ error }))
                if (error.message) {
                    console.log("error: ", error.message)
                }
            })

    };
};

export const answerPoll = (user, qid, answer) => {
    return (dispatch) => {
        dispatch(updatePollRequest());

        const authedUser = user.id;
        _saveQuestionAnswer({ authedUser, qid, answer })
            .then(result => {
                if (result) {
                    dispatch(updatePollSuccess({ result }));
                    dispatch(login(user.id, user.password));
                    dispatch(getPolls());
                }
            })
            .catch(error => {
                dispatch(updatePollError({ error }));
                if (error.message) {
                    console.log("error: ", error.message);
                }
            })
    }

};
