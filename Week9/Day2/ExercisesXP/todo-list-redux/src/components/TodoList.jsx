import React from 'react';
import Todo from "./Todo.jsx";
import AddTodo from "./AddTodo.jsx";
import FilterTodo from "./FilterTodo.jsx";
import {useDispatch, useSelector} from "react-redux";
import {removeTodo} from "../redux/actions.js";

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter);




    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id))
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
                    <Todo
                        key={todo.id}
                        todo={todo}
                        onRemove={handleRemoveTodo}/>
                ))}
            </ul>
        </div>
    )

}

export default TodoList;