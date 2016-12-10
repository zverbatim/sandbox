let divCounter = document.getElementById('counter');

/**
 * The reducer that manage state updates
 * @param state
 * @param action
 * @returns
 */
const counter = (state = 0, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'INCREMENT10':
            return state + 10;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    // how internal state is changed
    const dispatch = (action) => {
        console.log("dispatch: ", action)
        state = reducer(state, action);
        listeners.forEach(l => l());
    };

    // push into an array anytime it's called
    const subscribe = (listener) => {
        console.log("subscribe: ", listener);
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l=> l !== listener)
        }
    };

    // make sure the initial state populated
    dispatch({});

    return {getState, dispatch, subscribe};
};


// specify the reducer, so it knows how to update the state with actions
const store = createStore(counter);

// the listener: renders to the body
const render = ()=> {
    divCounter.innerHTML = store.getState();
};
render();

// register a callback when an action is dispatch
store.subscribe(render);

document
    .getElementById("increment")
    .addEventListener('click', () => {
        store.dispatch({type: 'INCREMENT'})
    });

document
    .getElementById("decrement")
    .addEventListener('click', () => {
        store.dispatch({type: 'DECREMENT'})
    });

document
    .getElementById("increment10")
    .addEventListener('click', () => {
        store.dispatch({type: 'INCREMENT10'})
    });
