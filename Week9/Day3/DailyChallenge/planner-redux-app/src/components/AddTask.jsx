import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/taskSlice';

const AddTask = () => {
    const selectedDay = useSelector(state => state.taskReducer.selectedDay);
    const [isAdding, setIsAdding] = useState(false);
    const [text, setText] = useState('');
    const [dueTime, setDueTime] = useState(''); // Обновляем переменную на dueTime
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();

    const handleIsAdding = () => {
        setIsAdding(!isAdding);
        setText('');
        setDueTime('');
        setSuccessMessage('');
        setErrorMessage('');
    }

    const handleAddTask = () => {
        if (!text.trim()) {
            setErrorMessage('The field cannot be empty!');
            setTimeout(() => setErrorMessage(''), 3000);
            return;
        }
        if (!dueTime) {
            setErrorMessage('Please select a due time!');
            setTimeout(() => setErrorMessage(''), 3000);
            return;
        }

        const dueDateTime = new Date(`${selectedDay}T${dueTime}`);
        const currentDateTime = new Date();

        if (dueDateTime <= currentDateTime) {
            setErrorMessage('The due time must be in the future!');
            setTimeout(() => setErrorMessage(''), 3000);
            return;
        }
        dispatch(addTask(selectedDay, text, dueDateTime.toISOString()));
        setText('');
        setDueTime('');
        setErrorMessage('');
        setSuccessMessage('The task has been added! Continue typing or finish adding.');
        setTimeout(() => setSuccessMessage(''), 3000);
    }

    return (
        <div className='AddTask-section'>
            <button onClick={handleIsAdding}>
                {!isAdding ? 'Add new task' : 'Complete the addition'}
            </button>
            {isAdding && (
                <div className='InputTask-section'>
                    <label htmlFor='taskDescription'>Task Description:</label>
                    <input
                        type='text'
                        id='taskDescription'
                        value={text}
                        placeholder='new task...'
                        onChange={(e) => setText(e.target.value)}
                    />
                    <label htmlFor='dueTime'>Due Time:</label>
                    <input
                        type='time'
                        id='dueTime'
                        value={dueTime}
                        onChange={(e) => setDueTime(e.target.value)}
                    />
                    <button onClick={handleAddTask}>Save</button>
                    {errorMessage && (
                        <p style={{ color: 'red' }} className='ErrorMessage'>{errorMessage}</p>
                    )}
                </div>
            )}
            {successMessage && (
                <p style={{ color: 'green' }} className='SuccessMessage'>{successMessage}</p>
            )}
        </div>
    );
}

export default AddTask;
