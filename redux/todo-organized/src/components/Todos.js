import React from 'react'
import Todo from './Todo'
import v4 from 'uuid'

const Todos = ({
    todos,
    onTodoClick
}) => {
    return (
        <ul>
            {todos.map((todo) => {
                return (
                    <Todo
                        key={v4()}
                        text={todo.text}
                        complete={todo.complete}
                        onClick={() => onTodoClick(todo.id)}
                    />
                )
            })}
        </ul>
    )
};

export default Todos;