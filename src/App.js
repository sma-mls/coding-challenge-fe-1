import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import AddToDo from './components/AddTodo';
import FilterToDo from './components/FilterTodo';
import TodoList from './components/TodoList';
import { add, filterList, toggle, remove } from './store/todoActions';
import { StyledWrapper } from './styled';

class App extends Component {
    addTodo = (newTodo) => {
        this.props.add(newTodo);
    }
    filterTodo = (appliedFilter) => {
        this.props.filterList(appliedFilter);
    }
    toggleTodo = (todoId) => {
        this.props.toggle(todoId);
    };
    removeTodo = (todoId) => {
        this.props.remove(todoId);
    };
    render() {
        console.log(this.props);
        return (
            <StyledWrapper>
                <Form>
                    <AddToDo addTodo={this.addTodo} />
                    <FilterToDo filterTodo={this.filterTodo} />
                </Form>
                <TodoList todos={this.props.todos} filter={this.props.filter} toggleTodo={this.toggleTodo} removeTodo={this.removeTodo} />
            </StyledWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todoList.todos,
        filter: state.todoList.filter,
    }
};

export default connect(mapStateToProps, { add, filterList, toggle, remove })(App);