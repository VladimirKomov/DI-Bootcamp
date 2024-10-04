import React from 'react';
import {useSelector} from "react-redux";
import Task from "./Task.jsx";

const TaskList = () => {
    const selectedDay = useSelector(state => state.taskReducer.selectedDay);
    const tasksState = useSelector(state => state.taskReducer.tasksByDay[selectedDay]);
    const tasks = tasksState ? tasksState : [];

    return (
        <div className="tasks-list">
            <ul>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} />
                ))}
            </ul>
        </div>
    )
}

export default TaskList;