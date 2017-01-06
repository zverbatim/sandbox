/**
 * not used currently
 */

export const loadStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState)
    }
    catch (e) {
        console.log("error", e);
        return undefined;
    }
};

export const saveStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState)
    } catch (e) {
        console.log("error", e)
    }

};
