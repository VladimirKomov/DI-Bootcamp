import React from 'react';

const Todo = ({todo, onRemove}) => {
    return (
        <li>
            {todo.text}
            <button onClick={() => onRemove(todo.id)}>Remove</button>
        </li>
    );
};

export default Todo;