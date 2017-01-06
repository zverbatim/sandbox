/**
 * Function to handle the store creation
 */
import {createStore} from "redux";
import throttle from "lodash/throttle";
import reducer from "../reducers/index";
import {loadStorage, saveStorage} from "./local";

const enhancedDispatch = (store) => {
    const rawDispatch = store.dispatch

    // returns a function with same signature as store.dispatch
    return (action) => {
        console.group(action.type)
        console.log("%c prev state: ",'color: gray', store.getState())
        console.log("%c action: ", 'color: green', action)
        const returnValue = rawDispatch(action)
        console.log("%c next state: ",'color: blue', store.getState())
        console.groupEnd(action.type)
        return returnValue
    }
}

const configureStore = () => {
    const initialState = loadStorage();

    const store = createStore(reducer, initialState);

    // enable logging for dev
    if(process.env.NODE_ENV !== 'production'){
        store.dispatch = enhancedDispatch(store)
    }

    store.subscribe(throttle(() => {
        saveStorage(store.getState())
    }), 3000);

    return store;
};

export default configureStore;
