import { configureStore } from '@reduxjs/toolkit'
import appReducer from './state/app'
import aboutReducer from './state/about'

const store = configureStore({
    reducer: {
        app: appReducer,
        about: aboutReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch