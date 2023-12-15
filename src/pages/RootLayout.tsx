import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout: React.FC = () => {
	return (
		<div className="bg-background h-screen top-0">
			<Outlet />
		</div>
	)
}

export default RootLayout
