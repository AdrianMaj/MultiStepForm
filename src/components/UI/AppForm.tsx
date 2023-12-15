import React from 'react'

const AppForm: React.FC<{ title: string; text: string; children: React.ReactNode }> = props => {
	return (
		<div className="shadow-md bg-white mx-4 top-20 p-6 rounded-lg z-20 relative">
			<h1 className="text-grenadeBlue text-xl font-bold mb-2">{props.title}</h1>
			<p className="text-gray-400 text-sm mb-5">{props.text}</p>
			{props.children}
		</div>
	)
}

export default AppForm
