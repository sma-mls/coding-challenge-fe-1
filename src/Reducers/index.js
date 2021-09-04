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
    todos: [
        {
            id: Util.getId(),
            title: 'JS-101',
            completed: true
        },
        {
            id: Util.getId(),
            title: 'JS-102',
            completed: false
        },
        {
            id: Util.getId(),
            title: 'JS-201',
            completed: false
        },
        {
            id: Util.getId(),
            title: 'JS-202',
            completed: false
        }
    ],
    filterValue: 'all',
    filterTodos: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT' : 
            var todos = [...state.todos];
            var filterTodos = Util.filterList(todos, state.filterValue);
            return {
                ...state,
                filterTodos,
                todos
            }
        case 'ADD':
            var todos = [...state.todos];
            todos.push({
                id: Util.getId(),
                title: action.title,
                completed: false
            });
            var filterTodos = Util.filterList(todos, state.filterValue);
            return {
                ...state,
                filterTodos,
                todos
            }
        case 'TOGGLE':
            var todos = [...state.todos]
            for (let todo of todos) {
                if (todo.id === action.id) {
                    todo.completed = !todo.completed;
                    break;
                }
            }
            var filterTodos = Util.filterList(todos, state.filterValue);
            return {
                ...state,
                filterTodos
            }

        case 'FILTER':
            var filterValue = action.val;
            var filterTodos = Util.filterList(state.todos, filterValue);
            return {
                ...state,
                filterTodos,
                filterValue
            }
        default:
            return state;
    }
}

export default todoReducer;