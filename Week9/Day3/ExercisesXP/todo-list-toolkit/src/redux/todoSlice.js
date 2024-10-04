import {createSlice} from "@reduxjs/toolkit";
import {nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todoManager',
    initialState,
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.todos.push(action.payload);
            },
            prepare: (text) => {
                const newTodo = {
                    id: nanoid(),
                    text,
                    completed: false,
                    createdAt: new Date().toISOString()
                };
                return {payload: newTodo};
            }
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== id);
        },
        toggleTodo: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.map(todo =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            );
        }
    }
})

export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions;
export default todoSlice.reducer;