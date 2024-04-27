import { _getQuestions } from "../data/_DATA";

export const createPoll = (poll) => {
    return {
        type: 'CREATE_POLL',
        payload: poll
    };
};

export const getPolls = () => {
    return async (dispatch) => {

        dispatch({ type: 'SET_LOADING', payload: true })

        _getQuestions()
            .then(questions => {
                const value = Object.values(
                    Object.values(questions).map(item => item)
                ).map(item => item)
                dispatch({ type: 'GET_POLLS', payload: value })
                dispatch({ type: 'SET_LOADING', payload: false })
            }).catch(error => {
                if (error.message) {
                    console.log("error: ", error.message)
                }
            })

    };
};
