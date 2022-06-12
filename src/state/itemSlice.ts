import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { providerType } from "./providerSlice";
import { stateType } from "./store";

type itemType = {
    id: number | string,
    name: string,
    description: string,
    min: number,
    max: number,
    quantity: number,
    price: number,
    subTotal: number,
    balance: number
    provider: providerType
     
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
                state.items.push(action.payload)          
            },
            clearItemsReducer(state): any{
                state.items = []
            }
        }
    }
)

export default itemsSlice.reducer

export const getItems = (state: stateType) => state.items.items

export const { addItemReducer } = itemsSlice.actions

export const { clearItemsReducer } = itemsSlice.actions


export type { itemType }