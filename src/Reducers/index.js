const Util = {
    currentId: 0,
    getId() {
        this.currentId += 1;
        return this.currentId;
    },
    filterList(list, type) {
        if (type == 'all') {
            return list;
        } else {
            var flag = type == 'close' ? true : false;
            return list.filter(item => {
                return item.completed == flag;
            });
        }
    }
};

const initialState = {
    todos: [],
    filterValue: 'all',
    filterTodos: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER':
            var filterValue = action.val;
            var filterTodos = Util.filterList(state.todos, filterValue);
            return {
                ...state,
                filterTodos,
                filterValue
            }
        case 'API_TODO_DATA_RECEIVED' : 
            var todos = action.data;
            var filterTodos = Util.filterList(todos, state.filterValue);
            return {...state, todos, filterTodos};
        default:
            return state;
    }
}

export default todoReducer;