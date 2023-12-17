const StepNumber: React.FC<{ pageNumber: number }> = props => {
	return (
		<div className="steps">
			<div className="steps__step">
				<p className={'steps__step-indicator ' + (props.pageNumber === 1 ? 'steps__active' : '')}>1</p>
				<div className="steps__step-text">
					<p className="steps__step-name">Step 1</p>
					<p className="steps__step-title">your info</p>
				</div>
			</div>
			<div className="steps__step">
				<p className={'steps__step-indicator ' + (props.pageNumber === 2 ? 'steps__active' : '')}>2</p>
				<div className="steps__step-text">
					<p className="steps__step-name">Step 2</p>
					<p className="steps__step-title">select plan</p>
				</div>
			</div>
			<div className="steps__step">
				<p className={'steps__step-indicator ' + (props.pageNumber === 3 ? 'steps__active' : '')}>3</p>
				<div className="steps__step-text">
					<p className="steps__step-name">Step 3</p>
					<p className="steps__step-title">add-ons</p>
				</div>
			</div>
			<div className="steps__step">
				<p className={'steps__step-indicator ' + (props.pageNumber === 4 ? 'steps__active' : '')}>4</p>
				<div className="steps__step-text">
					<p className="steps__step-name">Step 4</p>
					<p className="steps__step-title">summary</p>
				</div>
			</div>
		</div>
	)
}

export default StepNumber
