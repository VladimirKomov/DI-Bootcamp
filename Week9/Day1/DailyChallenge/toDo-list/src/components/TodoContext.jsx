import React, {createContext, useReducer} from 'react';
import {todoReducer} from "./todoReducer.js";

export const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [filter, setFilter] = React.useState('all');

    return (
        <TodoContext.Provider value={{ todos, dispatch, filter, setFilter }}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;
