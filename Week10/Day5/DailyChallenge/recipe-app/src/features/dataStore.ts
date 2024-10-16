import {configureStore} from "@reduxjs/toolkit";
import dataReducer from './dataSlice';
import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        data: dataReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;