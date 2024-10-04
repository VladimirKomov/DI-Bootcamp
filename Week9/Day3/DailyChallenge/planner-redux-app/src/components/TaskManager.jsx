import React from 'react';
import DatePicker from "./DataPicker.jsx";
import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";

const TaskManager = () => {
    return (
        <div className='TaskManager'>
            <h1>Welcome to the latest planner</h1>
            <DatePicker/>
            <br/>
            <AddTask/>
            <br/>
            <TaskList/>
        </div>
    )
}
export default TaskManager;