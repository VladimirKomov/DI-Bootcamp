import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import ageReducer from "./ageSlice";

const ageStore = configureStore({
    reducer: {
        ageStore : ageReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default ageStore;