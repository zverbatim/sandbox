import {connect} from "react-redux"
import {withRouter} from "react-router"
import Todos from "../components/Todos"
import {toggleTodo} from "../actions/action"
import {getVisibleTodos} from '../reducers/index'
import {ALL} from '../const/index'

const mapStateToProps = (state, {params}) => ({
    todos: getVisibleTodos(state, params.filter || ALL)
})

// using the shorter notation
// works when var name in dispatch = var name in the action creator
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