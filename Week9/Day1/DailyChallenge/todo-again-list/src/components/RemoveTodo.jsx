import React, {useContext} from 'react';
import button from "bootstrap/js/src/button.js";
import {TodoContext} from "./TodoContext.jsx";

const RemoveTodo = ({id}) => {
    const {dispatch} = useContext(TodoContext)

    const handleRemove = () => {
        dispatch({type: 'REMOVE_TODO', id});
    }

    return (
        <button onClick={handleRemove}>Remove</button>
    );
}

export default RemoveTodo;