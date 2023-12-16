const sendToBackend = async (formData: {
	isYearly: boolean
	planVersion: { title: string; price: number }
	planAddOns: { title: string; price: number }[]
	inputValues: { [key: string]: string }
}) => {
	const response = await fetch(`https://multistepform-3ff9b-default-rtdb.firebaseio.com/data`, {
		method: 'POST',
		body: JSON.stringify(formData),
		headers: {
			'Content-Type': 'application/json',
		},
	})

	if (!response.ok) {
		const error = new Error('An error occurred while creating the event')
		throw error
	}

	const resData = await response.json()

	return resData
}

export default sendToBackend
