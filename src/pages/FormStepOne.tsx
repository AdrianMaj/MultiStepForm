import BottomPanel from '../components/UI/BottomPanel'
import AppForm from '../components/UI/AppForm'
import Input from '../components/UI/Input'
import StepNumber from '../components/UI/StepNumber'
import { useRef } from 'react'

const FormStepOne = () => {
	const name = useRef()
	const email = useRef()
	const phoneNumber = useRef()
	const handleFormInfo = () => {}
	return (
		<>
			<StepNumber pageNumber={1} />
			<AppForm text="Please provide your name, email address, and phone number" title="Personal info">
				<Input ref={name} inputType="text" placeholder="e.g. Stephen King" label="Name" />
				<Input ref={email} inputType="email" placeholder="e.g. stephenking@lorem.com" label="Email Address" />
				<Input ref={phoneNumber} inputType="tel" placeholder="e.g. +1 234 567 890" label="Phone number" />
			</AppForm>
			<BottomPanel stepNumber={1} onFormInfo={handleFormInfo} />
		</>
	)
}

export default FormStepOne
