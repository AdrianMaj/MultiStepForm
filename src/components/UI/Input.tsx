import React, { forwardRef } from 'react'

type InputPropsType = {
	inputType: string
	placeholder: string
	label: string
}

const Input: React.FC<InputPropsType> = forwardRef<HTMLInputElement, InputPropsType>(function Input(
	props,
	forwardedRef
) {
	return (
		<div className="input">
			<label className="input__label" htmlFor={props.label}>
				{props.label}
			</label>
			<input
				ref={forwardedRef}
				className="input__text"
				id={props.label}
				type={props.inputType}
				placeholder={props.placeholder}
			/>
		</div>
	)
})

export default Input
