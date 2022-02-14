import React, {useState} from 'react';
import store from "./store";
import * as todoActions from "./store/todoActions";

function App() {
  const todoItems = store.getState();
  const [text, setText] = useState('');

  const toggle = (id) => {
    store.dispatch(todoActions.toggle(id));
  }
  const addToList = () => {
      if(text.length){
          store.dispatch(todoActions.add(text));
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
          {todoItems && todoItems.todos.map(item => {
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

export default App;

