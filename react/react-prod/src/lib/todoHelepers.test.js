import {addTodo, deleteTodo, findById, toggleTodo, updateTodo, filterTodo} from "./todoHelpers";

test('adding todo', () => {
    const before = [
        {id: 1, name: 'foo', isComplete: false}
    ]

    const newTodo = {id: 2, name: 'bar', isComplete: false}

    const after = [
        {id: 1, name: 'foo', isComplete: false},
        {id: 2, name: 'bar', isComplete: false}
    ]

    const result = addTodo(before, newTodo)

    expect(after).toEqual(result)

    expect(result).not.toBe(before)
})

test('search by id', () => {
    const todos = [
        {id: 1, name: 'foo', isComplete: false},
        {id: 2, name: 'bar', isComplete: false}
    ]

    const result = {id: 2, name: 'bar', isComplete: false}

    expect(result).toEqual(findById(2, todos))

})

test('update todo', () => {
    const todos = [
        {id: 1, name: 'foo', isComplete: false},
        {id: 2, name: 'bar', isComplete: true}
    ]

    const toggled = {id: 2, name: 'bar', isComplete: false}

    const result = [
        {id: 1, name: 'foo', isComplete: false},
        {id: 2, name: 'bar', isComplete: false}
    ]

    expect(result).toEqual(updateTodo(todos, toggled))
})

test('toggle todo', () => {
    const before = {id: 2, name: 'bar', isComplete: false}
    const after = {id: 2, name: 'bar', isComplete: true}
    expect(after).toEqual(toggleTodo(before))
})


test('handle delete', () => {
    const before = [
        {id: 1, name: 'foo', isComplete: false},
        {id: 2, name: 'bar', isComplete: true}
    ]

    const after = [
        {id: 1, name: 'foo', isComplete: false},
    ]

    expect(after).toEqual(deleteTodo(before, 2))
    expect(before).not.toBe(deleteTodo(before, 2))
})


test('display all todos', () => {
    const before = [
        {id: 1, name: 'foo', isComplete: false},
        {id: 2, name: 'bar', isComplete: true},
        {id: 3, name: 'zyx', isComplete: false}
    ]

    const route = '/all';

    const result = [
        {id: 1, name: 'foo', isComplete: false},
        {id: 2, name: 'bar', isComplete: true},
        {id: 3, name: 'zyx', isComplete: false}
    ]

    expect(result).toEqual(filterTodo(before, route))
})

test('display active todos', () => {
    const before = [
        {id: 1, name: 'foo', isComplete: false},
        {id: 2, name: 'bar', isComplete: true},
        {id: 3, name: 'zyx', isComplete: false}
    ]

    const route = '/active';

    const result = [
        {id: 1, name: 'foo', isComplete: false},
        {id: 3, name: 'zyx', isComplete: false}
    ]

    expect(result).toEqual(filterTodo(before, route))
})

test('display completed todos', () => {
    const before = [
        {id: 1, name: 'foo', isComplete: false},
        {id: 2, name: 'bar', isComplete: true},
        {id: 3, name: 'zyx', isComplete: false}
    ]


    const route = '/complete';

    const result = [
        {id: 2, name: 'bar', isComplete: true}
    ]

    expect(result).toEqual(filterTodo(before, route))

})


test('display all todos for default route', () => {
    const before = [
        {id: 1, name: 'foo', isComplete: false},
        {id: 2, name: 'bar', isComplete: true},
        {id: 2, name: 'zyx', isComplete: false}
    ]

    const route = '/foo';

    const result = [
        {id: 1, name: 'foo', isComplete: false},
        {id: 2, name: 'bar', isComplete: true},
        {id: 2, name: 'zyx', isComplete: false}
    ]

    expect(result).toEqual(filterTodo(before, route))
})