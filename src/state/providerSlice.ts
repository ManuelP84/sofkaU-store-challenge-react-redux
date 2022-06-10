import { createSlice } from '@reduxjs/toolkit'
import { getAllProviders } from '../actions/providersAction'
import { stateType } from './store'
import { statusOption } from '../actions/statusOption'

type providerType = {
    id: String,
    nit: String,
    name: String,
    phone: String,
    email: String,
    note: String
}

interface initialStateType {
    providers: providerType[]
    status: statusOption
    error: string | null
}

const initialState: initialStateType = {
    providers: [],
    status: statusOption.IDLE,  /* Status options: idle, succeeded, failed, loading */
    error: null
}

const providersSlice = createSlice(
    {
        name: 'provider',
        initialState,
        reducers: {

        },
        extraReducers: (builder) => {
            builder.addCase(getAllProviders.pending, (state, action) => {
                state.status = statusOption.LOADING
            })
            builder.addCase(getAllProviders.fulfilled, (state, action) => {
                state.status = statusOption.SUCCEEDED
                state.providers = action.payload
            })
            builder.addCase(getAllProviders.rejected, (state, action) => {
                state.status = statusOption.FAILED
                state.providers = []
            })
        }
    }
)

export default providersSlice.reducer

export type { providerType }
export type { initialStateType }

export const getProviders = (state: stateType) => state.providers.providers
export const getProvidersStatus = (state: stateType) => state.providers.status
export const getProviderError = (state: stateType) => state.providers.error