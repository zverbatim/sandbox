/**
 * Function to handle the store creation
 */
import {applyMiddleware, createStore} from "redux";
import createLogger from "redux-logger";
import thunk from 'redux-thunk'
import reducer from "../reducers/index";

const configureStore = () => {
    const middleWares = [thunk]

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
