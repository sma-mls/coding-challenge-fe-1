import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import appReducer from "./Reducers";
import service from './Services';
import './main.css';
import App from './App';

const store = createStore(appReducer,applyMiddleware(service));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('demo')
);

store.dispatch({ type: 'API_GET_TODO'});