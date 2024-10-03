import React from 'react';
import DatePicker from "./DatePicker.jsx";
import AddTask from "./AddTask.jsx";
import TasksList from "./TasksList.jsx";

const TaskManager = () => {

    return (
        <div>
            <DatePicker />
            <br/>
            <AddTask />
            <br/>
            <TasksList/>
        </div>
    )

}

export default TaskManager;