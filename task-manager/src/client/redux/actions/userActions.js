import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from './actionTypes';

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      dispatch({ type: FETCH_USERS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
    }
  };
};
