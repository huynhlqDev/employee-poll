
export const SET_LOADING = "SET_LOADING"; 

const setIndicatorLoading = (value) => ({ type: SET_LOADING, payload: value });

export const setLoading = (value) => {
    return (dispatch) => {
        dispatch(setIndicatorLoading(value));
    }

}