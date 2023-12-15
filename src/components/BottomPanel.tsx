import { Link } from 'react-router-dom'

const BottomPanel: React.FC<{ stepNumber: number }> = props => {
	return (
		<div
			className="bg-white w-full relative flex items-center justify-end
        p-4">
			{props.stepNumber !== 1 && (
				<Link className="my-auto text-xs mr-auto text-gray-400" to={`/step-${props.stepNumber - 1}`}>
					Go back
				</Link>
			)}
			<Link to={`/step-${props.stepNumber + 1}`} className="bg-grenadeBlue text-white py-2 px-4 text-xs rounded-md">
				Next Step
			</Link>
		</div>
	)
}

export default BottomPanel
