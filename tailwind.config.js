/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				grenadeBlue: '#00103F',
				borderColor: '#DBDADF',
				background: '#EEF5FF',
				stepColor: '#BCDFFE',
			},
			backgroundImage: {
				'step-pattern': "url('./assets/images/bg-sidebar-mobile.svg')",
			},
		},
	},
	plugins: [],
}
