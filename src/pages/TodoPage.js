import React, { useState, useEffect } from "react";
import {
    add_todo_list_action,
    get_todo_list_action,
    toggle_todo_item_action
} from "../store/Redux/todo/actions/Todo.actions";
import { connect } from 'react-redux'

function TodoPage({dispatch, todoItems}) {
    useEffect(() => {
        dispatch(get_todo_list_action());
    },[dispatch]);

    const [text, setText] = useState('');

    const toggle = (id) => {
        dispatch(toggle_todo_item_action(id));
    }
    const addToList = () => {
        if(text.length){
            dispatch(add_todo_list_action(text));
            setText('')
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            addToList();
        }
    };

  return (
      <div className="App">
          <div className="form">
              <input type="text" data-element="addTodoInput" value={text} onChange={(event)=>setText(event.target.value)} onKeyDown={handleKeyDown}/>
              <button data-element="addTodoButton" onClick={addToList}>Add</button>
          </div>
          <ul className="todos">
              {todoItems && todoItems.map(item => {
                  return (
                      <li key={item.id} className={`todos__item todos__item_${item.completed && 'checked'}`}>
                          <input type="checkbox" data-element="toggleTodo" data-id="${todo.id}"
                                 checked={!!item.completed} onChange={()=>toggle(item.id)}/>
                          {item.title}
                      </li>
                  )
              })}
          </ul>
      </div>

  );
}

const mapStateToProps = (state, ownProps) => {
    return {
    ...ownProps,
        todoItems: state.todoReducer.data
    }
};

export default connect(mapStateToProps)(TodoPage);
