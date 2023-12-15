import AppForm from '../components/UI/AppForm'
import BottomPanel from '../components/UI/BottomPanel'
import Checkout from '../components/UI/Checkout'
import StepNumber from '../components/UI/StepNumber'

const FormStepFour = () => {
	return (
		<>
			<StepNumber pageNumber={4} />
			<AppForm title="Finishing up" text="Double-check everything before confirming">
				<Checkout />
			</AppForm>
			<BottomPanel stepNumber={4} />
		</>
	)
}

export default FormStepFour
