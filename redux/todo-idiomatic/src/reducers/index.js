import todos, {getVisibleTodos as  _getVisibleTodos} from "./todos";
import {combineReducers} from "redux";

const todoApp = combineReducers({
        todos
    }
)

export const getVisibleTodos = (state, filter) =>
    _getVisibleTodos(state.todos, filter)

export default todoApp