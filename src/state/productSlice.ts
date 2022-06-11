import { createSlice } from "@reduxjs/toolkit";
import { stateType } from "./store";
import { statusOption } from "../actions/statusOption";
import { getAllProducts } from "../actions/productsAction"
import { providerType } from "./providerSlice";

type productType = {
    //id: String,
    name: String,
    description: String,
    min: Number,
    max: Number,
    quantity: Number,
    price: Number,
    provider: providerType
}

interface initialStateType {
    products: productType[]
    status: statusOption
    error: string | null
}

const initialState: initialStateType = {
    products: [],
    status: statusOption.IDLE,  /* Status options: idle, succeeded, failed, loading */
    error: null
}

const productsSlice = createSlice(
    {
        name: 'product',
        initialState,
        reducers: {

        },
        extraReducers: (builder) => {
            builder.addCase(getAllProducts.pending, (state, action) => {
                state.status = statusOption.LOADING
            })
            builder.addCase(getAllProducts.fulfilled, (state, action) => {
                state.status = statusOption.SUCCEEDED
                state.products = action.payload
            })
            builder.addCase(getAllProducts.rejected, (state, action) => {
                state.status = statusOption.FAILED
                state.products = []
            })
        }
    }
)

export default productsSlice.reducer

export type { productType }
export type { initialStateType }

export const getProducts = (state: stateType) => state.products.products
export const getProductsStatus = (state: stateType) => state.products.status
export const getProductsError = (state: stateType) => state.products.error


