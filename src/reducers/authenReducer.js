
const initialState = {
    isLoggedIn: false,
    loginInfo: {},
    error: null
};

const authenReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_USERS_SUCCESS':
          return { ...state, isLoggedIn: true, loginInfo: action.payload, error: null };
        case 'FETCH_USERS_FAILURE':
          return { ...state, error: action.payload };
          case 'LOGOUT':
            return {...state, isLoggedIn: false, loginInfo: {}, error: null}
        default:
          return state;
      }
};

export default authenReducer;
