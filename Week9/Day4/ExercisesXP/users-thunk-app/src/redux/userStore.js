import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "./userSlice";

const userStore = configureStore({
    reducer: {
        usersStore : userReducer,
    },
    //use common middleware plus logger
    //if not necessary - del
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default userStore;