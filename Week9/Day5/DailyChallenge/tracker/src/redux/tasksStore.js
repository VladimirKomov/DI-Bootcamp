import {configureStore} from "@reduxjs/toolkit";
import tasksReducer from './tasksSlice.js'
import categoriesReducer from "./categoriesSlice.js";
import {logger} from "redux-logger";

const tasksStore = configureStore({
    reducer: {
        tasks: tasksReducer,
        categories: categoriesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default tasksStore;