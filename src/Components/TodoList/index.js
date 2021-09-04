import React from "react";
import { connect } from "react-redux";
import actions from "../../Actions";

import "./style.css"

class TodoList extends React.Component {
    handleCheckboxChange = (id) =>{
        this.props.dispatch(actions.toggle(id));
    }
    renderTodoList = () => {
        var todoItems = [];
        this.props.todos.forEach(todo => {
            todoItems.push(<li key={`${todo.id}`} className={todo.completed ? 'todos_item_checked' : ''}>
            <input type="checkbox" data-id={`${todo.id}`} checked={todo.completed} onChange={this.handleCheckboxChange.bind(this, todo.id)}/>{todo.title}</li>);
        });
        return <ul>{ todoItems }</ul>;
    }

    render() {
        return <div className="TodoList">{ this.renderTodoList() }</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.filterTodos
    }
}
export default connect(mapStateToProps)(TodoList);