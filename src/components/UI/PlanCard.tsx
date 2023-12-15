const PlanCard: React.FC<{
	isActive: boolean
	imageName: string
	alt: string
	title: string
	price: number
}> = props => {
	const unactive = 'flex p-3 border rounded-md mb-2'
	const active = 'flex p-3 border border-purple-900 bg-purple-50 rounded-md mb-2'
	const isYearly: boolean = false
	return (
		<div className={props.isActive ? active : unactive}>
			<img src={`src/assets/images/${props.imageName}`} alt={props.alt} className="w-2/12" />
			<div className="flex flex-col ml-3 justify-between">
				<h3 className="text-sm font-medium text-grenadeBlue">{props.title}</h3>
				<p className="text-xs text-gray-400">{`$${isYearly ? props.price * 10 : props.price}/${
					isYearly ? 'yr' : 'mo'
				}`}</p>
			</div>
		</div>
	)
}

export default PlanCard
