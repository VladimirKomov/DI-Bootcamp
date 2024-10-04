import React from 'react';
import {useSelector} from "react-redux";
import Todo from "./Todo.jsx";

const TodoList = () => {
    const todos = useSelector((state) => state.todosStore.todos);

    return (
        <div className='TodoList-section'>
            <h3>Your todos:</h3>
            {todos.length === 0 ? (
                <p>No todos. Please add a task!</p>
            ) : (
                <ul>
                    {todos.map((todo) => (
                        <Todo todo={todo}/>
                    ))}
                </ul>
            )}

        </div>
    );
}

export default TodoList;