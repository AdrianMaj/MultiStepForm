import BottomPanel from '../components/UI/BottomPanel'
import AppForm from '../components/UI/AppForm'
import Input from '../components/UI/Input'
import StepNumber from '../components/UI/StepNumber'
import { useAppSelector } from '../hooks/hooks'
import { validateEmail, validateName, validatePhone } from '../util/validation'
import { useState } from 'react'

const FormStepOne = () => {
	const inputs = useAppSelector(state => state.planMode.inputValues)
	const [errorMsg, setErrorMsg] = useState({
		name: false,
		email: false,
		phone: false,
	})

	const handleValidation = () => {
		if (
			validateName(inputs.name) === true &&
			validateEmail(inputs.email) === true &&
			validatePhone(inputs.phoneNumber) === true
		) {
			return true
		} else if (
			validateEmail(inputs.email) !== true ||
			validateName(inputs.name) !== true ||
			validatePhone(inputs.phone) !== true
		) {
			if (validateName(inputs.name) !== true) {
				setErrorMsg(prevState => ({
					...prevState,
					name: true,
				}))
			}
			if (validateEmail(inputs.email) !== true) {
				setErrorMsg(prevState => ({
					...prevState,
					email: true,
				}))
			}
			if (validatePhone(inputs.phone) !== true) {
				setErrorMsg(prevState => ({
					...prevState,
					phone: true,
				}))
			}
			return false
		}
		return false
	}
	return (
		<>
			<StepNumber pageNumber={1} />
			<div className="container">
				<AppForm text="Please provide your name, email address, and phone number" title="Personal info">
					<Input
						inputType="text"
						identifier="name"
						placeholder="e.g. Stephen King"
						label="Name"
						showError={errorMsg.name}
					/>
					<Input
						inputType="email"
						identifier="email"
						placeholder="e.g. stephenking@lorem.com"
						label="Email Address"
						showError={errorMsg.email}
					/>
					<Input
						inputType="tel"
						identifier="phoneNumber"
						placeholder="e.g. +1 234 567 890"
						label="Phone number"
						showError={errorMsg.phone}
					/>
				</AppForm>
				<BottomPanel valdiationFn={handleValidation} stepNumber={1} />
			</div>
		</>
	)
}

export default FormStepOne
