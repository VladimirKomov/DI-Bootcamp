import React from 'react';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList.jsx";

const TodoManager = () => {
    return (
        <div>
            <h1>New Todo Manager</h1>
            <h2>This one is not the same as before</h2>
            <h6>Maybe not better, but definitely different</h6>
            <AddTodo/>
            <TodoList/>
        </div>
    );
}

export default TodoManager