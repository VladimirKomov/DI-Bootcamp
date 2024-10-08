import {createSelector} from "@reduxjs/toolkit";
import {selectCategoriesById} from "./categoriesSelector.js";
import {selectTasks} from "./tasksSelector.js";


export const selectTasksWithCategoryName = createSelector(
    [selectTasks, selectCategoriesById],
    (tasks, categoriesById) => tasks.map((task) => ({
            ...task,
            categoryName: categoriesById[task.categoryId]?.title || "Unknown"
        }))
);
