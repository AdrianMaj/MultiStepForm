import { useAppSelector } from '../../hooks/hooks'

const PlanCard: React.FC<{
	isActive: boolean
	imageName: string
	alt: string
	title: string
	price: number
}> = props => {
	const isYearly = useAppSelector(state => state.planMode.isYearly)
	return (
		<div className={`plan-card ${props.isActive ? 'active' : ''}`}>
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
