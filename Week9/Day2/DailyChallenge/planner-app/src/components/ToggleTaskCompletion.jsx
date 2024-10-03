import React from 'react';
import button from "bootstrap/js/src/button.js";
import {useDispatch} from "react-redux";
import { toggleTaskCompletion } from "../redux/slices/tasksSlice.js"

const ToggleTaskCompletion = ({id, taskDay}) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTaskCompletion({day: taskDay, id}));
    }

    return (
        <button onClick={handleToggle}>Toggle Task Completion</button>
    );
}

export default ToggleTaskCompletion;