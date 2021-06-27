import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const app  = createSlice({
    name: "app",
    initialState: {
        value: 23
    },
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})

export default app.reducer