import { planModeActions } from '../store/PlanModeSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { motion } from 'framer-motion'

const ModeSwitch = () => {
	const dispatch = useAppDispatch()
	const isYearly = useAppSelector(state => state.planMode.isYearly)
	const handleSwitchMode = () => {
		dispatch(planModeActions.togglePlan())
	}

	return (
		<div className="mode-switch">
			<p className="mode-switch__text mode-switch__text--month">Monthly</p>
			<div
				style={{ justifyContent: isYearly ? 'flex-end' : 'flex-start' }}
				className="mode-switch__button"
				onClick={handleSwitchMode}>
				<motion.div className="mode-switch__button-circle"></motion.div>
			</div>
			<p className="mode-switch__text mode-switch__text--year">Yearly</p>
		</div>
	)
}

export default ModeSwitch
