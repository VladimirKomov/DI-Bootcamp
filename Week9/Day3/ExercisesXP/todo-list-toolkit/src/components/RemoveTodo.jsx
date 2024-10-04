import React from 'react';
import {useDispatch} from "react-redux";
import {removeTodo} from "../redux/todoSlice";

const RemoveTodo = ({id}) => {
    const dispatch = useDispatch();

    const handleRemoveTodo = () => {
        dispatch(removeTodo(id));
    }

    return (
        <button onClick={handleRemoveTodo}>Remove</button>
    );
}

export default RemoveTodo;