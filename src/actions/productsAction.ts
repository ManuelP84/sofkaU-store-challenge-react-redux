import { createAsyncThunk } from "@reduxjs/toolkit"
import { productType } from "../state/productSlice"

const GET_ALL_PRODUCTS = 'http://localhost:8081/v1/api/get/products'

const getAllProducts = createAsyncThunk ('getAllProducts', async () => {    
    const response = await fetch(GET_ALL_PRODUCTS)
    return (await response.json() as productType[])
})

export { getAllProducts }