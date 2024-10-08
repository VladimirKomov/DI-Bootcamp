import { createSelector } from "@reduxjs/toolkit";
import { TASK_STATUS } from "../constants/taskStatus.js";

//main
export const selectTasksById = (state) => state.tasks.byId;
export const selectTasksAllIds = (state) => state.tasks.allIds;

//All tasks
export const selectTasks = createSelector(
    [selectTasksById, selectTasksAllIds],
    (tasksById, allIds) => {
        if (!Array.isArray(allIds) || allIds.length === 0) return [];
        return allIds.map((id) => tasksById[id]).filter((task) => task !== undefined);
    }
);

export const selectTasksByCategory = (categoryId) =>
    createSelector(
        [selectTasks],
        (tasks) => tasks.filter((task) => task.categoryId === categoryId)
    );

export const selectCompletedTasks = createSelector(
    [selectTasks],
    (tasks) => tasks.filter((task) => task.status === TASK_STATUS.COMPLETED).length
);

export const selectCategoryById = (categoryId) =>
    createSelector(
        [(state) => state.categories.byId],
        (categoriesById) => categoriesById[categoryId]
    );

