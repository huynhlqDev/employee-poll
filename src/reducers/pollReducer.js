const initialState = {
    polls: []
};

const pollReducer = (state = initialState, action) => {

    switch (action.type) {
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
