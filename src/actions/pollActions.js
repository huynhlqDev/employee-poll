import { _getQuestions } from "../data/_DATA";
import { setLoading } from "./loadingAction";

export const createPoll = (poll) => ({ type: 'CREATE_POLL', payload: poll });
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
