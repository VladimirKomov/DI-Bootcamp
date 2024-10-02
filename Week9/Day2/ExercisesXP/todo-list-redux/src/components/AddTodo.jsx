import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from "../redux/actions.js";


const AddTodo = () => {
    const dispatch = useDispatch();
    const [todoText, setTodoTextText] = useState('');

    const handleAddTodo = () => {
        if (todoText.trim() !== '') {
            dispatch(addTodo(todoText));
            setTodoTextText('');
        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder="add a new todo"
                value={todoText}
                onChange={(e) => setTodoTextText(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add todo</button>
        </div>
    );
}

export default AddTodo;