import React from 'react';
import RemoveTodo from "./RemoveTodo.jsx";
import ToggleTodo from "./ToggleTodo.jsx";
import EditTodo from "./EditTodo.jsx";

const Todo = ({ todo }) => {
    return (
        <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <ToggleTodo id={todo.id}/>
            <RemoveTodo id={todo.id}/>
            <EditTodo id={todo.id} currentText={todo.text} completed={todo.completed}/>
        </li>
    );
};

export default Todo;