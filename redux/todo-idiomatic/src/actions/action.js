import {ALL, ACTIVE, COMPLETED} from '../const/index'
import {v4} from 'uuid'

const addTodo = (text) => ({
    type: 'ADD_TODO',
    text: text,
    id: v4()
})


const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})

const getVisibleTodos = (todos, filter) => {
    console.log("filter=", filter)
    switch (filter) {
        case ALL:
            return todos
        case COMPLETED:
            return todos.filter(t => t.complete)
        case ACTIVE:
            return todos.filter(t => !t.complete)
        default:
            return todos
    }
}

module.exports = {
    addTodo,
    toggleTodo,
    getVisibleTodos
}

