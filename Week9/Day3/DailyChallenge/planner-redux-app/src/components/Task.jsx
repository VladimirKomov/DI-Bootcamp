import React, {useState} from 'react';
import DeleteTask from "./DeleteTask.jsx";
import ToggleTask from "./ToggeTask.jsx";
import EditTask from "./EditTask.jsx";

const Task = ({task}) => {
    const dueDate = new Date(task.dueTime);
    const formattedTime = dueDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    //hiding the buttons when editing a task
    const [editingTaskId, setEditingTaskId] = useState(null);

    return (
        <>
            <li className="task"
                style={
                    {textDecoration: task.completed ? 'line-through' : 'none'}}>
                Description: {task.text}. Due time: {formattedTime}.
                <EditTask id={task.id}
                          onEditingStart={() => setEditingTaskId(task.id)}
                          onEditingEnd={() => setEditingTaskId(null)}
                />
                {/*If the task is editing, hide it*/}
                {editingTaskId !== task.id && (
                    <>
                        <ToggleTask id={task.id} completed={task.completed}/>
                        <DeleteTask id={task.id} completed={task.completed}/>
                    </>
                )}
            </li>
            <br/>
        </>
    )
}

export default Task;