import {combineReducers} from "redux";
import byId from "./byId";
import * as fromById from "./byId";
import createList from "./createList";
import * as fromList from "./createList";


const listByFilter = combineReducers({
    all: createList('all'),
    active: createList('active'),
    completed: createList('completed')
})

const todos = combineReducers({
    byId,
    listByFilter
});


export const getVisibleTodos = (state, filter) => {
    const ids = fromList.getIds(state.listByFilter[filter])
    return ids.map(id => fromById.getTodo(state.byId, id))
};

export const getIsFetching = (state, filter) => {
    fromList.getIsFetching(state.listByFilter[filter])
}

export default todos;