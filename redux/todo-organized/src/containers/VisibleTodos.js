import {connect} from "react-redux";
import Todos from "../components/Todos";
import {toggleTodo, getVisibleTodos} from "../actions/action";

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = ({
    onTodoClick: toggleTodo
});

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos);

export default VisibleTodoList