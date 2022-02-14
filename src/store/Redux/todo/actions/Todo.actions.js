
export const TODO = 'TODO';
export const TODO_SUCCESS = 'TODO_SUCCESS';
export const TODO_FAIL = 'TODO_FAIL';
export const get_todo_list_action = () => ({ type: TODO });


export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUCCESS = 'TODO_SUCCESS';
export const ADD_TODO_FAIL = 'TODO_FAIL';
export const add_todo_list_action = (todo) => ({ type: ADD_TODO, item: todo });


export const TOGGLE = 'TOGGLE';
export const TOGGLE_SUCCESS = 'TOGGLE_SUCCESS';
export const TOGGLE_FAIL = 'TOGGLE_FAIL';
export const toggle_todo_item_action = (id) => ({ type: TOGGLE, id: id });