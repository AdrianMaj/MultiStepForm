import { Link, useNavigate } from 'react-router-dom'
// import { motion } from 'framer-motion'
import { useMutation } from '@tanstack/react-query'
import sendToBackend from '../../util/sendToBackend'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { planModeActions } from '../store/PlanModeSlice'

const BottomPanel: React.FC<{ stepNumber: number; valdiationFn: () => boolean }> = props => {
	// const MotionLink = motion(Link)
	const data = useAppSelector(state => state.planMode)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { mutate } = useMutation({
		mutationFn: sendToBackend,
	})
	const handleSendData = () => {
		mutate(data)
	}
	const handleButtonClick = () => {
		if (props.valdiationFn() === true) {
			dispatch(planModeActions.hideValidationError())
			console.log('dziala')
			navigate(`/step-${props.stepNumber + 1}`)
		} else if (props.valdiationFn() === false) {
			console.log('nie dziala')
			dispatch(planModeActions.showValidationError())
		}
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
			// <MotionLink
			// 	className="bottom-panel__btn"
			// 	whileHover={{
			// 		backgroundColor: '#011a66',
			// 	}}
			// 	to={`/step-${props.stepNumber + 1}`}>
			// 	Next Step
			// </MotionLink>
			<button className="bottom-panel__btn" onClick={handleButtonClick}>
				Next Step
			</button>
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
