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
};

const getVisibleTodos = (todos = [], filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.complete)
        case 'SHOW_COMPLETE':
            return todos.filter(t => t.complete);
        default:
            return todos;
    }
};


/*********************************
 components
 *********************************/
const Todo = ({
    text,
    complete,
    onClick
}) => {
    return (
        <li onClick={onClick}
            style={{textDecoration: complete ? 'line-through' : 'none'}}
        >
            {text}
        </li>
    )
};

const Todos = ({
    todos,
    onTodoClick
}) => {
    return (
        <ul>
            {todos.map((todo) => {
                return (
                    <Todo
                        text={todo.text}
                        complete={todo.complete}
                        onClick={() => onTodoClick(todo.id)}
                    />
                )
            })}
        </ul>
    )
};

const Link = ({
    current,
    onClick,
    children
}) => {

    if (current) {
        return <span>{children}</span>
    }
    else {
        return (
            <a
                href="#"
                onClick={e => {
                    e.preventDefault();
                    onClick()
                }}
            >
                {children}
            </a>
        )
    }
};

class FilterLink extends React.Component {

    componentDidMount() {
        const {store} = this.context;
        this.unsuscribe = store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount() {
        this.unsuscribe();
    }

    render() {
        const {store} = this.context;
        const props = this.props;
        const state = store.getState();
        return (
            <Link
                current={state.visibilityFilter === props.filter}
                onClick={() => {
                    store.dispatch({
                        type: 'SET_VISIBILITY_FILTER',
                        filter: props.filter
                    })
                }}
            >
                {props.children}
            </Link>
        )
    }
}
FilterLink.contextTypes = {
    store: React.PropTypes.object
};


const Header = () => {
    return (
        <p>
            <FilterLink
                filter={'SHOW_ALL'}
            >
                All
            </FilterLink>
            {' '}
            <FilterLink
                filter={'SHOW_ACTIVE'}
            >
                Active
            </FilterLink>
            {' '}
            <FilterLink
                filter={'SHOW_COMPLETE'}
            >
                Completed
            </FilterLink>
            {' '}
        </p>
    )
};


const AddTodo = (props, {store}) => {
    let input;
    return (
        <div>
            <input type="text"
                   ref={(node) => input = node}
            />
            {' '}
            <button onClick={() => {
                if (input.value) {
                    store.dispatch({
                        type: 'ADD_TODO',
                        id: nextId++,
                        text: input.value
                    });
                    input.value = ''
                }
            }}>
                add
            </button>
        </div>
    )
};

AddTodo.contextTypes = {
    store: React.PropTypes.object
};

class VisibleTodos extends React.Component {
    componentDidMount() {
        const {store} = this.context;
        this.unsuscribe = store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount() {
        this.unsuscribe();
    }

    render() {
        const {store} = this.context;
        const state = store.getState();
        return (
            <Todos
                todos={getVisibleTodos(state.todos, state.visibilityFilter)}
                onTodoClick={id => {
                    store.dispatch({
                        type: 'TOGGLE_TODO',
                        id
                    })
                }}
            />
        )
    }
}

// so it can receive it
VisibleTodos.contextTypes = {
    store: React.PropTypes.object
};

class Provider extends React.Component {
    // !required to it can pass the store props to the children
    // it is called by React
    getChildContext() {
        return {
            store: this.props.store
        }
    }

    render() {
        return this.props.children;
    }
}
//must specify the props type that will be sent down to the conxt
Provider.childContextTypes = {
    store: React.PropTypes.object
};


let nextId = 0;
const App = () => {
    return (
        <div>
            <Header />
            <AddTodo />
            <VisibleTodos />
        </div>
    )
};


/*********************************
 redux store creation an subscription
 *********************************/
const {createStore, combineReducers} = Redux;
const todoApp = combineReducers({
    todos,
    visibilityFilter
});


/*********************************
 display stuff to DOM
 each container then handles
 it's own subscribe to the store changes
 *********************************/

ReactDOM.render(
    <Provider store={createStore(todoApp)}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


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
