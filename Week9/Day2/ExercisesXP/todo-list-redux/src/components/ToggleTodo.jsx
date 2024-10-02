import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo} from "../redux/actions.js";

const ToggleTodo = ({id}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleTodo(id))
    }

   return (
       <button onClick={handleClick}>Toggle todo</button>
   )
}

export default ToggleTodo;
