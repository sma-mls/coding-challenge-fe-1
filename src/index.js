import './main.css';

import todoStore from './todoStore';
import render from './render';
import './registerEventListeners';


const rootElement = document.getElementById('demo');

todoStore.subscribe(() => render(rootElement, todoStore.getState()))
render(rootElement, todoStore.getState());
