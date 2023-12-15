import { createSlice } from '@reduxjs/toolkit'

const initialState: { isYearly: boolean; planVersion: string } = {
	isYearly: false,
	planVersion: '',
}

export const planMode = createSlice({
	name: 'planMode',
	initialState,
	reducers: {
		togglePlan(state) {
			state.isYearly = !state.isYearly
		},
		choosePlan(state, action) {
			state.planVersion = action.payload.planName
		},
	},
})

export const planModeActions = planMode.actions
