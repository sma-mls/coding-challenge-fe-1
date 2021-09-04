import React from 'react';
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

//Created App class and added Form and List as component
class App extends React.Component {
    render(){
        return(<div>
            <h1>To-Do App</h1>
            <TodoForm />
            <TodoList />
        </div>);
    }
}

export default App;