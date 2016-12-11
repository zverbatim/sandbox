const toggle = (state) => {
    return {
        ...state,
        active: !state.active
    }
};

const testToggle = () => {
    const before = {id: 1, text: "foo", active: true};
    const after = {id: 1, text: "foo", active: false};
    deepFreeze(before);
    expect(toggle(before)).toEqual(after);
};


const add = (state, entry) => {
    return [...state, entry]
};

const testAdd = () => {
    const before = [];
    const foo = {
        id: 1,
        active: true,
        text: "foo"
    };
    const after = [{
        id: 1,
        active: true,
        text: "foo"
    }];

    deepFreeze(before);
    expect(add(before, foo))
        .toEqual(after);
};

const todos = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {id: action.id, text: action.text, complete: false}
            ];
        case 'TOGGLE_TODO':
            return state.map((v, i) => (v.id === action.id ? {...v, complete: !v.complete} : v));
        default:
            return state;
    }
};

const testAddTodo = () => {
    const beforeState = [];
    const action = {type: 'ADD_TODO', id: 0, text: 'foo'};
    const afterState = [{id: 0, text: 'foo', complete: false}];
    deepFreeze(beforeState);
    deepFreeze(action);

    expect(todos(beforeState, action))
        .toEqual(afterState);
};

const testToggleTodo = () => {
    const beforeState = [{id: 0, text: 'foo', complete: false}, {id: 1, text: 'bar', complete: false}];
    const action = {type: 'TOGGLE_TODO', id: 1};
    const afterState = [{id: 0, text: 'foo', complete: false}, {id: 1, text: 'bar', complete: true}];
    deepFreeze(beforeState);
    expect(todos(beforeState, action))
        .toEqual(afterState);
};


testToggle();
testAdd();

testAddTodo();
testToggleTodo();
console.log("tests passed.");




