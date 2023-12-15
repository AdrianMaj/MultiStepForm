import { planModeActions } from '../store/PlanModeSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { motion } from 'framer-motion'

const ModeSwitch = () => {
	const dispatch = useAppDispatch()
	const isYearly = useAppSelector(state => state.planMode.isYearly)
	const handleSwitchMode = () => {
		dispatch(planModeActions.togglePlan())
	}
	const classes: string = 'rounded-full bg-white w-3 h-3 mx-1'

	return (
		<div onClick={handleSwitchMode}>
			<p>Monthly</p>
			<div>
				<motion.div layout className={classes}></motion.div>
			</div>
			<p>Yearly</p>
		</div>
	)
}

export default ModeSwitch
