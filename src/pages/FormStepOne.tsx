import BottomPanel from '../components/BottomPanel'
import AppForm from '../components/UI/AppForm'
import Input from '../components/UI/Input'
import StepNumber from '../components/UI/StepNumber'

const FormStepOne = () => {
	return (
		<div className="flex flex-col justify-between h-full">
			<StepNumber pageNumber={1} />
			<AppForm text="Please provide your name, email address, and phone number" title="Personal info">
				<Input inputType="text" placeholder="e.g. Stephen King" label="Name" />
				<Input inputType="email" placeholder="e.g. stephenking@lorem.com" label="Email Address" />
				<Input inputType="tel" placeholder="e.g. +1 234 567 890" label="Phone number" />
			</AppForm>
			<BottomPanel stepNumber={1} />
		</div>
	)
}

export default FormStepOne
