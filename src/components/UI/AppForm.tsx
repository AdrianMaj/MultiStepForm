import React from 'react'

const AppForm: React.FC<{ title: string; text: string; children: React.ReactNode }> = props => {
	return (
		<div className="app-form">
			<h1 className='app-form__heading'>{props.title}</h1>
			<p className='app-form__text'>{props.text}</p>
			{props.children}
		</div>
	)
}

export default AppForm
