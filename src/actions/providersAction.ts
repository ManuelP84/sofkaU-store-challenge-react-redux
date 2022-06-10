import { createAsyncThunk } from "@reduxjs/toolkit"
import { providerType } from "../state/providerSlice"

const GET_ALL_PROVIDERS_URL = 'http://localhost:8081/v1/api/get/provider'

const getAllProviders = createAsyncThunk ('getAllProviders', async () => {    
    const response = await fetch(GET_ALL_PROVIDERS_URL)
    return (await response.json() as providerType[])
    console.log(response.status)
})

export {getAllProviders}
