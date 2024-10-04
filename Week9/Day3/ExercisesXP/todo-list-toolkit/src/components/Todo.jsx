import React from 'react';
import RemoveTodo from "./RemoveTodo";

const Todo = ({todo}) => {
    return (
        <li style={
            {textDecoration: todo.completed ? 'line-through' : 'none'}}>
            {todo.text}
            <RemoveTodo id={todo.id}/>
        </li>
    )
}

export default Todo;