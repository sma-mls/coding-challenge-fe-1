import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddToDo from './components/AddTodo';
import FilterToDo from './components/FilterTodo';
import TodoList from './components/TodoList';
import { add, filterList, toggle } from './store/todoActions';

class App extends Component {
    addTodo = (newTodo) => {
        this.props.add(newTodo);
    }
    filterTodo = (appliedFilter) => {
        this.props.filterList(appliedFilter);
    }
    toggleTodo = (todoId) => {
        console.log(todoId);
        this.props.toggle(todoId);
    };
    render() {
        console.log(this.props);
        return (
            <div>
                <form>
                    <AddToDo addTodo={this.addTodo} />
                    <FilterToDo filterTodo={this.filterTodo} />
                </form>
                <TodoList todos={this.props.todos} filter={this.props.filter} toggleTodo={this.toggleTodo} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todoList.todos,
        filter: state.todoList.filter,
    }
};

export default connect(mapStateToProps, { add, filterList, toggle })(App);