/**
 * The reducer that manage state updates
 * @param state
 * @param action
 * @returns
 */
const counter = (state = 0, action) => {

};

const addCounter = (list) => {
    return [...list, 0]
};

const testAddCounter = () => {
    const before = [];
    const after = [0];
    deepFreeze(before);
    expect(addCounter(before))
        .toEqual(after);
};

const removeCounter = (index, list) => {
    return list.filter((_, i) => index != i);
};

const testRemoveCounter = () => {
    const before = [1, 2, 3];
    const after = [1, 3];
    deepFreeze(before);
    expect(removeCounter(1, before))
        .toEqual(after);
};

const modifyCounter = (index, newValue, list) => {
    return list.map((v, i) => {
        return index === i ? newValue : v
    })
};


const testModifyCounter = () => {
    const before = [1, 2, 3];
    const after = [10, 2, 3];
    deepFreeze(before);
    expect(modifyCounter(0, 10, before))
        .toEqual(after);
};


testAddCounter();
testRemoveCounter();
testModifyCounter();
console.log("test passed");
