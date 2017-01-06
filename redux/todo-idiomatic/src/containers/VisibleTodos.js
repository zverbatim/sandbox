import {connect} from "react-redux"
import {withRouter} from "react-router"
import Todos from "../components/Todos"
import {toggleTodo, getVisibleTodos} from "../actions/action"
import {ALL} from '../const/index'

const mapStateToProps = (state, {params}) => ({
    todos: getVisibleTodos(state.todos, params.filter || ALL)
})

const mapDispatchToProps = ({
    onTodoClick: toggleTodo
})

const VisibleTodoList = withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Todos)
)

export default VisibleTodoList