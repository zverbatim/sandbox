let nextTodoId = 0;

const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text
});

const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
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
    setVisibilityFilter,
    toggleTodo,
    getVisibleTodos
};

