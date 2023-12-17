import AddOnCheck from '../components/UI/AddOnCheck'
import AppForm from '../components/UI/AppForm'
import BottomPanel from '../components/UI/BottomPanel'
import StepNumber from '../components/UI/StepNumber'

const FormStepThree = () => {
	const handleValidation = () => {
		return true
	}
	return (
		<>
			<StepNumber pageNumber={3} />
			<div className="container">
				<AppForm title="Pick add-ons" text="Add-ons help enhance your gaming experience">
					<AddOnCheck title="Online service" text="Access to multiplayer games" price={1} />
					<AddOnCheck title="Larger storage" text="Extra 1TB of cloud save" price={2} />
					<AddOnCheck title="Customizable profile" text="Custom theme on your profile" price={3} />
				</AppForm>
				<BottomPanel valdiationFn={handleValidation} stepNumber={3} />
			</div>
		</>
	)
}

export default FormStepThree
