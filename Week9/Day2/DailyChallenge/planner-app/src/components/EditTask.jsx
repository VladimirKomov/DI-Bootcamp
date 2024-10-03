import React from 'react';
import {useDispatch} from "react-redux";
import {editTask} from "../redux/slices/tasksSlice.js";

const EditTask = ({id, taskDay, taskText}) => {
    const [newText, setNewText] = React.useState(taskText);
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = React.useState(false);

    const handleSaveClick = () => {
        if (newText) {
            dispatch(editTask({id, day: taskDay, newText}));
            handleIsEditing();
        }
    }

    const handleIsEditing = () => {
        setIsEditing(!isEditing);
    }

    const handleCancelClick = () => {
        //return text
        setNewText(taskText);
        //close form
        setIsEditing(false);
    }

    return (
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
                </div>
            )}
        </>
    )

}

export default EditTask;