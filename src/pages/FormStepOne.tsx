import BottomPanel from '../components/UI/BottomPanel'
import AppForm from '../components/UI/AppForm'
import Input from '../components/UI/Input'
import StepNumber from '../components/UI/StepNumber'
import { useAppSelector } from '../hooks/hooks'
import { validateEmail, validateName, validatePhone } from '../util/validation'
import { useState } from 'react'

const FormStepOne = () => {
	const inputs = useAppSelector(state => state.planMode.inputValues)
	const [errorMessages, setErrorMessages] = useState({
		name: '',
		email: '',
		phoneNumber: '',
	})
	const [errors, setErrors] = useState({
		name: true,
		email: true,
		phoneNumber: true,
	})

	const handleValidation = () => {
		const newErrors = {
			name: !validateName(inputs.name),
			email: !validateEmail(inputs.email),
			phoneNumber: !validatePhone(inputs.phoneNumber),
		}
		setErrors(newErrors)

		const newErrorMessages = {
			name: newErrors.name ? 'Invalid name' : '',
			email: newErrors.email ? 'Invalid email' : '',
			phoneNumber: newErrors.phoneNumber ? 'Invalid phone number' : '',
		}

		setErrorMessages(newErrorMessages)

		const hasAnyError = Object.values(newErrors).some(error => error === true)

		if (hasAnyError) {
			return false
		}
		return true
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
						isInvalid={errors.name}
						errorMessage={errorMessages.name}
					/>
					<Input
						inputType="email"
						identifier="email"
						placeholder="e.g. stephenking@lorem.com"
						label="Email Address"
						isInvalid={errors.email}
						errorMessage={errorMessages.email}
					/>
					<Input
						inputType="tel"
						identifier="phoneNumber"
						placeholder="e.g. +1 234 567 890"
						label="Phone number"
						isInvalid={errors.phoneNumber}
						errorMessage={errorMessages.phoneNumber}
					/>
				</AppForm>
				<BottomPanel valdiationFn={handleValidation} stepNumber={1} />
			</div>
		</>
	)
}

export default FormStepOne
