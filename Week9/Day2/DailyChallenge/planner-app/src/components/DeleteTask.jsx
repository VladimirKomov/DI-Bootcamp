import React from 'react';
import {useDispatch} from "react-redux";

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