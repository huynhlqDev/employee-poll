import {
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,
  LOGOUT_SUCCESS
} from '../actions/authenActions'

const initialState = {
  loading: false,
  isLoggedIn: false,
  user: null,
  error: null
};

const authenReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        user: action.payload
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    default:
      return state;
  }
}

export default authenReducer;
