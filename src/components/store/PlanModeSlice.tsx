import { createSlice } from '@reduxjs/toolkit'

const initialState: { isYearly: boolean } = {
	isYearly: false,
}

export const planMode = createSlice({
	name: 'planMode',
	initialState,
	reducers: {
		togglePlan(state) {
			state.isYearly = !state.isYearly
		},
	},
})

export const planModeActions = planMode.actions
