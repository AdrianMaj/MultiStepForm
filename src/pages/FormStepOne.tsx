import BottomPanel from '../components/UI/BottomPanel'
import AppForm from '../components/UI/AppForm'
import Input from '../components/UI/Input'
import StepNumber from '../components/UI/StepNumber'

const FormStepOne = () => {
	return (
		<>
			<StepNumber pageNumber={1} />
			<AppForm text="Please provide your name, email address, and phone number" title="Personal info">
				<Input inputType="text" identifier="name" placeholder="e.g. Stephen King" label="Name" />
				<Input inputType="email" identifier="email" placeholder="e.g. stephenking@lorem.com" label="Email Address" />
				<Input inputType="tel" identifier="phoneNumber" placeholder="e.g. +1 234 567 890" label="Phone number" />
			</AppForm>
			<BottomPanel stepNumber={1} />
		</>
	)
}

export default FormStepOne
