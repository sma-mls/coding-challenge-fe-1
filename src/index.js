// import './main.css';

// import store from './store';
// import render from './render';
// import './registerEventListeners';

// const rootElement = document.getElementById('demo');

// store.subscribe(() => render(rootElement, store.getState()));
// render(rootElement, store.getState());

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import './main.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);