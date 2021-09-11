import React, { useState } from 'react';

const FilterToDo = ({filterTodo}) => {
    const [appliedFilter, setAppliedFilter] = useState('showAll');
    const handleChange = (event) => {
        setAppliedFilter(event.target.value);
        filterTodo(event.target.value);
    };
    return (
        <>
            <p>Apply a filter</p>
            <select value={appliedFilter} onChange={handleChange}>
                <option value="showAll">Show All</option>
                <option value="completed">Completed</option>
                <option value="notCompleted">Not Completed</option>
            </select>
        </>
    );
};

export default FilterToDo;