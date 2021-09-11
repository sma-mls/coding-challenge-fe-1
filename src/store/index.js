import { combineReducers, createStore } from "redux";
import todoList from './todos';

export default createStore(combineReducers({ todoList }));