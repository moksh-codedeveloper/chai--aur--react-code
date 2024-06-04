import {configureStore} from "@reduxjs/toolkit";
//store created to fully ready 
import todoReducer from '../features/todo/todoSlice'
export const store = configureStore({
    reducer: todoReducer
});