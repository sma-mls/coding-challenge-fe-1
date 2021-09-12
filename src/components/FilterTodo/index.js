import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { StyledLabel, StyledSelect } from './styled';

const FilterToDo = ({filterTodo}) => {
    const [appliedFilter, setAppliedFilter] = useState('showAll');
    const handleChange = (event) => {
        setAppliedFilter(event.target.value);
        filterTodo(event.target.value);
    };
    return (
        <Form.Field>
            <StyledLabel>Apply a filter</StyledLabel>
            <StyledSelect value={appliedFilter} onChange={handleChange}>
                <option value="showAll">Show All</option>
                <option value="completed">Completed</option>
                <option value="notCompleted">Not Completed</option>
            </StyledSelect>
        </Form.Field>
    );
};

export default FilterToDo;