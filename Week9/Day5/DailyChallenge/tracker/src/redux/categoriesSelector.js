import {createSelector} from "@reduxjs/toolkit";

// main
export const selectCategoriesById = (state) => state.categories.byId;
export const selectCategoriesAllIds = (state) => state.categories.allIds;

// all categories
export const selectCategories = createSelector(
    [selectCategoriesById, selectCategoriesAllIds],
    (categoriesById, allIds) => (
        Array.isArray(allIds) ? allIds.map((id) =>
            categoriesById[id]).filter((category) => category !== undefined) : [])
);

// by id
export const selectCategoryById = (categoryId) =>
    createSelector(
        [selectCategoriesById],
        (categoriesById) => categoriesById[categoryId]
    );

