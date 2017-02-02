import {v4} from "uuid";
import * as api from "../api";
import {getIsFetching} from "../reducers/createList";

export const fetchTodos = (filter) => (dispatch, getState) => {
    // exit early if new action is dispatched by the user
    if (getIsFetching(getState(), filter)) {
        return Promise.resolve();
    }

    dispatch({
        type: 'FETCH_TODOS_REQUEST',
        filter
    });

    return api.fetchTodos(filter).then(
        response => {
            dispatch({
                type: 'FETCH_TODOS_SUCCESS',
                filter,
                response
            })
        },
        error => {
            dispatch({
                type:'FETCH_TODOS_FAILURE',
                filter,
                message: error.message || 'Something went wrong'
            })
        }
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

