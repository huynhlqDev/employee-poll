import { _getUsers } from "../data/_DATA";
import { setLoading } from "./loadingAction";

export const fetchAllPolls = (poll) => ({ type: 'FETCH_ALL_POLLS', payload: poll });

export const FETCH_ALL_USERS_SUCCESS = "FETCH_ALL_USERS_SUCCESS";
export const FETCH_ALL_USERS_FAILURE = "FETCH_ALL_USERS_FAILURE";

export const fetchAllUsersSuccess = (users) => ({ type: 'FETCH_ALL_USERS_SUCCESS', payload: users });
export const fetchAllUsersFailure = (error) => ({ type: 'FETCH_ALL_USERS_FAILURE', payload: error });

export const getUsers = () => {
    return (dispatch) => {
        dispatch(setLoading(true));

        _getUsers()
            .then(users => {
                dispatch(fetchAllUsersSuccess(Object.values(users)))
            })
            .catch(error => {
                dispatch(fetchAllUsersFailure(error))
            })
            .finally(() => {
                dispatch(setLoading(false));
            });
    };
};