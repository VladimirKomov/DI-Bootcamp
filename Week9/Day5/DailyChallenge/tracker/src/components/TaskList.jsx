import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Task from "./Task.jsx";
import { selectTasksWithCategoryName } from "../redux/tasksWithCategoryNameSelector.js";
import CategorySelector from "./CategorySelector.jsx";
import { selectTasksByCategory } from "../redux/tasksSelector.js";
import EditTaskModal from "./EditTaskModal.jsx";
import { editTask, updateTaskStatus } from "../redux/tasksSlice.js";

const TaskList = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showEditModal, setShowEditModal] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);

    const dispatch = useDispatch();

    const tasks = useSelector((state) =>
        selectedCategory ? selectTasksByCategory(selectedCategory)(state) : selectTasksWithCategoryName(state)
    );

    const handleCategory = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    const handleEditTask = useCallback((taskId, newTitle, newDescription) => {
        dispatch(editTask({ id: taskId, newTitle, newDescription }));
    }, [dispatch]);

    const handleCompleteTask = useCallback((taskId) => {
        dispatch(updateTaskStatus({ id: taskId, status: TASK_STATUS.COMPLETED }));
    }, [dispatch]);

    const handleStatusChange = useCallback((taskId, newStatus) => {
        dispatch(updateTaskStatus({ id: taskId, status: newStatus }));
    }, [dispatch]);

    const openEditModal = (task) => {
        setCurrentTask(task);
        setShowEditModal(true);
    };

    return (
        <div className='task-list'>
            <h1>Task List:</h1>
            <CategorySelector onSelectCategory={handleCategory} />
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onEdit={() => openEditModal(task)}
                    onComplete={() => handleCompleteTask(task.id)}
                    onStatusChange={handleStatusChange}
                />
            ))}
            <EditTaskModal
                show={showEditModal}
                handleClose={() => setShowEditModal(false)}
                task={currentTask}
                handleSave={handleEditTask}
            />
        </div>
    );
};

export default TaskList;
