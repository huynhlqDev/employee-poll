import { _getQuestions, _saveQuestionAnswer } from "../data/_DATA";
import { login } from "./authenActions";
import { setLoading } from "./loadingAction";

export const fetchAllPolls = (poll) => ({ type: 'FETCH_ALL_POLLS', payload: poll });

export const getPolls = () => {
    return (dispatch) => {
        dispatch(setLoading(true));
        
        _getQuestions()
            .then(questions => {
                const polls = Object.values(
                    Object.values(questions).map(item => item)
                ).map(item => item)
                dispatch(fetchAllPolls(polls))
            })
            .catch(error => {
                if (error.message) {
                    console.log("error: ", error.message)
                }
            })
            .finally(() => {
                dispatch(setLoading(false));
            })

    };
};

export const answerPoll = (user, qid, answer) => {
    return (dispatch) => {
        dispatch(setLoading(true));

        const authedUser = user.id;
        _saveQuestionAnswer({ authedUser, qid, answer })
            .then(result => {
                if (result) {
                    dispatch(login(user.id, user.password))
                    dispatch(getPolls());
                }
            })
            .catch(error => {
                if (error.message) {
                    console.log("error: ", error.message)
                }
            })
            .finally(() => {
                dispatch(setLoading(false));
            })
    }

};
