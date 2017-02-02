import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import Todos from "../components/Todos";
import * as actions from "../actions/action";
import {getIsFetching, getVisibleTodos, getErrorMessage} from "../reducers/index";
import {ALL} from "../const/index";
import FetchError from "../components/FetchError";

/**
 * Made to add lifecycle hooks
 */
class VisibleTodoList extends Component {

    fetchData() {
        const {filter, fetchTodos} = this.props;
        fetchTodos(filter).then(() => console.log('done!'));
    }

    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter)
            this.fetchData()
    }

    render() {
        const {toggleTodo, todos, isFetching, errorMessage} = this.props;

        if (isFetching && !todos.length) {
            return <p>Loading...</p>
        }

        if (errorMessage && !todos.length) {
            return <FetchError
                message={errorMessage}
                onRetry={() => this.fetchData()}
            />
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
        errorMessage: getErrorMessage(state, filter),
        filter
    }
}

VisibleTodoList = withRouter(connect(
    mapStateToProps,
    actions
)(VisibleTodoList))

export default VisibleTodoList