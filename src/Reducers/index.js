const uniqueId = {
    currentId: 0,
    get() {
        this.currentId += 1;
        return this.currentId;
    }
};

const initialState = {
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

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            var todos = [...state.todos];
            todos.push({
                id: uniqueId.get(),
                title: action.title,
                completed: false
            });
            return {
                ...state,
                todos
            }
            break;
        case 'TOGGLE':
            var todos = [...state.todos];
            for (let todo of todos) {
                if (todo.id === action.id) {
                    todo.completed = !todo.completed;
                    break;
                }
            }
            return {
                ...state,
                todos
            }
            break;
        default:
            return state;
    }
}

export default todoReducer;