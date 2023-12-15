import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const BottomPanel: React.FC<{ stepNumber: number }> = props => {
	const MotionLink = motion(Link)
	return (
		<div className="bottom-panel">
			{props.stepNumber !== 1 && (
				<Link className="bottom-panel__text-btn" to={`/step-${props.stepNumber - 1}`}>
					Go back
				</Link>
			)}
			<MotionLink
				className="bottom-panel__btn"
				whileHover={{
					backgroundColor: '#011a66',
				}}
				to={`/step-${props.stepNumber + 1}`}>
				Next Step
			</MotionLink>
		</div>
	)
}

export default BottomPanel
