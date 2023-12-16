import { createSlice } from '@reduxjs/toolkit'

const initialState: {
	isYearly: boolean
	planVersion: { title: string; price: number }
	planAddOns: { title: string; price: number }[]
	inputValues: { [key: string]: string }
	isError: boolean
} = {
	isYearly: false,
	planVersion: {
		title: '',
		price: 0,
	},
	planAddOns: [],
	inputValues: { name: '', email: '', phoneNumber: '' },
	isError: false,
}

export const planMode = createSlice({
	name: 'planMode',
	initialState,
	reducers: {
		togglePlan(state) {
			state.isYearly = !state.isYearly
			state.planVersion = initialState.planVersion
			state.planAddOns = initialState.planAddOns
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
		changeValue(state, action) {
			const inputId: string = action.payload.inputId
			const inputValue: string = action.payload.inputValue
			state.inputValues[inputId] = inputValue
		},
		showValidationError(state) {
			state.isError = true
		},
		hideValidationError(state) {
			state.isError = false
		},
	},
})

export const planModeActions = planMode.actions
