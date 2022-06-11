import { createSlice } from "@reduxjs/toolkit";
import { stateType } from "./store";
import { statusOption } from "../actions/statusOption";
import { getAllProducts, postProduct } from "../actions/productsAction"
import { providerType } from "./providerSlice";

type productType = {
    id: number | string,
    name: string,
    description: string,
    min: number,
    max: number,
    quantity: number,
    price: number,
    provider: providerType
}

interface initialStateType {
    products: productType[],
    status: statusOption,
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
        //GET PRODUCTS
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

            //POST PRODUCTS
            builder.addCase(postProduct.pending, (state) => {
                state.status = statusOption.LOADING
            })
            builder.addCase(postProduct.fulfilled, (state, action) => {
                state.status = statusOption.SUCCEEDED
                state.products.push(action.payload)
            })
            builder.addCase(postProduct.rejected, (state) => {
                state.status = statusOption.FAILED
                state.error = "Sorry, something went wrong!"
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


