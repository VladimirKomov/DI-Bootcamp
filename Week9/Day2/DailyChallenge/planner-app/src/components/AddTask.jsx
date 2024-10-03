import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTask} from "../redux/slices/tasksSlice.js";

const AddTask = () => {
    const [taskText, setTaskText] = useState('');
    const selectedDay = useSelector((state) => state.tasksState.selectedDay);
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (taskText) {
            dispatch(addTask(selectedDay, taskText));
            setTaskText('');
        }
    }

    return (
        <div>
            <input
                type='text'
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder='new task...'
            />
            <button onClick={handleAddTask}>Add task</button>
        </div>
    )
}

export default AddTask;