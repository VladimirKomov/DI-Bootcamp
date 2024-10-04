import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

const taskStore = configureStore({
    reducer: {
        taskReducer: taskReducer,
    }
})

export default taskStore;