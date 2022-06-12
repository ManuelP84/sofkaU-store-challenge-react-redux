import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from "./loggedInSlice";
import providerReducer from "./providerSlice";
import productReducer from "./productSlice"
import billReducer from "./billSlice"
import { useDispatch } from "react-redux";
import itemReducer from "../state/itemSlice"

const store = configureStore({
    reducer: {
        logged: loggedReducer,
        providers: providerReducer,
        products: productReducer,
        bills: billReducer,
        items: itemReducer
    }
});

type stateType = ReturnType<typeof store.getState>
type dispatchType = typeof store.dispatch
export const dispatchWithType = () => useDispatch<dispatchType>()

export default store

export type {stateType}

export type { dispatchType }