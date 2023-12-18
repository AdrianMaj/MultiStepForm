import React, { useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { planModeActions } from '../store/PlanModeSlice'
import { motion } from 'framer-motion'

type InputPropsType = {
	inputType: string
	placeholder: string
	label: string
	identifier: string
	showError: boolean
}

const Input: React.FC<InputPropsType> = props => {
	console.log(props.identifier + props.showError)
	const inputValue = useAppSelector(state => state.planMode.inputValues[props.identifier])
	const inputRef = useRef<HTMLInputElement>(null)
	const dispatch = useAppDispatch()
	const handleChangeValue = () => {
		dispatch(planModeActions.changeValue({ inputValue: inputRef.current?.value, inputId: props.identifier }))
	}
	return (
		<div className="input">
			<label className="input__label" htmlFor={props.label}>
				{props.label}
			</label>
			<motion.input
				whileFocus={{
					border: '1px solid #585190',
				}}
				className="input__text"
				id={props.label}
				ref={inputRef}
				type={props.inputType}
				placeholder={props.placeholder}
				value={inputValue}
				onChange={handleChangeValue}
			/>
			{props.showError && (
				<p className="input__error">
					Invalid {props.identifier === 'phoneNumber' ? 'phone number.' : props.identifier + '.'}
				</p>
			)}
		</div>
	)
}

export default Input
