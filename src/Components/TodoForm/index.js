import React from "react";
import { connect } from "react-redux";
import actions from "../../Actions";

// Todo Form Component
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

    handleAdd = () => {
        this.props.dispatch(actions.add(this.state.todoTitle));
    }
    render() {
        return (<div className="form">
            <input type="text" onChange={this.handleChange} value={this.state.todoTitle} /><button onClick={this.handleAdd}>Add</button>
        </div>);
    }
}

export default connect()(TodoForm);