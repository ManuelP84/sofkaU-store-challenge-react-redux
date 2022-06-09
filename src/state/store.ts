import { configureStore } from "@reduxjs/toolkit";
import loggedInSlice from "./loggedInSlice";



const store = configureStore({
    reducer: {
        logged: loggedInSlice
    }
})

type stateType = ReturnType<typeof store.getState>

export default store

export type {stateType}