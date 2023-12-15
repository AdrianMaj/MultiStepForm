import { planModeActions } from '../store/PlanModeSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'

const ModeSwitch = () => {
	const dispatch = useAppDispatch()
	const isYearly = useAppSelector(state => state.planMode.isYearly)
	const handleSwitchMode = () => {
		dispatch(planModeActions.togglePlan())
	}
	const active: string = 'rounded-full bg-white w-3 h-3 ml-1 mr-1'
	const unactive: string = 'rounded-full bg-white w-3 h-3 ml-1 mr-1'
	return (
		<div onClick={handleSwitchMode} className="bg-background flex justify-center gap-6 p-3 mt-4">
			<p className="text-xs font-medium text-grenadeBlue">Monthly</p>
			<div className="w-10 bg-grenadeBlue rounded-full h-5 flex justify-start items-center">
				<div className={isYearly ? unactive : active}></div>
			</div>
			<p className="text-xs font-medium text-gray-400">Yearly</p>
		</div>
	)
}

export default ModeSwitch
