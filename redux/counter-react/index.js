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

const { createStore } = Redux;
let store = createStore(counter);

const Counter = ({
    value,
    increment,
    decrement
    }) => (<div>
        <h1>{value}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
);

const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            increment={() => store.dispatch({type: 'INCREMENT'})}
            decrement={()=> store.dispatch({type: 'DECREMENT'})}
        />,
        document.getElementById('root')
    );
}

store.subscribe(render);
render();