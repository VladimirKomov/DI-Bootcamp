import {nanoid} from "nanoid";

export function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {id: nanoid(), text: action.text, completed: false}];
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id !== action.id);
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        case 'EDIT_TASK':
            return state.map(todo =>
            todo.id === action.id ? { ...todo, text: action.newText} : todo
            );
        default:
            return state;
    }
}