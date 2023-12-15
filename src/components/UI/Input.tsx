import React from 'react'

type InputPropsType = {
	inputType: string
	placeholder: string
	label: string
}

const Input: React.FC<InputPropsType> = ({ inputType, placeholder, label }) => {
	return (
		<div className="input">
			<label className="input__label" htmlFor={label}>
				{label}
			</label>
			<input className="input__text" id={label} type={inputType} placeholder={placeholder} />
		</div>
	)
}

export default Input
