import AddOnCheck from '../components/UI/AddOnCheck'
import AppForm from '../components/UI/AppForm'
import BottomPanel from '../components/UI/BottomPanel'
import StepNumber from '../components/UI/StepNumber'

const FormStepThree = () => {
	return (
		<>
			<StepNumber pageNumber={3} />
			<AppForm title="Pick add-ons" text="Add-ons help enhance your gaming experience">
				<AddOnCheck />
			</AppForm>
			<BottomPanel stepNumber={3} />
		</>
	)
}

export default FormStepThree
