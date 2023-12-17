import Step from './Step'

const StepNumber: React.FC<{ pageNumber: number }> = props => {
	return (
		<div className="steps">
			<Step pageNumber={props.pageNumber} stepNumber={1} text="your info" />
			<Step pageNumber={props.pageNumber} stepNumber={2} text="select plan" />
			<Step pageNumber={props.pageNumber} stepNumber={3} text="add-ons" />
			<Step pageNumber={props.pageNumber} stepNumber={4} text="summary" />
		</div>
	)
}

export default StepNumber
