import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers/index'

import {loadStorage, saveStorage} from './util/local';

const initialState = loadStorage();

const store = createStore(reducer, initialState);

store.subscribe( () => {
   saveStorage(store.getState())
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);