import React, { useState } from 'react';

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
            <input type="text" value={newTodo} onChange={handleChange} onKeyUp={handleEnterKeyPress}></input>
            <button onClick={handleClick}>Add</button>
        </>
    );
};

export default AddToDo;