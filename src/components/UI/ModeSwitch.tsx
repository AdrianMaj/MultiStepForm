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
			<motion.p className="mode-switch__text mode-switch__text" animate={{ color: isYearly ? '#a5a5ac' : '#00103f' }}>
				Monthly
			</motion.p>
			<div className="mode-switch__button" onClick={handleSwitchMode}>
				{!isYearly && <motion.div layoutId="switch" className="mode-switch__button-circle"></motion.div>}
				{isYearly && (
					<motion.div
						layoutId="switch"
						className="mode-switch__button-circle mode-switch__button-circle--right"></motion.div>
				)}
			</div>
			<motion.p className="mode-switch__text mode-switch__text" animate={{ color: !isYearly ? '#a5a5ac' : '#00103f' }}>
				Yearly
			</motion.p>
		</div>
	)
}

export default ModeSwitch
