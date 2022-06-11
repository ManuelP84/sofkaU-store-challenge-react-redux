import { createAsyncThunk } from "@reduxjs/toolkit"
import { providerType } from "../state/providerSlice"


const GET_ALL_PROVIDERS_URL = 'http://localhost:8081/v1/api/get/provider'
const POST_PROVIDER_URL = 'http://localhost:8081/v1/api/save/provider/'


const getAllProviders = createAsyncThunk ('getProvider', async () => {    
    const response = await fetch(GET_ALL_PROVIDERS_URL)
    return (await response.json() as providerType[])
})

const postProvider = createAsyncThunk ('saveProvider', async (provider: providerType) => {
    const response = await fetch(POST_PROVIDER_URL, {
        method: 'POST',
        headers: {'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(provider),   
    })
    return (await response.json() as providerType)
})

export {getAllProviders}
export { postProvider }
