import { SET_STATUS_FILTER, SET_USER_FILTER } from './actionTypes';

export const setStatusFilter = (status) => ({
  type: SET_STATUS_FILTER,
  payload: status, // 'all', 'completed', 'pending'
});

export const setUserFilter = (userId) => ({
  type: SET_USER_FILTER,
  payload: userId, // null or userId
});
