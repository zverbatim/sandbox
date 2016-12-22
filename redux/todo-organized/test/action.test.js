import * as actions from "../src/actions/action";
import deepFreeze from "deep-freeze";

describe('action tests', () => {
    it('addTodo should create ADD_TODO action', () => {
        expect(actions.addTodo('Boo'))
            .toEqual({
                type: 'ADD_TODO',
                id: 0,
                text: 'Boo'
            })
    });

    it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
        expect(actions.setVisibilityFilter('active'))
            .toEqual({
                type: 'SET_VISIBILITY_FILTER',
                filter: 'active'
            })
    });

    it('toggleTodo should create TOGGLE_TODO action', () => {
        expect(actions.toggleTodo(1))
            .toEqual({
                type: 'TOGGLE_TODO',
                id: 1
            })
    });

    it('SHOW_ALL displays all todos', () => {
        const before = [
            {id: 0, text: 'foo', complete: true},
            {id: 1, text: 'bar', complete: false},
            {id: 2, text: 'vue', complete: true},
        ];

        expect(actions.getVisibleTodos(before, 'SHOW_ALL'))
            .toEqual(before)
    });

    it('SHOW_ACTIVE displays only active todos', () => {
        const before = [
            {id: 0, text: 'foo', complete: true},
            {id: 1, text: 'bar', complete: false},
            {id: 2, text: 'vue', complete: true},
        ];

        deepFreeze(before);
        const after = [
            {id: 1, text: 'bar', complete: false},
        ];

        expect(actions.getVisibleTodos(before, 'SHOW_ACTIVE'))
            .toEqual(after)
    });

    it('SHOW_COMPLETE displays only active todos', () => {
        const before = [
            {id: 0, text: 'foo', complete: true},
            {id: 1, text: 'bar', complete: false},
            {id: 2, text: 'vue', complete: true},
        ];

        const after = [
            {id: 0, text: 'foo', complete: true},
            {id: 2, text: 'vue', complete: true},
        ];

        deepFreeze(before);

        expect(actions.getVisibleTodos(before, 'SHOW_COMPLETE'))
            .toEqual(after)
    });

    it('any filter on empty todos should return empty todos', () => {
        const before = [];
        const after = [];
        deepFreeze(before);
        expect(actions.getVisibleTodos(before, 'SHOW_ALL'))
            .toEqual(after);
        expect(actions.getVisibleTodos(before, 'SHOW_ACTIVE'))
            .toEqual(after);
        expect(actions.getVisibleTodos(before, 'SHOW_COMPLETE'))
            .toEqual(after)
    })

});