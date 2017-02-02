import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import Todos from "../components/Todos";
import * as actions from "../actions/action";
import {getVisibleTodos, getIsFetching} from "../reducers/index";
import {ALL} from "../const/index";

/**
 * Made to add lifecycle hooks
 */
class VisibleTodoList extends Component {

    fetchData() {
        const { filter, requestTodos, fetchTodos } = this.props;
        requestTodos(filter)
        fetchTodos(filter)
    }

    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter)
            this.fetchData()
    }

    render() {
        const { toggleTodo, todos, isFetching } = this.props;
        if(isFetching && !todos.length){
            return <p>Loading...</p>
        }
        return (
            <Todos
                todos={todos}
                onTodoClick={toggleTodo}
            />
        );
    }
}

const mapStateToProps = (state, {params}) => {
    const filter = params.filter || ALL
    return {
        todos: getVisibleTodos(state, filter),
        isFetching: getIsFetching(state, filter),
        filter
    }
}

VisibleTodoList = withRouter(connect(
    mapStateToProps,
    actions
)(VisibleTodoList))

export default VisibleTodoList