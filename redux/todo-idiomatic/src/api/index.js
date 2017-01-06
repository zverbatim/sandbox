/**
 * Simulates a fake DB
 * @param ms
 */
import {v4} from "node-uuid";

const fakeDatabase = {
    todos: [
        {
            id: v4(),
            text: 'foo',
            completed: false
        },
        {
            id: v4(),
            text: 'bar',
            completed: true
        },
        {
            id: v4(),
            text: 'das',
            completed: false
        }
    ]
}
const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
    delay(100).then(() => {
        switch (filter) {
            case 'all':
                return fakeDatabase.todos;
            case 'active':
                return fakeDatabase.todos.filter(t => !t.completed);
            case 'completed':
                return fakeDatabase.todos.filter(t => t.completed);
            default:
                throw new Error(`Unknown filter: ${filter}`);
        }
    });