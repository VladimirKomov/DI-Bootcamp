import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import { editTodo } from "../redux/actions.js";

const EditTodo = ({id, currentText ='', completed}) => {
    const dispatch = useDispatch();
    const [newText, setNewText] = useState(currentText);
    const [editing, setEditing] = useState(false);

    const handleEdit = () => {
        if (newText.trim() !== '') {
            dispatch(editTodo(id, newText));
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
