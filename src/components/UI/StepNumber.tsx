const StepNumber: React.FC<{ pageNumber: number }> = props => {
	const unactive: string =
		'h-8 w-8 flex justify-center items-center border-stepColor border-2 text-stepColor rounded-full font-medium text-sm'

	const active: string = 'h-8 w-8 flex justify-center items-center bg-stepColor rounded-full font-medium text-sm'

	return (
		<div className="bg-step-pattern bg-cover flex pt-8 pb-24 justify-center gap-5  absolute w-full top-0 z-10">
			<p className={props.pageNumber === 1 ? active : unactive}>1</p>
			<p className={props.pageNumber === 2 ? active : unactive}>2</p>
			<p className={props.pageNumber === 3 ? active : unactive}>3</p>
			<p className={props.pageNumber === 4 ? active : unactive}>4</p>
		</div>
	)
}

export default StepNumber
