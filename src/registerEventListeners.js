import store from './store';
import * as todoActions from './store/todoActions';

function addListener(eventName, selector, callback) {
  document.body.addEventListener(eventName, e => {
    if (e.target.matches(selector)) {
      return callback(e);
    }
  });
}

addListener('click', '[data-element="addTodoButton"]', () => {
  const todoInput = document.querySelector('[data-element="addTodoInput"]');
  store.dispatch(todoActions.add(todoInput.value));
});

addListener('click', '[data-element="toggleTodo"]', e => {
  const id = Number(e.target.dataset.id);
  store.dispatch(todoActions.toggle(id));
});

// Added additional listener to handle keypress
addListener('keypress', '[data-element="addTodoInput"]', e => {
  if(e.charCode === 13){
    const todoInput = document.querySelector('[data-element="addTodoInput"]');
    store.dispatch(todoActions.add(todoInput.value));
  }
});