import api from "./api"

const service = store => next => action => {
    next(action);
    switch (action.type) {
        case 'API_GET_TODO':
            api.getAllTodo()
                .then((response) => {
                    next({
                        type: 'API_TODO_DATA_RECEIVED',
                        data: response.data
                    })
                })
            break;
        case 'API_ADD_TODO':
            api.addTodo(action.title)
                .then((response) => {
                    store.dispatch({ type: 'API_GET_TODO' });
                });
            break;
        default: break;
    }
}

export default service