import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/todoSlice";

const AddTodo = () => {
    const [isAdding, setIsAdding] = useState(false);
    const [text, setText] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();

    const handleIsAdding = () => {
        setIsAdding(!isAdding);
        setText('');
        setSuccessMessage('');
        setErrorMessage('');
    }

    const handleAddTodo = () => {
        if (!text.trim()) {
            setErrorMessage('The field cannot be empty!');
            setTimeout(() => setErrorMessage(''), 3000);
            return;
        }
        dispatch(addTodo(text));
        setText('');
        setSuccessMessage('The task has been added! Continue typing or finish adding.')
        setErrorMessage('');
        setTimeout(() => setSuccessMessage(''), 3000);
    }


    return (
        <div className='AddTodo-section'>
            <button onClick={handleIsAdding}>
                {!isAdding ? 'Add new todos' : 'Complete the addition'}
            </button>
            {isAdding && (
                <div className='InputTodo-section'>
                    <input
                        type='text'
                        value={text}
                        placeholder='new todo...'
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button onClick={handleAddTodo}>Save</button>
                    {errorMessage && <p style={
                        {color: 'red'}} className='ErrorMassage'>{errorMessage}</p>}
                </div>
            )}
            {successMessage && <p style={
                {color: 'green'}} className='SuccessMessage'>{successMessage}</p>}
        </div>
    )
}

export default AddTodo;