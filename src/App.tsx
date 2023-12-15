import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import FormStepOne from './pages/FormStepOne'
import FormStepTwo from './pages/FormStepTwo'

const App = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			children: [
				{
					index: true,
					element: <Navigate to="/step-1" />,
				},
				{
					path: 'step-1',
					element: <FormStepOne />,
				},
				{
					path: 'step-2',
					element: <FormStepTwo />,
				},
			],
		},
	])

	return <RouterProvider router={router}></RouterProvider>
}

export default App
