import React, { useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { planModeActions } from '../store/PlanModeSlice'

type InputPropsType = {
	inputType: string
	placeholder: string
	label: string
	identifier: string
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
			<label className="input__label" htmlFor={props.label}>
				{props.label}
			</label>
			<input
				className="input__text"
				id={props.label}
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
