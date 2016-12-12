/*********************************
 reducers
 *********************************/

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {id: action.id, text: action.text, complete: false};
        case 'TOGGLE_TODO':
            return action.id === state.id ? {...state, complete: !state.complete} : state;
        default:
            return false;
    }
};

const todos = (state, action) => {
    switch (action.type) {
        case  'ADD_TODO':
            return [...state, todo(undefined, action)];
        case 'TOGGLE_TODO':
            return state.map((v, i) => todo(v, action))
    }
};

const visibilityFilter = (state = 'SHOW_ALL',
                          action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};


/*********************************
 store stuff
 *********************************/

const {createStore} = Redux;


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


class App extends React.Component {
    render() {
        return (
            <div>
                <input placeholder="..."/>
                <button>
                    add
                </button>
                <ul>
                    <li>foo</li>
                    <li>bar</li>
                </ul>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));


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

testAdd();
testToggle();
console.log("test completed");
