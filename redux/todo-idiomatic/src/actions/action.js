import {v4} from 'uuid';

const addTodo = (text) => ({
    type: 'ADD_TODO',
    text: text,
    id: v4()
});


const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETE':
            return todos.filter(t => t.complete);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.complete);
        default:
            return todos;
    }
};

module.exports = {
    addTodo,
    toggleTodo,
    getVisibleTodos
};

