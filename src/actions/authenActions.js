import { _getUser } from "../data/_DATA";
import { _saveLoginUser } from "../data/existingUsers";
import { fetchUserRequest, fetchUserSuccess, fetchUserError, clearUser } from "../reduxSlice/userSlice";


export const login = (username, password) => {
  return (dispatch) => {

    dispatch(fetchUserRequest());

    _getUser(username, password)
      .then(user => {
        dispatch(fetchUserSuccess({user}));
        _saveLoginUser(user);
      })
      .catch(error => {
        dispatch(fetchUserError({error}));
      });
  };

};

export const logout = () => {
  return (dispatch) => {
    dispatch(clearUser());
  };
};