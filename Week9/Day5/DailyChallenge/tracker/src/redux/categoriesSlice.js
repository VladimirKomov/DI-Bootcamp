import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    categories: [],
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory: {
            reducer(state, action) {
                state.categories.push(action.payload)
            },
            prepare(title, description) {
                const newCategory = {
                    id: nanoid(),
                    title,
                    description
                }
                return {payload: newCategory}
            }
        },
        editCategory: (state, action) => {
            const {id, newTitle, newDescription} = action.payload;
            const existingCategory = state.categories.find(country => country.id === id);
            if (existingCategory) {
                existingCategory.title = newTitle ? newTitle : existingCategory.title;
                existingCategory.description = newDescription ? newDescription : existingCategory.description;
            }
        },
        removeCategory: (state, action) => {
            const {id} = action.payload;
            state.categories = state.categories.filter(category => category.id !== id);
        },
    }
})

export const {
    addCategory,
    editCategory,
    removeCategory
} = categoriesSlice.actions;
export default categoriesSlice.reducer;