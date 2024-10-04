import React from 'react';
import DeleteTask from "./DeleteTask.jsx";

const Task = ({task}) => {
    const dueDate = new Date(task.dueTime);
    const formattedTime = dueDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <>
            <li className="task"
                style={
                    {textDecoration: task.completed ? 'line-through' : 'none'}}>
                Description: {task.text}. Due time: {formattedTime}.
                <DeleteTask id={task.id} completed={task.completed}/>
            </li>
        </>
    )
}

export default Task;