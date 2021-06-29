import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const about  = createSlice({
    name: "about",
    initialState: {
        name: "crf"
    },
    reducers: {
        increment: (state, action: PayloadAction<string>) => {
            state.name += action.payload
        }
    }
})

export default about.reducer