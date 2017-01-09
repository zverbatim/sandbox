/**
 * Function to handle the store creation
 */
import {createStore} from "redux";
import reducer from "../reducers/index";

const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log("%c prev state: ", 'color: gray', store.getState())
    console.log("%c action: ", 'color: green', action)
    const returnValue = next(action)
    console.log("%c next state: ", 'color: blue', store.getState())
    console.groupEnd(action.type)
    return returnValue
}

const promise = (store) => (next) => (action) => {
    if (typeof action.then === 'function') {
        return action.then(next)
    }
    return next(action)
}

const addMiddleWaresToDispatch = (store, middleWares) => {
    console.log("middleWares", middleWares)
    middleWares.slice().reverse().forEach(middleWare =>
        store.dispatch = middleWare(store)(store.dispatch)
    )
}

const configureStore = () => {

    const store = createStore(reducer);
    const middleWares = [promise]

    // enable logging for dev
    if (process.env.NODE_ENV !== 'production') {
        middleWares.push(logger)
    }

    addMiddleWaresToDispatch(store, middleWares)

    return store;
};

export default configureStore;
