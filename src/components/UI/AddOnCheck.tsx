import { useAppSelector } from '../../hooks/hooks'

const AddOnCheck: React.FC<{ title: string; text: string; price: number }> = props => {
	const isYearly = useAppSelector(state => state.planMode.isYearly)

	return (
		<div className="add-on">
			<div className="add-on__checkbox" />
			<div className="add-on__text">
				<h3 className="add-on__title">{props.title}</h3>
				<p className="add-on__subtitle">{props.text}</p>
			</div>
			<div className="add-on__price">
				+${isYearly ? props.price * 10 : props.price}/{isYearly ? 'yr' : 'mo'}
			</div>
		</div>
	)
}

export default AddOnCheck
