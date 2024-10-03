import React from 'react';
import button from "bootstrap/js/src/button.js";
import {useDispatch, useSelector} from "react-redux";
import { toggleTaskCompletion } from "../redux/slices/tasksSlice.js"

const ToggleTaskCompletion = ({id}) => {
    const selectedDay = useSelector(state => state.tasksState.selectedDay);
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTaskCompletion({day: selectedDay, id}));
    }

    return (
        <button onClick={handleToggle}>Toggle Task Completion</button>
    );
}

export default ToggleTaskCompletion;