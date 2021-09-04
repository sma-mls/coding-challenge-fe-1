import api from "./api"

const service = store => next => action => {
    console.log(action);
    switch (action.type) {
        case 'API_GET_TODO':
            console.log('Get called');
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
                    console.log(response);
                    next({type:'API_GET_TODO'});
                });
    }
}

export default service