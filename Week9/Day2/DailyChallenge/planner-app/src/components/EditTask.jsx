import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editTask} from "../redux/slices/tasksSlice.js";

const EditTask = ({id, taskText, completed, onEditingStart, onEditingEnd}) => {
    const selectedDay = useSelector(state => state.tasksState.selectedDay);
    const [newText, setNewText] = React.useState(taskText);
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = React.useState(false);

    const handleSaveClick = () => {
        if (!newText.trim()) {
            setError('Task cannot be empty.');
            return;
        }
        dispatch(editTask({id, day: selectedDay, newText}));
        handleIsEditing();
        setError('');
    }

    const handleIsEditing = () => {
        setIsEditing(!isEditing);
        if (!isEditing) {
            onEditingStart(); //editing started - inform parent
        } else {
            onEditingEnd(); //editing finished - inform parent
        }
    }

    const handleCancelClick = () => {
        //return text
        setNewText(taskText);
        //close form
        setIsEditing(false);
        onEditingEnd(); //editing finished - inform parent
        setError('');
    }

    return (
        <>
            {/*showed it only if the task is not completed*/}
            {!completed && (
                <>
                    {!isEditing ? (
                        <button onClick={handleIsEditing}>Edit text</button>
                    ) : (
                        <div className="edit-task">
                            <input
                                type="text"
                                value={newText}
                                onChange={e => setNewText(e.target.value)}
                            />
                            <button onClick={handleSaveClick}>Save</button>
                            <button onClick={handleCancelClick}>Cancel</button>
                            {/*show error*/}
                            {error && <p style={{color: 'red'}}>{error}</p>}
                        </div>
                    )}
                </>
            )}
        </>
    )

}

export default EditTask;