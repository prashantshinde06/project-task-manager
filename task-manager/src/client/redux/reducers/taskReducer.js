import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  TOGGLE_TASK_COMPLETION,
  DELETE_TASK,
  UPDATE_TASK_STATUS,
  ADD_TASK
} from '../actions/actionTypes';

const initialState = {
  allTask: [],
  loading: false,
  error: null,
};

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TASKS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_TASKS_SUCCESS:
      return { ...state, loading: false, allTask: action.payload };
    case FETCH_TASKS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case TOGGLE_TASK_COMPLETION:
      return {
        ...state,
        allTask: state.allTask.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case UPDATE_TASK_STATUS:
      return {
        ...state,
        allTask: state.allTask.map((task) =>
          task.id === action.payload.id
            ? { ...task, completed: action.payload.completed }
            : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        allTask: state.allTask.filter((task) => task.id !== action.payload),
      };
      case ADD_TASK:
      return {
        ...state,
        allTask: [...state.allTask, action.payload],
      };
    default:
      return state;
  }
}
