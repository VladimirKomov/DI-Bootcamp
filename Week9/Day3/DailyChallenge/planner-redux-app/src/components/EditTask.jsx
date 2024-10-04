import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editTask} from "../redux/taskSlice";

const EditTask = ({id, onEditingStart, onEditingEnd}) => {
    const selectedDay = useSelector(state => state.taskReducer.selectedDay);
    const tasksState = useSelector(state => state.taskReducer.tasksByDay[selectedDay]);
    const task = tasksState.find(task => task.id === id);

    const taskText = task ? task.text : '';
    const taskTime = task ? new Date(task.dueTime).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) : '';

    const [newText, setNewText] = useState(taskText);
    const [newTime, setNewTime] = useState(taskTime);
    const [error, setError] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (task) {
            setNewText(task.text);
            setNewTime(new Date(task.dueTime).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}));
        }
    }, [task]);

    const handleSaveClick = () => {
        if (!newText.trim()) {
            setError('Task cannot be empty.');
            return;
        }
        if (!newTime) {
            setError('Please select a due time!');
            return;
        }

        const newDueTime = new Date(`${selectedDay}T${newTime}`);

        if (newDueTime <= new Date()) {
            setError('The due time must be in the future!');
            return;
        }

        dispatch(editTask({id, day: selectedDay, text: newText, dueTime: newDueTime.toISOString()}));
        handleIsEditing();
        setError('');
    };

    const handleIsEditing = () => {
        setIsEditing(!isEditing);
        if (!isEditing) {
            onEditingStart();
        } else {
            onEditingEnd();
        }
    };

    const handleCancelClick = () => {
        setNewText(taskText);
        setNewTime(taskTime);
        setIsEditing(false);
        onEditingEnd();
        setError('');
    };

    return (
        <>
            {task && !task.completed && (
                <>
                    {!isEditing ? (
                        <button onClick={handleIsEditing}>Edit task</button>
                    ) : (
                        <div className="edit-task">
                            <input
                                type="text"
                                value={newText}
                                onChange={e => setNewText(e.target.value)}
                                placeholder="Edit task description"
                            />
                            <input
                                type="time"
                                value={newTime}
                                onChange={e => setNewTime(e.target.value)}
                            />
                            <button onClick={handleSaveClick}>Save</button>
                            <button onClick={handleCancelClick}>Cancel</button>
                            {error && <p style={{color: 'red'}}>{error}</p>}
                        </div>
                    )}
                </>
            )}
        </>
    );
}

export default EditTask;
