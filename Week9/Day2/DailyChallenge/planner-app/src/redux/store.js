import { configureStore} from "@reduxjs/toolkit";
import taskReducer from "./slices/tasksSlice.js";

const store = configureStore({
    reducer: {
        tasksState: taskReducer
    }
})

export default store;