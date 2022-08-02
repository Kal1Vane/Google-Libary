import { combineReducers } from "@reduxjs/toolkit";
import { dataApi } from "../services/data-services";

export const rootReducer = combineReducers({
  [dataApi.reducerPath] : dataApi.reducer
})