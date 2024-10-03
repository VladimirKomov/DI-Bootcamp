import React from 'react';
import {useDispatch} from "react-redux";
import { deleteTask } from '../redux/slices/tasksSlice.js';

const DeleteTask = ({id, taskDay}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask({day: taskDay, id}));
    }

    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default DeleteTask;