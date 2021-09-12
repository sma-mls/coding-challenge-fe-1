import React from 'react';
import { Button, Card } from 'semantic-ui-react'

const TodoList = ({ todos, filter, toggleTodo, removeTodo }) => {
    const handleDone = (todoId) => {
        toggleTodo(todoId);
    };
    const handleDelete = (todoId) => {
        removeTodo(todoId);
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
        <Card.Group>
            {filteredTodos.map(todo => {
                return (
                    <Card key={todo.id}>
                        <Card.Content>
                            <Card.Header>Task: {todo.title}</Card.Header>
                            {
                                todo.completed &&
                                <Card.Description>
                                    Status: Completed
                                </Card.Description>
                            }
                        </Card.Content>
                        {
                            !todo.completed &&
                            <Card.Content extra>
                                <Button basic color='green' onClick={(e) => handleDone(todo.id)}>
                                    Done
                                </Button>
                                <Button basic color='red' onClick={(e) => handleDelete(todo.id)}>
                                    Delete
                                </Button>
                            </Card.Content>
                        }
                    </Card>
                )
            })}
        </Card.Group>
    );
};

export default TodoList;