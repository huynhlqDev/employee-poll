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
            // Logic để lấy danh sách bài thăm dò từ server
            return state;
        default:
            return state;
    }
};

export default pollReducer;
