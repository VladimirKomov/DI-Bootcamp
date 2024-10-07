import {createSlice, nanoid} from '@reduxjs/toolkit';
import testBooks from "./booksData.js";

const initialState = {
    books: testBooks,
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: {
            reducer(state, action) {
                state.books.push(action.payload);
            },
            prepare(title, author, genre) {
                const newBook = {
                    id: nanoid(),
                    title,
                    author,
                    genre,
                }
                return {payload: newBook};
            }
        },
        removeBook(state, action) {
            const bookId = action.payload;
            state.books = state.books.filter(book => book.id !== bookId);
        },
        updateBook(state, action) {
            const {id, title, author, genre} = action.payload;
            const existingBook = state.books.find(book => book.id === id);
            if (existingBook) {
                existingBook.title = title;
                existingBook.author = author;
                existingBook.genre = genre;
            }
        }
    },
})

export const {
    addBook,
    removeBook,
    updateBook
} = booksSlice.actions;
export default booksSlice.reducer;
