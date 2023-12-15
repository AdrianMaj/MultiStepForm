const StepNumber: React.FC<{ pageNumber: number }> = props => {
	return (
		<div className="steps">
			<p className={'steps__step-indicator ' + (props.pageNumber === 1 ? 'steps__active' : '')}>1</p>
			<p className={'steps__step-indicator ' + (props.pageNumber === 2 ? 'steps__active' : '')}>2</p>
			<p className={'steps__step-indicator ' + (props.pageNumber === 3 ? 'steps__active' : '')}>3</p>
			<p className={'steps__step-indicator ' + (props.pageNumber === 4 ? 'steps__active' : '')}>4</p>
		</div>
	)
}

export default StepNumber
