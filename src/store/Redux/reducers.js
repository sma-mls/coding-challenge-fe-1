// react library imports
import { combineReducers } from 'redux';
import todoReducer from './todo/reducers/Todo.reducer'

const rootReducer = combineReducers(
  {
      todoReducer
  }
);

export default rootReducer;
