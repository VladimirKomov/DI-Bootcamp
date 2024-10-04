import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteTask} from "../redux/taskSlice";

const DeleteTask = ({id, completed}) => {
    const day = useSelector(state => state.taskReducer.selectedDay);
    const dispatch = useDispatch();

    const handleDeleteTask = () => {
        dispatch(deleteTask({day, id}));
    }

    return (
        <>
            {
                !completed &&
                <button className="deleteTask" onClick={handleDeleteTask}>Delete</button>
            }
        </>
    )
}

export default DeleteTask;