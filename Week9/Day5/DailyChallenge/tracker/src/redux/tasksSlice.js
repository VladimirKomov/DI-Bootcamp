import { createSlice, nanoid } from '@reduxjs/toolkit';
import { TASK_STATUS } from '../constants/taskStatus.js';
import {sampleTasks} from "../fixtures/tasks.js";

// const initialState = {
//     tasks: {
//         byId: {},
//         allIds: [],
//     },
// };

const initialState = {
    byId: sampleTasks.byId,
    allIds: sampleTasks.allIds,
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: {
            reducer(state, action) {
                const { id } = action.payload;
                state.byId[id] = action.payload;
                state.allIds.push(id);
            },
            prepare(categoryId, title, description) {
                const newTask = {
                    id: nanoid(),
                    categoryId,
                    title,
                    description,
                    status: TASK_STATUS.NOT_STARTED,
                    dateCreation: new Date().toISOString(),
                };
                return { payload: newTask };
            },
        },
        editTask: (state, action) => {
            const { id, newCategoryId, newTitle, newDescription } = action.payload;
            const existingTask = state.byId[id];
            if (existingTask) {
                existingTask.categoryId = newCategoryId ? newCategoryId : existingTask.categoryId;
                existingTask.title = newTitle ? newTitle : existingTask.title;
                existingTask.description = newDescription ? newDescription : existingTask.description;
            }
        },
        deleteTask: (state, action) => {
            const taskId = action.payload;
            delete state.byId[taskId];
            state.allIds = state.allIds.filter((id) => id !== taskId);
        },
        updateTaskStatus: (state, action) => {
            const { id, status } = action.payload;
            const taskToUpdate = state.byId[id];
            if (taskToUpdate) {
                taskToUpdate.status = status;
            }
        },
    },
});

export const { addTask,
    editTask,
    deleteTask,
    updateTaskStatus } = tasksSlice.actions;
export default tasksSlice.reducer;