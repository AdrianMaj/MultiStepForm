import BottomPanel from '../components/UI/BottomPanel'
import AppForm from '../components/UI/AppForm'
import Input from '../components/UI/Input'
import StepNumber from '../components/UI/StepNumber'
import { useAppSelector } from '../hooks/hooks'
import { validateEmail, validateName, validatePhone } from '../util/validation'
import { useState } from 'react'

const FormStepOne = () => {
	const inputs = useAppSelector(state => state.planMode.inputValues)
	const [errorMessage, setErrorMessage] = useState('')

	const handleValidation = () => {
		if (
			validateName(inputs.name) === true &&
			validateEmail(inputs.email) === true &&
			validatePhone(inputs.phoneNumber) === true
		) {
			return true
		} else if (
			validateName(inputs.name) !== true &&
			validateEmail(inputs.email) !== true &&
			validatePhone(inputs.phoneNumber) !== true
		) {
			setErrorMessage('Invalid: Name, E-mail and Phone number')
			return false
		} else if (
			validateName(inputs.name) === true &&
			validateEmail(inputs.email) !== true &&
			validatePhone(inputs.phoneNumber) !== true
		) {
			setErrorMessage('Invalid: E-mail and Phone number')
			return false
		} else if (
			validateName(inputs.name) === true &&
			validateEmail(inputs.email) === true &&
			validatePhone(inputs.phoneNumber) !== true
		) {
			setErrorMessage('Invalid Phone number')
			return false
		} else if (
			validateName(inputs.name) === true &&
			validateEmail(inputs.email) !== true &&
			validatePhone(inputs.phoneNumber) === true
		) {
			setErrorMessage('Invalid Email')
			return false
		} else if (
			validateName(inputs.name) !== true &&
			validateEmail(inputs.email) !== true &&
			validatePhone(inputs.phoneNumber) === true
		) {
			setErrorMessage('Invalid: Name and E-mail')
			return false
		} else if (
			validateName(inputs.name) !== true &&
			validateEmail(inputs.email) === true &&
			validatePhone(inputs.phoneNumber) === true
		) {
			setErrorMessage('Invalid Name')
			return false
		} else if (
			validateName(inputs.name) !== true &&
			validateEmail(inputs.email) === true &&
			validatePhone(inputs.phoneNumber) !== true
		) {
			setErrorMessage('Invalid: Name and Phone number')
			return false
		}
		return false
	}
	return (
		<>
			<StepNumber pageNumber={1} />
			
				<AppForm text="Please provide your name, email address, and phone number" title="Personal info">
					<Input inputType="text" identifier="name" placeholder="e.g. Stephen King" label="Name" />
					<Input inputType="email" identifier="email" placeholder="e.g. stephenking@lorem.com" label="Email Address" />
					<Input inputType="tel" identifier="phoneNumber" placeholder="e.g. +1 234 567 890" label="Phone number" />
					{errorMessage !== '' && <p className="error">{errorMessage}</p>}
				</AppForm>
				<BottomPanel valdiationFn={handleValidation} stepNumber={1} />
			</div>
		</>
	)
}

export default FormStepOne
