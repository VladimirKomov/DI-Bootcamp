import React, {useContext, useReducer, useState} from 'react';
import button from "bootstrap/js/src/button.js";
import {TodoContext} from "./TodoContext.jsx";

const AddTodo = () => {
    const { dispatch} = useContext(TodoContext);
    const [todoText, setTodoTextText] = useState('');

    const handleAddTodo = () => {
        if (todoText.trim() !== '') {
            dispatch({type: 'ADD_TODO', text: todoText});
            setTodoTextText('');
        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder="add a new todo"
                value={todoText}
                onChange={(e) => setTodoTextText(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add todo</button>
        </div>
    );
}

export default AddTodo;