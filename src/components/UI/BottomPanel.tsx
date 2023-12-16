import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useMutation } from '@tanstack/react-query'
import sendToBackend from '../../util/sendToBackend'
import { useAppSelector } from '../../hooks/hooks'

const BottomPanel: React.FC<{ stepNumber: number }> = props => {
	const MotionLink = motion(Link)
	const data = useAppSelector(state => state.planMode)
	const { mutate } = useMutation({
		mutationFn: sendToBackend,
	})
	const handleSendData = () => {
		mutate(data)
	}
	let button
	if (props.stepNumber === 4) {
		button = (
			<button className="bottom-panel__btn-confirm bottom-panel__btn" onClick={handleSendData}>
				Confirm
			</button>
		)
	} else {
		button = (
			<MotionLink
				className="bottom-panel__btn"
				whileHover={{
					backgroundColor: '#011a66',
				}}
				to={`/step-${props.stepNumber + 1}`}>
				Next Step
			</MotionLink>
		)
	}
	return (
		<div className="bottom-panel">
			{props.stepNumber !== 1 && (
				<Link className="bottom-panel__text-btn" to={`/step-${props.stepNumber - 1}`}>
					Go back
				</Link>
			)}
			{button}
		</div>
	)
}

export default BottomPanel
