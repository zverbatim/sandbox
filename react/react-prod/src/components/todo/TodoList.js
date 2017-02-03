import React from "react";

import {TodoItem} from "./TodoItem";

export const TodoList = (props) => (
    <div className="Todo-List">
        <ul>
            {
                props.todos.map(todo =>
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        handleToggle={props.handleToggle}
                    />)
            }
        </ul>
    </div>
)

TodoList.propTypes = {
    todos: React.PropTypes.array.isRequired,
    // handleToggle: React.PropTypes.func.isRequired
}