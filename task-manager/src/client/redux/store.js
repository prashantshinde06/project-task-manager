import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import tasksReducer from './reducers/taskReducer';
import usersReducer from './reducers/usersReducer';
import filtersReducer from './reducers/filterReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  users: usersReducer,
  filters: filtersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
