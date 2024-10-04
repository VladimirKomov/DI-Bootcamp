import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toggleTask} from "../redux/taskSlice";

const ToggleTask = ({id, completed}) => {
    const day = useSelector((state) => state.taskReducer.selectedDay);
    const dispatch = useDispatch();

    const handleToggleTodo = () => {
        dispatch(toggleTask({day, id}));
    }

    return (
        <button onClick={handleToggleTodo}>
            {!completed ? 'Complete' : 'To work'}
        </button>
    )
}

export default ToggleTask;