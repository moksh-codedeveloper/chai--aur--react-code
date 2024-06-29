import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    status: false,
    username: null    
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login:(state, actions) => {
            state.status = true;
            state.userData = actions.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    },
});
export const {login, logout} = authSlice.actions;
export default authSlice.reducer;


// point to be noted :- 
// there is much better way to do this all things and we will do improvements after completing the project 