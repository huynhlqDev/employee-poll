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
        case 'FETCH_ALL_POLLS':
            return {
                ...state,
                polls: action.payload
            };
        default:
            return state;
    }

};

export default pollReducer;
