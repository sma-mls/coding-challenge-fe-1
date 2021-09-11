import React from 'react';
import './todList.css';

const TodoList = ({ todos, filter, toggleTodo }) => {
    const handleClick = (todoId) => {
        toggleTodo(todoId);
    };
    const getStyle = (todo) => {
        let classes = 'todos__item';
        if(todo.completed){
            classes+=' todos__item_checked';
        }
        return classes;
    };
    let filteredTodos;
    if (filter === 'completed') {
        filteredTodos = todos.filter((todo) => {
            return todo.completed;
        });
    } else if (filter === 'notCompleted') {
        filteredTodos = todos.filter((todo) => {
            return !todo.completed;
        });
    } else {
        filteredTodos = todos;
    }
    return (
        <ul className="todos">
            {filteredTodos.map(todo => {
                return (<li key={todo.id} className={getStyle(todo)}>
                    <input type="checkbox" checked={todo.completed} onClick={(e) => handleClick(todo.id)}></input>
                    {todo.title}
                </li>)
            })}
        </ul>
    );
};

export default TodoList;