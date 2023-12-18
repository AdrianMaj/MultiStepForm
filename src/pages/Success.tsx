import StepNumber from '../components/UI/StepNumber'
import AppForm from '../components/UI/AppForm'

const Success = () => {
	return (
		<>
			<StepNumber pageNumber={4} />
			<div className="container">
				<AppForm title="" text="">
					<img className="app-form__image" src="/images/icon-thank-you.svg" alt="Thank you icon" />
					<h1 className="app-form__heading app-form__center">Thank you!</h1>
					<p className="app-form__text app-form__center app-form__attribution">
						Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
						please feel free to email us at support@loremgaming.com
					</p>
				</AppForm>
			</div>
		</>
	)
}

export default Success
