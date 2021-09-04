import React from 'react';
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import TodoFilter from './Components/TodoFilter';

class App extends React.Component {
    render(){
        return(<div>
            <h1>To-Do App</h1>
            <TodoForm />
            <TodoFilter />
            <TodoList />
        </div>);
    }
}

export default App;