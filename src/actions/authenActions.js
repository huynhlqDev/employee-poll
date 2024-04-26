
import { _getUser } from "../data/_DATA";
import { _saveLoginUser } from "../data/existingUsers";


export const login = (username, password) => {
  return async (dispatch) => {

    dispatch({ type: 'SET_LOADING', payload: true })

    try {
      const user = await _getUser(username, password);
      _saveLoginUser(user)
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false })
    }

  };

};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: 'LOGOUT' });
  };
};