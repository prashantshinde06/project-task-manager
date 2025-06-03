import { SET_STATUS_FILTER, SET_USER_FILTER } from '../actions/actionTypes';

const initialState = {
  status: 'all', // all, completed, pending
  userId: null,
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STATUS_FILTER:
      return { ...state, status: action.payload };
    case SET_USER_FILTER:
      return { ...state, userId: action.payload };
    default:
      return state;
  }
}
