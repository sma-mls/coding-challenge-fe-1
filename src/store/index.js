import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import todoList from './todos';

export default createStore(combineReducers({ todoList }), applyMiddleware(thunk));