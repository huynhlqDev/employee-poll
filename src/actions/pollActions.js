import { _getQuestions } from "../data/_DATA";

export const createPoll = (poll) => {
    return {
        type: 'CREATE_POLL',
        payload: poll
    };
};

export const getPolls = () => {
    return async (dispatch) => {

        _getQuestions()
            .then(questions => {
                const value = Object.values(
                    Object.values(questions).map(item => item)
                ).map(item => item)
                dispatch({ type: 'GET_POLLS', payload: value })
            }).catch(error => {
                if (error.message) {
                    console.log("error: ", error.message)
                }
            })

    };
};
