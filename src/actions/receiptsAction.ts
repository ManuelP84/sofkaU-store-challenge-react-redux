import { createAsyncThunk } from "@reduxjs/toolkit"
import { receiptType } from "../state/receiptSlice"


const GET_ALL_RECEIPTS_URL = 'http://localhost:8081/v1/api/get/receipts'
const POST_RECEIPT_URL = 'http://localhost:8081/v1/api/save/receipt/'


//GET Action
const getAllReceipts = createAsyncThunk ('getReceipt', async () => {    
    const response = await fetch(GET_ALL_RECEIPTS_URL)
    return (await response.json() as receiptType[])
})

//POST Action
const postReceipt = createAsyncThunk ('saveReceipt', async (receipt: receiptType) => {
    const response = await fetch(POST_RECEIPT_URL, {
        method: 'POST',
        headers: {'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(receipt),   
    })
    return (await response.json() as receiptType)
})

export { getAllReceipts, postReceipt }