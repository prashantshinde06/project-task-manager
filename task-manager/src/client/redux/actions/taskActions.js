import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  TOGGLE_TASK_COMPLETION,
  DELETE_TASK,
  UPDATE_TASK_STATUS,
  ADD_TASK
} from './actionTypes';

// Thunk to fetch tasks
export const fetchTasks = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TASKS_REQUEST });
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await res.json();
      dispatch({ type: FETCH_TASKS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_TASKS_FAILURE, payload: error.message });
    }
  };
};

export const toggleTaskCompletion = (taskId) => ({
  type: TOGGLE_TASK_COMPLETION,
  payload: taskId,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const updateTaskStatus = (id, completed) => {
  return {
    type: UPDATE_TASK_STATUS,
    payload: { id, completed },
  };
};

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

