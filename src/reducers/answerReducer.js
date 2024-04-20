const initialState = {
    answers: []
};

const answerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ANSWER_POLL':
            return {
                ...state,
                answers: [...state.answers, { pollId: action.payload.pollId, answer: action.payload.answer }]
            };
        default:
            return state;
    }
};

export default answerReducer;
