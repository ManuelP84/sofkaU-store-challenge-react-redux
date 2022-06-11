import { createAsyncThunk } from "@reduxjs/toolkit"
import { productType } from "../state/productSlice"

const GET_ALL_PRODUCTS = 'http://localhost:8081/v1/api/get/products'
const POST_PRODUCT_URL = 'http://localhost:8081/v1/api/save/product/'

const getAllProducts = createAsyncThunk ('getAllProducts', async () => {    
    const response = await fetch(GET_ALL_PRODUCTS)
    return (await response.json() as productType[])
})

const postProduct = createAsyncThunk ('saveProduct', async (product: productType) => {
    const response = await fetch(POST_PRODUCT_URL, {
        method: 'POST',
        headers: {'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(product),
})
return (await response.json() as productType)
})

export { getAllProducts }
export { postProduct }
