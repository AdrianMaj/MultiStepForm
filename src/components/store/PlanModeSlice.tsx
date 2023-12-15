import { createSlice } from '@reduxjs/toolkit'

const initialState: {
	isYearly: boolean
	planVersion: { title: string; price: number }
	planAddOns: { title: string; price: number }[]
} = {
	isYearly: false,
	planVersion: {
		title: '',
		price: 0,
	},
	planAddOns: [],
}

export const planMode = createSlice({
	name: 'planMode',
	initialState,
	reducers: {
		togglePlan(state) {
			state.isYearly = !state.isYearly
		},
		choosePlan(state, action) {
			state.planVersion.title = action.payload.planName
			state.planVersion.price = action.payload.planPrice
		},
		addAddOn(state, action) {
			const addOn = action.payload.addOn
			const newObject = {
				...addOn,
			}
			state.planAddOns.push(newObject)
		},
		removeAddOn(state, action) {
			const recievedAddOn = action.payload.addOn
			const result = state.planAddOns.filter(addOn => {
				return addOn.title !== recievedAddOn.title
			})
			state.planAddOns = result
		},
	},
})

export const planModeActions = planMode.actions
