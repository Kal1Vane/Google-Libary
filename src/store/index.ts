import { configureStore } from "@reduxjs/toolkit";
import { dataApi } from "../services/data-services";
import { rootReducer } from "./root-reducer";


export const store = configureStore({
    reducer : rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware)
});


export type State = ReturnType< typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
