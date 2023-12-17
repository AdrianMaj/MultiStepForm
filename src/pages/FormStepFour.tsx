import AppForm from '../components/UI/AppForm'
import BottomPanel from '../components/UI/BottomPanel'
import Checkout from '../components/UI/Checkout'
import StepNumber from '../components/UI/StepNumber'

const FormStepFour = () => {
	return (
		<>
			<StepNumber pageNumber={4} />
			<div className="container">
				<AppForm title="Finishing up" text="Double-check everything before confirming">
					<Checkout />
				</AppForm>
				<BottomPanel valdiationFn={() => true} stepNumber={4} />
			</div>
		</>
	)
}

export default FormStepFour
