import BottomPanel from '../components/UI/BottomPanel'
import AppForm from '../components/UI/AppForm'
import ModeSwitch from '../components/UI/ModeSwitch'
import PlanCard from '../components/UI/PlanCard'
import StepNumber from '../components/UI/StepNumber'
import { useAppSelector } from '../hooks/hooks'
import { useState } from 'react'
// import { motion } from 'framer-motion'

const FormStepOne = () => {
	const planVersion = useAppSelector(state => state.planMode.planVersion)
	const [error, setError] = useState('')
	const handleValidation = () => {
		if (planVersion.title !== '') {
			return true
		} else {
			setError('You must select plan before continuing!')
			return false
		}
	}
	return (
		<>
			<StepNumber pageNumber={2} />
			<div className="container">
				<AppForm title="Select your plan" text="You have the option of monthly or yearly billing.">
					<div className="plan-container">
						<PlanCard imageName="icon-arcade.svg" title="Arcade" price={9} alt="Orange photo of joystick" />
						<PlanCard imageName="icon-advanced.svg" title="Advanced" price={12} alt="Red photo of gamepad" />
						<PlanCard imageName="icon-pro.svg" title="Pro" price={15} alt="Blue photo of gamepad" />
					</div>
					<ModeSwitch />
					{error !== '' && <p className="error">{error}</p>}
				</AppForm>
				<BottomPanel valdiationFn={handleValidation} stepNumber={2} />
			</div>
		</>
	)
}

export default FormStepOne
