const uniqueId = {
  currentId: 0,
  get() {
    this.currentId += 1;
    return this.currentId;
  }
};

const initialState = {
  filter: 'showAll',
  todos: [
    {
      id: uniqueId.get(),
      title: 'JS-101',
      completed: true
    },
    {
      id: uniqueId.get(),
      title: 'JS-102',
      completed: false
    },
    {
      id: uniqueId.get(),
      title: 'JS-201',
      completed: false
    },
    {
      id: uniqueId.get(),
      title: 'JS-202',
      completed: false
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        todos: [...state.todos, {
          id: uniqueId.get(),
          title: action.payload.title,
          completed: false
        }],
        filter: state.filter
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
  }
  return state;
}
