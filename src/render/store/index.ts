import { configureStore } from '@reduxjs/toolkit'
import appReducer from './app'
import aboutReducer from './about'

const store = configureStore({
    reducer: {
        app: appReducer,
        about: aboutReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch