import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    customer: null
}

const customersSlice = createSlice(
    {
        name: 'customers',
        initialState,
        reducers: {

        }
    }
)

export default customersSlice.reducer