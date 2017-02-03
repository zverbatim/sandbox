import * as schema from "./schema";
import {normalize} from "normalizr";
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
            const normalized = normalize(response, schema.arrayOfTodosSchema)
            console.log("normalized", normalized)
            dispatch({
                type: 'FETCH_TODOS_SUCCESS',
                filter,
                response: normalized
            })
        },
        error => {
            dispatch({
                type: 'FETCH_TODOS_FAILURE',
                filter,
                message: error.message || 'Something went wrong'
            })
        }
    )
}

export const addTodo = (text) => (dispatch) =>
    api.addTodo(text).then(
        response => {
            const normalized = normalize(response, schema.todoSchema)
            dispatch({
                type: 'ADD_TODO_SUCCESS',
                response: normalized
            })
        }
    )


export const toggleTodo = (id) => (dispatch) =>
    api.toggleTodo(id).then(response => {
        const normalized = normalize(response, schema.todoSchema)
        dispatch({
            type: 'TOGGLE_TODO_SUCCESS',
            response: normalized
        })
    })

