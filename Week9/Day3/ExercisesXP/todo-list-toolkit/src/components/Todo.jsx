import React from 'react';

const Todo = ({todo}) => {
    return (
        <li key={todo.id} style={
            {textDecoration: todo.completed ? 'line-through' : 'none'}}>
            {todo.text}
        </li>
    )
}

export default Todo;