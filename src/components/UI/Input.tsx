import React from 'react'

type InputPropsType = {
	inputType: string
	placeholder: string
	label: string
}

const Input: React.FC<InputPropsType> = ({ inputType, placeholder, label }) => {
	return (
		<div className="flex flex-col mb-3">
			<label className="text-grenadeBlue text-xs" htmlFor={label}>
				{label}
			</label>
			<input
				className="border-borderColor border text-sm rounded-md px-4 py-2"
				id={label}
				type={inputType}
				placeholder={placeholder}
			/>
		</div>
	)
}

export default Input
