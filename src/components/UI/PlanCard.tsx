import { motion } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { planModeActions } from '../store/PlanModeSlice'

const PlanCard: React.FC<{
	// isActive: boolean
	imageName: string
	alt: string
	title: string
	price: number
}> = props => {
	const isYearly = useAppSelector(state => state.planMode.isYearly)
	const planVersionTitle = useAppSelector(state => state.planMode.planVersion.title)
	const dispatch = useAppDispatch()
	const price = isYearly ? props.price * 10 : props.price

	const handleChoose = () => {
		dispatch(planModeActions.choosePlan({ planName: props.title, planPrice: price }))
	}

	return (
		<motion.div
			whileHover={{
				border: '2px solid #7c75b1',
			}}
			animate={{
				backgroundColor: planVersionTitle === props.title ? '#f8f9fe' : '#fff',
				border: planVersionTitle === props.title ? '2px solid #7c75b1' : '2px solid #d1d1d1',
			}}
			onClick={handleChoose}
			className="plan-card">
			<img className="plan-card__image" src={`/images/${props.imageName}`} alt={props.alt} />
			<div className="plan-card__text">
				<h3 className="plan-card__title">{props.title}</h3>
				<p className="plan-card__price">{`$${price}/${isYearly ? 'yr' : 'mo'}`}</p>
				{isYearly && <p className="plan-card__free">2 months free</p>}
			</div>
		</motion.div>
	)
}

export default PlanCard
