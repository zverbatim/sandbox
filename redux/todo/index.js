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

const FilterLink = ({
    filter,
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
                    onClick(filter);
                }}
            >
                {children}
            </a>
        )
    }
};

const Header = ({
    currentFilter,
    onClick
}) => {
    return (
        <p>
            <FilterLink
                filter={'SHOW_ALL'}
                current={currentFilter === 'SHOW_ALL'}
                onClick={onClick}
            >
                All
            </FilterLink>
            {' '}
            <FilterLink
                filter={'SHOW_ACTIVE'}
                current={currentFilter === 'SHOW_ACTIVE'}
                onClick={onClick}
            >
                Active
            </FilterLink>
            {' '}
            <FilterLink
                filter={'SHOW_COMPLETE'}
                current={currentFilter === 'SHOW_COMPLETE'}
                onClick={onClick}
            >
                Completed
            </FilterLink>
            {' '}
        </p>
    )
};

const AddTodo = ({
    onAddClick
}) => {
    let input;
    return (
        <div>
            <input type="text"
                   ref={(node) => input = node}
            />
            {' '}
            <button onClick={() => {
                if (input.value) {
                    onAddClick(input.value);
                    input.value = ''
                }
            }}>
                add
            </button>
        </div>
    )
};


let nextId = 0;
const App = ({
    todos,
    visibilityFilter
}) => {
    return (
        <div>
            <Header
                currentFilter={store.getState().visibilityFilter}
                onClick={ filter => {
                    store.dispatch({
                        type: 'SET_VISIBILITY_FILTER',
                        filter: filter
                    })
                }}
            />

            <AddTodo onAddClick={text => {
                store.dispatch({
                    type: 'ADD_TODO',
                    id: nextId++,
                    text
                });
            }}/>

            <Todos
                todos={getVisibleTodos(todos, visibilityFilter)}
                onTodoClick={id => {
                    store.dispatch({
                        type: 'TOGGLE_TODO',
                        id
                    })
                }}/>
        </div>
    )
};

const render = () => {
    ReactDOM.render(
        <App
            todos={store.getState().todos}
            visibilityFilter={store.getState().visibilityFilter}
        />,
        document.getElementById('root')
    )
};


/*********************************
 display stuff to DOM
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
