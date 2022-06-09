import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

const loggedInSlice = createSlice(
    {
        name: 'logged',
        initialState,
        reducers:{
            logInReducer(state, action){
                const stateLoggedIn = {...state, user: action.payload}
                return stateLoggedIn
            },
            logOutInReducer(state, action){
                const stateLoggedOut = {...state, user: null}
                return stateLoggedOut
            }

        }
    }
)

export default loggedInSlice.reducer

export const {logInReducer, logOutInReducer} = loggedInSlice.actions
