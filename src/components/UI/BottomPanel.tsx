import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import sendToBackend from '../../util/sendToBackend'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { planModeActions } from '../store/PlanModeSlice'
import { motion } from 'framer-motion'

const BottomPanel: React.FC<{ stepNumber: number; valdiationFn: () => boolean }> = props => {
	const data = useAppSelector(state => state.planMode)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const MotionLink = motion(Link)
	const { mutate } = useMutation({
		mutationFn: sendToBackend,
	})
	const handleSendData = () => {
		mutate(data)
		navigate('/success')
	}
	const handleButtonClick = () => {
		if (props.valdiationFn() === true) {
			dispatch(planModeActions.hideValidationError())
			navigate(`/step-${props.stepNumber + 1}`)
		} else if (props.valdiationFn() === false) {
			dispatch(planModeActions.showValidationError())
		}
	}
	let button
	if (props.stepNumber === 4) {
		button = (
			<motion.button
				whileHover={{
					backgroundColor: '#938CFD',
				}}
				className="bottom-panel__btn-confirm bottom-panel__btn"
				onClick={handleSendData}>
				Confirm
			</motion.button>
		)
	} else {
		button = (
			<motion.button
				whileHover={{
					backgroundColor: '#174A89',
				}}
				className="bottom-panel__btn"
				onClick={handleButtonClick}>
				Next Step
			</motion.button>
		)
	}
	return (
		<div className="bottom-panel">
			{props.stepNumber !== 1 && (
				<MotionLink
					whileHover={{
						color: '#02295A',
					}}
					className="bottom-panel__text-btn"
					to={`/step-${props.stepNumber - 1}`}>
					Go back
				</MotionLink>
			)}
			{button}
		</div>
	)
}

export default BottomPanel
