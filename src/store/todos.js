const initialState = {
  filter: 'showAll',
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TODOS':
      return {
        todos: action.payload.data,
        filter: state.filter,
      }
    case 'CREATE_TODO':
      return {
        todos: [...state.todos, action.payload.data],
        filter: state.filter,
      }
    case 'TOGGLE':
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
        filter: state.filter,
      }
    case 'FILTER':
      return {
        todos: state.todos,
        filter: action.payload.appliedFilter,
      }
    case 'REMOVE':
      return {
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload.id;
        }),
        filter: action.payload.appliedFilter,
      }
  }
  return state;
}
