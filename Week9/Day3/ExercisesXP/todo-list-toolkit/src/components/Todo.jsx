import React from 'react';
import RemoveTodo from "./RemoveTodo";
import ToggleTodo from "./ToggleTodo.jsx";

const Todo = ({todo}) => {
    return (
        <li style={
            {textDecoration: todo.completed ? 'line-through' : 'none'}}>
            {todo.text}
            <ToggleTodo id={todo.id} completed={todo.completed}/>
            <RemoveTodo id={todo.id}/>
        </li>
    )
}

export default Todo;