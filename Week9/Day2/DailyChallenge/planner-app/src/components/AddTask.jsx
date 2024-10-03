import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTask} from "../redux/slices/tasksSlice.js";

const AddTask = () => {
    const [taskText, setTaskText] = useState('');
    const selectDay = useSelector((state) => state.tasksState.selectedDay);
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (!taskText.trim()) {
            setError('Task cannot be empty.');
            return;
        }
        dispatch(addTask(selectDay, taskText));
        setTaskText('');
        setError('');
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
            {/*show error*/}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )
}

export default AddTask;