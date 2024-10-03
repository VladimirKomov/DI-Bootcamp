import React from 'react';
import {useSelector} from "react-redux";
import EditTask from "./EditTask.jsx";
import DeleteTask from "./DeleteTask.jsx";
import ToggleTaskCompletion from "./ToggleTaskCompletion.jsx";

const TasksList = () => {
    const selectedDay = useSelector(state => state.tasksState.selectedDay);
    const tasksState = useSelector(state => state.tasksState.tasksByDay[selectedDay]);
    const tasks = tasksState ? tasksState : [];

    //hiding the buttons when editing a task
    const [editingTaskId, setEditingTaskId] = React.useState(null);

    return (
        <div className="tasks-list">
            <ul>
                {tasks.map((task) => (
                    <li style={{textDecoration: task.completed ? 'line-through' : 'none'}}
                        key={task.id}>
                        Task: {task.text}. Created: {new Date(task.createdAt).toLocaleDateString()}
                        <div>
                            <EditTask id={task.id} taskDay={selectedDay} taskText={task.text}
                                      onEditingStart={() => setEditingTaskId(task.id)}
                                      onEditingEnd={() => setEditingTaskId(null)}/>
                            {/*If the task is editing, hide it*/}
                            {editingTaskId !== task.id && (
                                <>
                                    <ToggleTaskCompletion id={task.id} taskDay={selectedDay}/>
                                    <DeleteTask id={task.id} taskDay={selectedDay}/>
                                </>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TasksList;