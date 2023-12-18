import { motion } from 'framer-motion'
import { useAppSelector } from '../../hooks/hooks'
import { Link } from 'react-router-dom'

const Checkout = () => {
	const data = useAppSelector(state => state.planMode)
	let totalPrice: number
	totalPrice = data.planVersion.price
	data.planAddOns.forEach(addOn => {
		totalPrice += addOn.price
	})
	const MotionLink = motion(Link)
	return (
		<>
			<div className="checkout">
				<div className="checkout__container">
					<div className="checkout__text">
						<h3 className="checkout__title">
							{data.planVersion.title} ({data.isYearly ? 'Yearly' : 'Monthly'})
						</h3>
						<MotionLink
							whileHover={{
								color: '#3C37A0',
							}}
							className="checkout__link"
							to="/step-2">
							Change
						</MotionLink>
					</div>
					<div className="checkout__price">
						${data.planVersion.price}/{data.isYearly ? 'yr' : 'mo'}
					</div>
				</div>
				<div className="checkout__line"></div>
				<ul className="checkout__list">
					{data.planAddOns.map(addOn => (
						<li key={addOn.title} className="checkout__list-element">
							<p className="checkout__list-text">{addOn.title}</p>
							<p className="checkout__list-price">
								+${addOn.price}/{data.isYearly ? 'yr' : 'mo'}
							</p>
						</li>
					))}
				</ul>
			</div>
			<div className="checkout__total">
				<p className="checkout__total-text">Total ({data.isYearly ? 'per year' : 'per month'})</p>
				<p className="checkout__total-price">
					${totalPrice}/{data.isYearly ? 'yr' : 'mo'}
				</p>
			</div>
		</>
	)
}

export default Checkout
