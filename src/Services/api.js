import axios from 'axios'
const api = {
    getAllTodo: () => {
        return axios.get('https://jsonplaceholder.typicode.com/users/1/todos');
    },
    addTodo: (title) => {
        return axios.post('https://jsonplaceholder.typicode.com/users/1/todos', { title: title, completed: false});
    },
    updateTodo: () => {

    }
}

export default api;