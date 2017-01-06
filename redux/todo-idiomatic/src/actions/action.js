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

module.exports = {
    addTodo,
    toggleTodo
}

