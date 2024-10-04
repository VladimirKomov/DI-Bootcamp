import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./todoSlice"

const todoStore = configureStore({
    reducer: {
        todosStore: todoReducer
    }
});

export default todoStore;