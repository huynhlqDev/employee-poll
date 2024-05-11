import { _getUsers } from "../data/_DATA";
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersError } from "../reduxSlice/usersSlice";

export const getUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest());

        _getUsers()
            .then(users => {
                dispatch(fetchUsersSuccess({ users: Object.values(users) }))
            })
            .catch(error => {
                dispatch(fetchUsersError({ error }))
            })
    };
};