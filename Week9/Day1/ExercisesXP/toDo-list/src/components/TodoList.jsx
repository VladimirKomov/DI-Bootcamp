import React, {useReducer, useState} from 'react';
import {todoReducer} from "./todoReducer.js";
import todo from "./Todo.jsx";
import Todo from "./Todo.jsx";

const TodoList = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [todoText, setTodoTextText] = useState('');

    const handleAddTodo = () => {
        if (todoText.trim() !== '') {
            dispatch({type: 'ADD_TODO', text: todoText});
            setTodoTextText('');
        }
    }

    const handleRemoveTodo = (id) => {
        dispatch({type: 'REMOVE_TODO', id})
    }

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder="add a new todo"
                value={todoText}
                onChange={(e) => setTodoTextText(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add todo</button>
            <ul>
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo}
                          onRemove={handleRemoveTodo}/>
                ))}
            </ul>
        </div>
    )

}

export default TodoList;