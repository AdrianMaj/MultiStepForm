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

	const handleChoose = () => {
		dispatch(planModeActions.choosePlan({ planName: props.title, planPrice: props.price }))
	}

	return (
		<div onClick={handleChoose} className={`plan-card ${planVersionTitle === props.title ? 'active' : ''}`}>
			<img className="plan-card__image" src={`src/assets/images/${props.imageName}`} alt={props.alt} />
			<div className="plan-card__text">
				<h3 className="plan-card__title">{props.title}</h3>
				<p className="plan-card__price">{`$${isYearly ? props.price * 10 : props.price}/${isYearly ? 'yr' : 'mo'}`}</p>
				{isYearly && <p className="plan-card__free">2 months free</p>}
			</div>
		</div>
	)
}

export default PlanCard
