
import { _getUser } from "../data/_DATA";
import { _saveLoginUser } from "../data/existingUsers";

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

const fetchUserRequest = () => ({ type: FETCH_USER_REQUEST });
const fetchUserSuccess = (user) => ({ type: FETCH_USER_SUCCESS, payload: user });
const fetchUserFailure = (error) => ({ type: FETCH_USER_FAILURE, payload: error });
const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });
const showLoading = () => ({ type: 'SET_LOADING', payload: true })
const hidenLoading = () => ({ type: 'SET_LOADING', payload: false })


export const login = (username, password) => {
  return (dispatch) => {

    dispatch(showLoading())
    dispatch(fetchUserRequest())

    _getUser(username, password)
      .then(user => {
        dispatch(fetchUserSuccess(user))
        _saveLoginUser(user)
      })
      .catch(error => {
        dispatch(fetchUserFailure(error))
      })
      .finally(() => {
        dispatch(hidenLoading())
      })

  };

};

export const logout = () => {
  return (dispatch) => {
    dispatch(logoutSuccess());
  };
};