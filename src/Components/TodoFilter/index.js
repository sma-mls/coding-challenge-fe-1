import React from "react";
import { connect } from "react-redux";
import actions from "../../Actions";

import "./style.css";


class TodoFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (val) => {
        this.props.dispatch(actions.filter(val));
    }

    render() {
        var filterValue = this.props.filterValue;
        return (
            <div className="TodoFilter">
                <input type="radio" id="filter_all" value="all" name="todoFilter"  onChange={this.handleChange.bind(this, 'all')} checked={filterValue == "all"}/><label htmlFor="filter_all">All</label>
                <input type="radio" id="filter_open" value="open" name="todoFilter" onChange={this.handleChange.bind(this, 'open')} checked={filterValue == "open"}/><label htmlFor="filter_open">Open</label>
                <input type="radio" id="filter_close" value="close" name="todoFilter" onChange={this.handleChange.bind(this, 'close')} checked={filterValue == "close"} /><label htmlFor="filter_close">Close</label>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filterValue: state.filterValue
    }
}



export default connect(mapStateToProps)(TodoFilter);