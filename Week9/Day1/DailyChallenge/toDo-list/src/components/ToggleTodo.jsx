import React, {useContext} from 'react';
import {TodoContext} from "./TodoContext.jsx";

const ToggleTodo = ({id}) => {
    const {dispatch} = useContext(TodoContext);

    const handleClick = () => {
        dispatch({type: 'TOGGLE_TODO', id})
    }

   return (
       <button onClick={handleClick}>Toggle todo</button>
   )
}

export default ToggleTodo;
