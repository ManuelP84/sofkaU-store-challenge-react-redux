import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from "./loggedInSlice";
import providerReducer from "./providerSlice";
import productReducer from "./productSlice"
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer: {
        logged: loggedReducer,
        providers: providerReducer,
        products: productReducer
    }
});

type stateType = ReturnType<typeof store.getState>
type dispatchType = typeof store.dispatch
export const dispatchWithType = () => useDispatch<dispatchType>()

export default store

export type {stateType}

export type { dispatchType }