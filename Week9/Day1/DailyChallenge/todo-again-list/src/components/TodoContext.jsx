import React, {createContext, useReducer, useState} from 'react';
import {todoReducer} from "./todoReducer.js";

export const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [filter, setFilter] = useState('all');

    return (
        <TodoContext.Provider value={{ todos, dispatch, filter, setFilter }}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;
