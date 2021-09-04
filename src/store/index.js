import createStore from './createStore';
import todoReducer, { initialState as todoInitialState } from './todos';

// Initialize Filter List with Todo list
todoInitialState.filterTodos = todoInitialState.todos;
export default createStore(todoReducer, todoInitialState);
