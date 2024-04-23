const initialState = {
    polls: []
};

const pollReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_POLL':
            return {
                ...state,
                polls: [...state.polls, action.payload]
            };
        case 'GET_POLLS':
            return {
                ...state,
                polls: Object.values(action.payload).map(item => item)
            };
        default:
            return state;
    }
};

export default pollReducer;
