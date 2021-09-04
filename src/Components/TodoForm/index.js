import React from "react";
import { connect } from "react-redux";
import actions from "../../Actions";

import "./style.css";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoTitle: ""
        };
    }

    handleChange = (e) => {
        this.setState({
            todoTitle: e.target.value
        });
    }

    handleKeyPress = (e) => {
        if (e.charCode == 13) {
            if (this.state.todoTitle != '') {
                this.props.dispatch(actions.add(this.state.todoTitle));
                this.setState({
                    todoTitle: ""
                });
            }
        }
    }

    handleAdd = () => {
        if(this.state.todoTitle != '')
            this.props.dispatch(actions.add(this.state.todoTitle));
    }
    render() {
        return (<div className="TodoForm">
            <input placeholder="Add Note" type="text" onKeyPress={this.handleKeyPress} onChange={this.handleChange} value={this.state.todoTitle} />
            <button onClick={this.handleAdd}>Add</button>
        </div>);
    }
}

export default connect()(TodoForm);