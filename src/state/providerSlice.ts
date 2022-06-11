import { createSlice } from '@reduxjs/toolkit'
import { getAllProviders, postProvider } from '../actions/providersAction'
import { stateType } from './store'
import { statusOption } from '../actions/statusOption'
import { Action } from 'history'

type providerType = {
    id: number | string,
    nit: string,
    name: string,
    phone: string,
    email: string,
    note: string
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
                state.error = "Sorry, something went wrong!"
                state.providers = []
            })
            builder.addCase(postProvider.pending, (state) => {
                state.status = statusOption.LOADING
            })
            builder.addCase(postProvider.fulfilled, (state, action) => {
                state.status = statusOption.SUCCEEDED
                state.providers.push(action.payload)
            })
            builder.addCase(postProvider.rejected, (state) => {
                state.status = statusOption.FAILED
                state.error = "Sorry, something went wrong!"
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