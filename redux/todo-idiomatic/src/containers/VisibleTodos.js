import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import Todos from "../components/Todos";
import * as actions from "../actions/action";
import {getVisibleTodos} from "../reducers/index";
import {ALL} from "../const/index";

/**
 * Made to add lifecycle hooks
 */
class VisibleTodoList extends Component {

    fetchData() {
        const { filter, fetchTodos } = this.props;
        fetchTodos(filter)
    }

    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter)
            this.fetchData()
    }

    // Inside of `VisibleTodoList`
    render() {
        const { toggleTodo, ...rest } = this.props;

        return (
            <Todos
                {...rest}
                onTodoClick={toggleTodo}
            />
        );
    }
}

const mapStateToProps = (state, {params}) => {
    const filter = params.filter || ALL
    return {
        todos: getVisibleTodos(state, filter),
        filter
    }
}

VisibleTodoList = withRouter(connect(
    mapStateToProps,
    actions
)(VisibleTodoList))

export default VisibleTodoList