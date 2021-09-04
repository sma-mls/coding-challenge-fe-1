import React from "react";
import { connect } from "react-redux";
import actions from "../../Actions";

// TodoList class component
class TodoList extends React.Component {
    handleCheckboxChange = (id) =>{
        this.props.dispatch(actions.toggle(id));
    }
    renderTodoList = () => {
        var todoItems = [];
        this.props.todos.forEach(todo => {
            var checked = todo.completed ? 'checked' : '';
            todoItems.push(<li key={`${todo.id}`} className={"todos__item todos__item_" + checked}>
            <input type="checkbox" data-id={`${todo.id}`} checked={todo.completed} onChange={this.handleCheckboxChange.bind(this, todo.id)}/>{todo.title}</li>);
        });
        return <ul className="todos">{ todoItems }</ul>;
    }

    render() {
        return <div>{ this.renderTodoList() }</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
export default connect(mapStateToProps)(TodoList);