/**
 * Function to handle the store creation
 */
import {applyMiddleware, createStore} from "redux";
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import reducer from "../reducers/index";

const configureStore = () => {
    const middleWares = [promise]

    // enable logging for dev
    if (process.env.NODE_ENV !== 'production') {
        middleWares.push(createLogger())
    }

    return createStore(
        reducer,
        applyMiddleware(...middleWares)
    );
};

export default configureStore;
