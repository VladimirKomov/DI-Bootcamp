import {configureStore} from "@reduxjs/toolkit";
import booksReducer from './booksSlice.js'
import {logger} from "redux-logger/src";

const booksStore = configureStore({
        reducer: {
            books: booksReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    }
);

export default booksStore;