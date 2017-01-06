/**
 * Function to handle the store creation
 */
import{ createStore } from 'redux'
import throttle from 'lodash/throttle'
import reducer from '../reducers/index'
import {loadStorage, saveStorage} from './local';

const configureStore = () => {
    const initialState = loadStorage();

    const store = createStore(reducer, initialState);

    store.subscribe( throttle(() => {
        saveStorage(store.getState())
    }), 3000);

    return store;
};

export default configureStore;
