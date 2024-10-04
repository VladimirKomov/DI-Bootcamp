import React from 'react';
import {useDispatch} from "react-redux";
import {toggleTodo} from "../redux/todoSlice";

const ToggleTodo = ({id, completed}) => {
    const dispatch = useDispatch();

    const handleToggleTodo = () => {
        dispatch(toggleTodo(id));
    }

    return (
        <button onClick={handleToggleTodo}>
            {!completed ? 'Complete' : 'To work'}
        </button>
    )
}

export default ToggleTodo;