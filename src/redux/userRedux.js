import { createSlice } from '@reduxjs/toolkit'
const userSlice = createSlice(
    {
        name: "user",
        initialState: {
           isFetching: false,
            currentUser: null,
            error: false
        },
        reducers: {
            loginStart:(state)=>{
                state.isFetching=true;
                state.currentUser=null
            },
            loginSuccess:(state,action)=>{
                state.isFetching=false;
                state.currentUser=action.payload
            },loginError:(state)=>{
                state.isFetching=false;
                state.error=true
            },
            logoutSuccess:(state)=>{
                state.isFetching=false;
                state.currentUser=null;
                state.error=false;

            }

        },
    })
export const { loginError,loginStart,loginSuccess,logoutSuccess } = userSlice.actions
export default userSlice.reducer