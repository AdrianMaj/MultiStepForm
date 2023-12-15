import BottomPanel from '../components/BottomPanel'
import AppForm from '../components/UI/AppForm'
import ModeSwitch from '../components/UI/ModeSwitch'
import PlanCard from '../components/UI/PlanCard'
import StepNumber from '../components/UI/StepNumber'

const FormStepOne = () => {
	return (
		<div className="flex flex-col justify-between h-full">
			<StepNumber pageNumber={2} />
			<AppForm title="Select your plan" text="You have the option of monthly or yearly billing.">
				<PlanCard isActive={true} imageName="icon-arcade.svg" title="Arcade" price={9} alt="Orange photo of joystick" />
				<PlanCard
					isActive={false}
					imageName="icon-advanced.svg"
					title="Advanced"
					price={12}
					alt="Red photo of gamepad"
				/>
				<PlanCard isActive={false} imageName="icon-pro.svg" title="Pro" price={15} alt="Blue photo of gamepad" />
				<ModeSwitch />
			</AppForm>
			<BottomPanel stepNumber={2} />
		</div>
	)
}

export default FormStepOne
