import React, { useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { planModeActions } from '../store/PlanModeSlice'
import { motion } from 'framer-motion'

type InputPropsType = {
	inputType: string
	placeholder: string
	label: string
	identifier: string
	errorMessage: string
	isInvalid: boolean
}

const Input: React.FC<InputPropsType> = props => {
	const inputValue = useAppSelector(state => state.planMode.inputValues[props.identifier])
	const inputRef = useRef<HTMLInputElement>(null)
	const dispatch = useAppDispatch()
	const handleChangeValue = () => {
		dispatch(planModeActions.changeValue({ inputValue: inputRef.current?.value, inputId: props.identifier }))
	}
	return (
		<div className="input">
			<div className="input__container">
				<label className="input__label" htmlFor={props.label}>
					{props.identifier}
				</label>
				{props.isInvalid && <p className="input__error">{props.errorMessage}</p>}
			</div>
			<motion.input
				whileFocus={{
					border: '1px solid #585190',
				}}
				animate={{
					border: props.isInvalid ? '1px solid #c04253' : '1px solid #d1d1d1',
				}}
				className="input__text"
				id={props.identifier}
				ref={inputRef}
				type={props.inputType}
				placeholder={props.placeholder}
				value={inputValue}
				onChange={handleChangeValue}
			/>
		</div>
	)
}

export default Input
