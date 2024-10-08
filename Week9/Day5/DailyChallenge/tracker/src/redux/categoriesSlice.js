import { createSlice, nanoid } from '@reduxjs/toolkit';
import {sampleCategories} from "../fixtures/categories.js";

// const initialState = {
//         byId: {},
//         allIds: [],
// };

const initialState = {
        byId: sampleCategories.byId,
        allIds: sampleCategories.allIds,
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory: {
            reducer(state, action) {
                const { id } = action.payload;
                state.categories.byId[id] = action.payload;
                state.categories.allIds.push(id);
            },
            prepare(title, description) {
                const newCategory = {
                    id: nanoid(),
                    title,
                    description,
                };
                return { payload: newCategory };
            },
        },
        editCategory: (state, action) => {
            const { id, newTitle, newDescription } = action.payload;
            const existingCategory = state.categories.byId[id];
            if (existingCategory) {
                existingCategory.title = newTitle ? newTitle : existingCategory.title;
                existingCategory.description = newDescription ? newDescription : existingCategory.description;
            }
        },
        removeCategory: (state, action) => {
            const { id } = action.payload;
            delete state.categories.byId[id];
            state.categories.allIds = state.categories.allIds.filter((categoryId) => categoryId !== id);
        },
    },
});

export const { addCategory, editCategory, removeCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;