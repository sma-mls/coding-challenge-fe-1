import React, { useState, useEffect } from "react";
import {
  add_todo_list_action,
  get_todo_list_action,
  toggle_todo_item_action,
} from "../store/Redux/todo/actions/Todo.actions";
import { connect } from "react-redux";
import { Page } from "../styled/Page";
import { Button } from "../styled/Button";
import { Heading } from "../styled/Heading";
import { InputField } from "../styled/Input";
import styled from "styled-components";

function TodoPage({ dispatch, items }) {
  useEffect(() => {
    dispatch(get_todo_list_action());
  }, [dispatch]);

  useEffect(() => {
    setTodoItems(items);
  }, [items]);

  const [text, setText] = useState("");
  const [todoItems, setTodoItems] = useState(items);
  const [filter, setFilter] = useState("All");

  const toggle = (id) => {
    dispatch(toggle_todo_item_action(id));
  };
  const addToList = () => {
    if (text.length) {
      dispatch(add_todo_list_action(text));
      setText("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addToList();
    }
  };
  const onFilterValue = (event) => {
    let value = event.target.value;
    setFilter(value);
    if (value === "Open") {
      setTodoItems(items.filter((value) => value.completed === false));
    } else if (value === "Closed") {
      setTodoItems(items.filter((value) => value.completed === true));
    } else {
      setTodoItems(items);
    }
  };

  return (
    <div className="App">
      <Page>
        <Heading>TODO LIST</Heading>
        <div className="form">
          <InputField type="text" value={text} onChange={(event) => setText(event.target.value)} onKeyDown={handleKeyDown}
          />
          <Button onClick={addToList}>Add</Button>
        </div>

        <FilterWrapper>
          <span>
            <InputField type="radio" value="All" name="all" checked={filter === "All"} onChange={onFilterValue} width={"25px"}/>
            show All
          </span>
          <span>
            <InputField type="radio" value="Closed" name="closed" checked={filter === "Closed"} onChange={onFilterValue} width={"25px"}/>
            Completed
          </span>
          <span>
            <InputField type="radio" value="Open" name="open" checked={filter === "Open"} onChange={onFilterValue} width={"25px"}/>
            in progress
          </span>
        </FilterWrapper>

        <ul className="todos">
          {todoItems &&
            todoItems.map((item) => {
              return (
                <li key={item.id} className={`todos__item todos__item_${item.completed && "checked"}`}>
                  <input type="checkbox" data-id="${todo.id}" checked={!!item.completed} onChange={() => toggle(item.id)}/>
                  {item.title}
                </li>
              );
            })}
        </ul>
      </Page>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    items: state.todoReducer.data,
  };
};

export default connect(mapStateToProps)(TodoPage);

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
