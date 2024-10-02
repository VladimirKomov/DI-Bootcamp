export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE-TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TASK';
export const SET_FILTER = 'SET_FILTER';

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text
})

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: id
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: id
})

export const editTodo = (id, newText) => ({
    type: EDIT_TODO,
    payload: {id, newText}
})

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter
})
