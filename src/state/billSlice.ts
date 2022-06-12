import { createSlice } from "@reduxjs/toolkit";
import { statusOption } from "../actions/statusOption";
import { stateType } from "./store";
import { getAllBills, postBill } from "../actions/billsAction"
import { itemType } from "./itemSlice";
 
type productItemType = {
    id: number | string,
    name: string,
    quantity: number,
    price: number
}

type billType = {
    id: number | string,
    customerName: string,
    sellerName: string,
    paid: number | string,
    date?: string,
    items: itemType[]
}

interface initialStateType {
    bills: billType[],
    status: statusOption,
    error: string | null
}

const initialState: initialStateType = {
    bills: [],
    status: statusOption.IDLE,
    error: null
}

const billSlice = createSlice(
    {
        name: 'bill',
        initialState,
        reducers: {

        },
        //GET BILLS
        extraReducers: (builder) => {
            builder.addCase(getAllBills.pending, (state, action) => {
                state.status = statusOption.LOADING
            })
            builder.addCase(getAllBills.fulfilled, (state, action) => {
                state.status = statusOption.SUCCEEDED
                state.bills = action.payload
            })
            builder.addCase(getAllBills.rejected, (state, action) => {
                state.status = statusOption.FAILED
                state.bills = []
            })

            //POST BILL
            builder.addCase(postBill.pending, (state) => {
                state.status = statusOption.LOADING
            })
            builder.addCase(postBill.fulfilled, (state, action) => {
                state.status = statusOption.SUCCEEDED
                state.bills.push(action.payload)
            })
            builder.addCase(postBill.rejected, (state) => {
                state.status = statusOption.FAILED
                state.error = "Sorry, something went wrong!"
            })
        }
    }
)

export default billSlice.reducer

export type { productItemType }
export type { billType }
export type { initialStateType }

export const getBills = (state: stateType) => state.bills.bills
export const getBillsStatus = (state: stateType) => state.bills.status
export const getBillsError = (state: stateType) => state.bills.error


