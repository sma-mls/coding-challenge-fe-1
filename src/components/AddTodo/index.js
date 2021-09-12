import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { StyledLabel } from './styled';

const AddToDo = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState('');
    const handleClick = () => {
        addTodo(newTodo);
    };
    const handleChange = (e) => {
        setNewTodo(e.target.value);
    }
    const handleEnterKeyPress = (e) => {
        if (e.keyCode === 13) {
            addTodo(newTodo);
            setNewTodo('');
        }
    }
    return (
        <>
            <Form.Field>
                <StyledLabel>Add Todo</StyledLabel>
                <input type="text" value={newTodo} onChange={handleChange} onKeyUp={handleEnterKeyPress}></input>
            </Form.Field>
            <Button onClick={handleClick}>Add</Button>
        </>
    );
};

export default AddToDo;