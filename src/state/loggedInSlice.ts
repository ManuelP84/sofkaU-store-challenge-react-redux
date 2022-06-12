import { createSlice } from "@reduxjs/toolkit";

type userType = {
    email: string,
    emailVerified: boolean,
    photoURL: string | null 
}

interface initialStateType {
    user: userType | null
}

const initialState: initialStateType = {
    user: null
}

const loggedInSlice = createSlice(
    {
        name: 'logged',
        initialState,
        reducers:{
            logInReducer(state, action){
                state.user = action.payload
            },
            logOutInReducer(state){
                state.user = null
            }

        }
    }
)

export default loggedInSlice.reducer

export const {logInReducer, logOutInReducer} = loggedInSlice.actions

export type { userType }

export type loggedStateType = typeof initialState
