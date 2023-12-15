import { configureStore } from '@reduxjs/toolkit'
import { planMode } from './PlanModeSlice'

const store = configureStore({
	reducer: { planMode: planMode.reducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
