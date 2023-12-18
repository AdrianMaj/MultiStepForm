import { motion } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { planModeActions } from '../store/PlanModeSlice'

const AddOnCheck: React.FC<{ title: string; text: string; price: number }> = props => {
	const isYearly = useAppSelector(state => state.planMode.isYearly)
	const selectedAddOns = useAppSelector(state => state.planMode.planAddOns)
	const dispatch = useAppDispatch()
	const price = isYearly ? props.price * 10 : props.price
	const addOn = {
		title: props.title,
		price: price,
	}
	const existingAddOn = selectedAddOns.find(item => item.title === addOn.title)

	const toggleAddOn = () => {
		if (existingAddOn) {
			dispatch(planModeActions.removeAddOn({ addOn }))
		} else {
			dispatch(planModeActions.addAddOn({ addOn }))
		}
	}

	return (
		<motion.div
			whileHover={{
				border: '2px solid #7c75b1',
			}}
			animate={{
				border: existingAddOn ? '2px solid #7c75b1' : '2px solid #d1d1d1',
				backgroundColor: existingAddOn ? '#f8f9fe' : '#fff',
			}}
			onClick={toggleAddOn}
			className="add-on">
			<motion.div
				animate={{
					backgroundColor: existingAddOn ? '#493cfe' : '#fff',
					border: existingAddOn ? '0.5px solid transparent' : '0.5px solid #a5a5ac',
				}}
				className="add-on__checkbox">
				<motion.svg
					animate={{
						display: existingAddOn ? 'block' : 'none',
					}}
					xmlns="http://www.w3.org/2000/svg"
					className="icon icon-tabler icon-tabler-check"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					strokeWidth="3"
					stroke="white"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M5 12l5 5l10 -10" />
				</motion.svg>
			</motion.div>
			<div className="add-on__text">
				<h3 className="add-on__title">{props.title}</h3>
				<p className="add-on__subtitle">{props.text}</p>
			</div>
			<div className="add-on__price">
				+${price}/{isYearly ? 'yr' : 'mo'}
			</div>
		</motion.div>
	)
}

export default AddOnCheck
