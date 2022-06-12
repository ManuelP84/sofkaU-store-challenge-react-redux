import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { stateType } from "./store";

type itemType = {
    id: number | string,
    name: string,
    quantity: number,
    price: number,
    subTotal: number
     
}

interface initialStateType {
    items: itemType[]
}

const initialState: initialStateType = {
    items: []
}

const itemsSlice = createSlice (
    {
        name: 'item',
        initialState,
        reducers : {
            addItemReducer(state, action): any{
                console.log(state.items) // prueba   25
                console.log(action.payload) // prueba   26
                state.items.push(action.payload)
                console.log(state.items) // prueba   27             
                //const newState = [...state.items, action.payload]
                //return newState
            }
        }
    }
)

export default itemsSlice.reducer

export const getItems = (state: stateType) => state.items.items

export const { addItemReducer } = itemsSlice.actions

export type { itemType }