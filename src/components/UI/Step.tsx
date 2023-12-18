import { motion } from 'framer-motion'
import React from 'react'

const Step: React.FC<{ pageNumber: number; stepNumber: number; text: string }> = props => {
	const isActive: boolean = props.pageNumber === props.stepNumber
	// const navigate = useNavigate()
	// const handleNavigate = () => {
	// 	navigate(`/step-${props.stepNumber}`)
	// }
	return (
		<div className="steps__step">
			<motion.div
				className="steps__step-indicator"
				animate={{
					border: isActive ? '1px solid transparent' : '1px solid #bcdffe',
				}}>
				<motion.p
					animate={{
						color: isActive ? '#00103f' : '#bcdffe',
					}}
					className={`steps__step-indicator-text`}>
					{props.stepNumber}
				</motion.p>
				{isActive && <motion.div layoutId="step" className="steps__bg"></motion.div>}
			</motion.div>
			<div className="steps__step-text">
				<p className="steps__step-name">Step {props.stepNumber}</p>
				<p className="steps__step-title">{props.text}</p>
			</div>
		</div>
	)
}

export default Step
