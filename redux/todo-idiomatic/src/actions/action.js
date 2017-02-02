import {v4} from "uuid";
import * as api from "../api";
import {getIsFetching} from '../reducers/createList'



const requestTodos = (filter) => ({
    type: 'REQUEST_TODOS',
    filter
})

const receiveTodos = (filter, response) => ({
    type: 'RECEIVE_TODOS',
    filter,
    response
})

export const fetchTodos = (filter) => (dispatch, getState)=> {
    // exit early if new action is dispatched by the user
    if (getIsFetching(getState(), filter)) {
        return Promise.resolve();
    }

    dispatch(requestTodos(filter));

    return api.fetchTodos(filter).then(response =>
        dispatch(receiveTodos(filter, response))
    )
}

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    text: text,
    id: v4()
})


export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})

