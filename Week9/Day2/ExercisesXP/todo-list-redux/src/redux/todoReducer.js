import { nanoid } from "nanoid";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, EDIT_TODO, SET_FILTER } from './actions';

const initialState = {
    todos: [],
    filter: 'all'
};

export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { id: nanoid(), text: action.payload, completed: false }]
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                )
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? { ...todo, text: action.payload.newText } : todo
                )
            };
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            };
        default:
            return state;
    }
}
