/*********************************
 reducers
 *********************************/
const todo = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {id: action.id, text: action.text, complete: false};
        case 'TOGGLE_TODO':
            return action.id === state.id ? {...state, complete: !state.complete} : state;
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case  'ADD_TODO':
            return [...state, todo(undefined, action)];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state
    }
}

/*********************************
 redux store creation an subscription
 *********************************/
const {createStore, combineReducers} = Redux;
const todoApp = combineReducers({
    todos,
    visibilityFilter
});
const store = createStore(todoApp);

/*********************************
 components
 *********************************/
const Todo = () => {
    return (
        <li>....</li>
    )
};

const Todos = ()=> {
};

const FilterLink = ({children}) => {
    return (
        <a href="#">
            {children}
        </a>
    )
};


let nextId = 0;
class App extends React.Component {
    render() {
        return (
            <div>
                <input type="text"
                       ref="inputAdd"
                />
                {' '}
                <button onClick={()=>{
                    if(this.refs.inputAdd.value){
                        store.dispatch({
                        type: 'ADD_TODO',
                        text: this.refs.inputAdd.value,
                        id:nextId++
                    });
                    this.refs.inputAdd.value = ''}
                    }
                }>
                    add
                </button>

                <ul>
                    {this.props.todos.map((todo) => {
                        return (<li key={todo.key}>{todo.text}</li>)
                    })}
                </ul>

                <p>
                    <FilterLink>All</FilterLink>
                    {' '}
                    <FilterLink>Complete</FilterLink>
                    {' '}
                    <FilterLink>Incomplete</FilterLink>
                </p>
            </div>
        )
    }
}

const render = () => {
    ReactDOM.render(
        <App todos={store.getState().todos}/>,
        document.getElementById('root')
    )
};


/*********************************
 diplay stuff to DOM
 *********************************/
store.subscribe(render);
render();


/*********************************
 tests
 *********************************/
const testToggle = () => {
    const before = [{id: 0, text: "foo", complete: false}, {id: 1, text: "bar", complete: true}];
    const action = {id: 0, type: "TOGGLE_TODO"};
    const after = [{id: 0, text: "foo", complete: true}, {id: 1, text: "bar", complete: true}];
    deepFreeze(before);
    deepFreeze(action);
    expect(todos(before, action))
        .toEqual(after);
};

const testAdd = () => {
    const before = [];
    const action = {type: "ADD_TODO", id: 0, text: "foo"};
    const after = [{id: 0, text: "foo", complete: false}];
    deepFreeze(before);
    deepFreeze(action);
    expect(todos(before, action))
        .toEqual(after);
};

const testTodos = () => {
    let store = createStore(todos);
    expect(store.getState())
        .toEqual([]);
};

const testTodoApp = () => {
    const after = {todos: [], visibilityFilter: 'SHOW_ALL'};
    let store = createStore(todoApp);
    expect(store.getState())
        .toEqual(after)
};
testAdd();
testToggle();
testTodos();
testTodoApp();

console.log("test completed");
