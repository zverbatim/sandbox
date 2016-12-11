
const todo  = (state, action) => {
    switch (action.type){
        case 'ADD_TODO':
            return {id: action.id, text: action.text, complete:false };
        case 'TOGGLE_TODO':
            return state.id === action.id ? {...state, complete: !state.complete}: state;
        default:
            return false;
    }
};


const todos = (state, action) => {
    switch(action.type){
        case  'ADD_TODO':
            return todo(undefined, action);
        case 'TOGGLE_TODO':
            return state.map ( (v, i) => todo(v, action))
    }
};

const testToggle = () => {
    const before = [{id: 0, text:"foo", complete: false}, {id: 1, text:"bar", complete: true}];
    const action = {id: 0, type: "TOGGLE_TODO"};
    const after = [{id: 0, text:"foo", complete: true}, {id: 1, text:"bar", complete: true}];
    deepFreeze(before);
    deepFreeze(action);
    expect(todos(before, action))
        .toEqual(after);
};

testToggle();

console.log("test completed");