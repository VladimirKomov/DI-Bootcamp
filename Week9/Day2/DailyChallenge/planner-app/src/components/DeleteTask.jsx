import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { deleteTask } from '../redux/slices/tasksSlice.js';

const DeleteTask = ({id}) => {
    const selectedDay = useSelector(state => state.tasksState.selectedDay);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask({day: selectedDay, id}));
    }

    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default DeleteTask;