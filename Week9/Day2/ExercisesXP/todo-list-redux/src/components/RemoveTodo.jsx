import React from 'react';
import { useDispatch} from "react-redux";
import { removeTodo } from "../redux/actions.js";

const RemoveTodo = ({id}) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeTodo(id));
    }

    return (
        <button onClick={handleRemove}>Remove</button>
    );
}

export default RemoveTodo;