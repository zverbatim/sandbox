/**
 * Function to handle the store creation
 */
import {createStore} from "redux";
import reducer from "../reducers/index";

const addLoggingToDispatch = (store) => {
    const rawDispatch = store.dispatch

    // returns a function with same signature as store.dispatch
    return (action) => {
        console.group(action.type)
        console.log("%c prev state: ", 'color: gray', store.getState())
        console.log("%c action: ", 'color: green', action)
        const returnValue = rawDispatch(action)
        console.log("%c next state: ", 'color: blue', store.getState())
        console.groupEnd(action.type)
        return returnValue
    }
}

const addPromiseSupportToDispatch = (store) => {
    const rawDispatch = store.dispatch
    return (action) => {
        if (typeof action.then === 'function') {
            return action.then(rawDispatch)
        }
        return rawDispatch(action)
    }
}

const configureStore = () => {

    const store = createStore(reducer);

    // enable logging for dev
    if (process.env.NODE_ENV !== 'production') {
        store.dispatch = addLoggingToDispatch(store)
    }

    store.dispatch = addPromiseSupportToDispatch(store)

    return store;
};

export default configureStore;
