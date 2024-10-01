import React, {useContext, useState} from 'react';
import {TodoContext} from "./TodoContext.jsx";

const EditTodo = ({id, currentText, completed}) => {
    const {dispatch} = useContext(TodoContext);
    const [newText, setNewText] = useState(currentText);
    const [editing, setEditing] = useState(false);

    const handleEdit = () => {
        if (newText.trim() !== '') {
            dispatch({type: 'EDIT_TASK', id, newText});
            setEditing(false);
        }
    }

    const handleEditing = () => {
        setEditing(!editing);
    }

    return (
        <div>
            {!completed ? (
                !editing ? (
                    <button onClick={handleEditing}>Edit</button>
                ) : (
                    <div>
                        <button onClick={handleEdit}>Save</button>
                        <input
                            type="text"
                            value={newText}
                            onChange={(e) => setNewText(e.target.value)}
                        />
                    </div>
                )
            ) : null}
        </div>
    );
}

export default EditTodo;
