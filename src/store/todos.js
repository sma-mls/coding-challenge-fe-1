const Util = {
  currentId: 0,
  get() {
    this.currentId += 1;
    return this.currentId;
  },
  // common util for filter list
  filterList(list, val){
    if(val == 'all'){
      return list;
    }else{
      var flag = (val == 'close');
      return list.filter( e => {
        return e.completed == flag
      });
    }
  }
};

export const initialState = {
  todos: [
    {
      id: Util.get(),
      title: 'JS-101',
      completed: true
    },
    {
      id: Util.get(),
      title: 'JS-102',
      completed: false
    },
    {
      id: Util.get(),
      title: 'JS-201',
      completed: false
    },
    {
      id: Util.get(),
      title: 'JS-202',
      completed: false
    }
  ],
  filterValue: "all",
  filterTodos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      state.todos.push({
        id: Util.get(),
        title: action.title,
        completed: false
      });
      state.filterTodos = Util.filterList(state.todos, state.filterValue);
      break;
    case 'TOGGLE':
      for (let todo of state.todos) {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
          break;
        }
      }
      break;
    // Added action for filter  
    case 'FILTER':
      state.filterValue = action.value;
      state.filterTodos = Util.filterList(state.todos, action.value);
      break;
  }
}
