import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './main.css';
import configureStore from '../src/store/Redux/store';


ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>

    ,
    document.getElementById('demo')
);