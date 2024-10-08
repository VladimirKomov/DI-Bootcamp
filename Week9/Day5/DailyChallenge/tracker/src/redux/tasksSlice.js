import {createSlice, nanoid} from '@reduxjs/toolkit';
import {TASK_STATUS} from './constants.js'

const initialState = {
    tasks: [],
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: {
            reducer(state, action) {
                state.tasks.push(action.payload);
            },
            prepare(category, title, description) {
                const newTask = {
                    id: nanoid(),
                    category,
                    title,
                    description,
                    status: TASK_STATUS.NOT_STARTED,
                }
                return {payload: newTask};
            }
        },
        editTask: (state, action) => {
            const {id, newCategory, newTitle, newDescription} = action.payload;
            const existingTask = state.tasks.find(task => task.id === id);
            if (existingTask) {
                existingTask.category = newCategory ? newCategory : existingTask.category;
                existingTask.title = newTitle ? newTitle : existingTask.title;
                existingTask.description = newDescription ? newDescription : existingTask.description;
            }
        },
        deleteTask: (state, action) => {
            const taskId = action.payload;
            state.tasks = state.tasks.filter(task => task.id !== taskId);
        },
        updateTaskStatus: (state, action) => {
            const {id, status} = action.payload;
            const taskToUpdate = state.tasks.find(task => task.id === id);
            if (taskToUpdate) {
                taskToUpdate.status = status;
            }
        },
    }
})

export const {
    addTask,
    editTask,
    deleteTask
} = tasksSlice.actions;
export default tasksSlice.reducer;