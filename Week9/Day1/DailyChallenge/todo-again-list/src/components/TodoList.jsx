import React, {useContext} from 'react';
import Todo from "./Todo.jsx";
import AddTodo from "./AddTodo.jsx";
import {TodoContext} from "./TodoContext.jsx";
import FilterTodo from "./FilterTodo.jsx";

const TodoList = () => {
    const {todos, filter, dispatch} = useContext(TodoContext);


    const handleRemoveTodo = (id) => {
        dispatch({type: 'REMOVE_TODO', id})
    }

    const handleFilterTodo = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'uncompleted') return !todo.completed;
        return true;
    })

    return (
        <div>
            <h1>Todo List</h1>
            <AddTodo/>
            <FilterTodo />
            <ul>
                {handleFilterTodo.map((todo) => (
                    <Todo key={todo.id} todo={todo}
                          onRemove={handleRemoveTodo}/>
                ))}
            </ul>
        </div>
    )

}

export default TodoList;