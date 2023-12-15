import BottomPanel from '../components/UI/BottomPanel'
import AppForm from '../components/UI/AppForm'
import ModeSwitch from '../components/UI/ModeSwitch'
import PlanCard from '../components/UI/PlanCard'
import StepNumber from '../components/UI/StepNumber'
// import { motion } from 'framer-motion'

const FormStepOne = () => {
	return (
		<>
			<StepNumber pageNumber={2} />
			<AppForm title="Select your plan" text="You have the option of monthly or yearly billing.">
				<PlanCard imageName="icon-arcade.svg" title="Arcade" price={9} alt="Orange photo of joystick" />
				<PlanCard imageName="icon-advanced.svg" title="Advanced" price={12} alt="Red photo of gamepad" />
				<PlanCard imageName="icon-pro.svg" title="Pro" price={15} alt="Blue photo of gamepad" />
				<ModeSwitch />
			</AppForm>
			<BottomPanel stepNumber={2} />
		</>
	)
}

export default FormStepOne
