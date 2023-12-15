import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { planModeActions } from '../store/PlanModeSlice'

const AddOnCheck: React.FC<{ title: string; text: string; price: number }> = props => {
	const isYearly = useAppSelector(state => state.planMode.isYearly)
	const selectedAddOns = useAppSelector(state => state.planMode.planAddOns)
	const dispatch = useAppDispatch()
	let isActive = false
	const price = isYearly ? props.price * 10 : props.price
	const addOn = {
		title: props.title,
		price: price,
	}

	const toggleAddOn = () => {
		if (selectedAddOns.includes(addOn)) {
			dispatch(planModeActions.removeAddOn(addOn))
			isActive = false
		} else {
			dispatch(planModeActions.addAddOn(addOn))
			isActive = true
		}
	}

	return (
		<div onClick={toggleAddOn} className={`add-on ${isActive ? 'active' : ''}`}>
			<div className="add-on__checkbox active">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="icon icon-tabler icon-tabler-check"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					stroke-width="3"
					stroke="white"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M5 12l5 5l10 -10" />
				</svg>
			</div>
			<div className="add-on__text">
				<h3 className="add-on__title">{props.title}</h3>
				<p className="add-on__subtitle">{props.text}</p>
			</div>
			<div className="add-on__price">
				+${price}/{isYearly ? 'yr' : 'mo'}
			</div>
		</div>
	)
}

export default AddOnCheck
