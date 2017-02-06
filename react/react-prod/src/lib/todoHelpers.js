export const addTodo = (list, item) => [...list, item]

export const generatedId = () => Math.floor(Math.random() * 100000)

export const findById = (id, list) => list.find(it => it.id === id)

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete})

export const updateTodo = (list, updated) => {
    const updatedIndex = list.findIndex(item => item.id === updated.id)
    return [
        ...list.slice(0, updatedIndex),
        updated,
        ...list.slice(updatedIndex+1)
    ]
}

export const deleteTodo = (list, id) => list.filter(todo => todo.id !== id)

export const filterTodo =(list, route) => {
    switch (route){
        case '/active':
            return list.filter(todo => !todo.isComplete)
        case '/complete':
            return list.filter(todo => todo.isComplete)
        default:
            return list

    }

}