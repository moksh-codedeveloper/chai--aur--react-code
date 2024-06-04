import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "hello world"}]
}
// give name properly or cautiously because it will show on browser one of extension  
// you can write the initial state object in todoSlice where initial state is written all that properties you can give 
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), // for unique ids 
                text: action.payload
            }
            state.todos.push(todo);
        }, // this is a syntax you will get it surely that this are present they are accessible 
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload) 
        },
    },

})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer