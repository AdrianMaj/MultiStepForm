import React from 'react'
import { useAppSelector } from '../../hooks/hooks'
import { Link } from 'react-router-dom'

const Checkout = () => {
	const data = useAppSelector(state => state.planMode)
	let totalPrice: number
	totalPrice = data.planVersion.price
	data.planAddOns.forEach(addOn => {
		totalPrice += addOn.price
	})
	console.log(data)
	return (
		<div className="checkout">
			<div className="checkout__text">
				<h3 className="checkout__title">
					{data.planVersion.title} ({data.isYearly ? 'Yearly' : 'Monthly'})
				</h3>
				<Link className="checkout__link" to="/step-2">
					Change
				</Link>
			</div>
			<div className="checkout__line"></div>
			<ul className="checkout__list">
				{data.planAddOns.map(addOn => (
					<li className="checkout__list-element">
						<p className="checkout__list-text">{addOn.title}</p>
						<p className="checkout__list-price">{addOn.price}</p>
					</li>
				))}
			</ul>
			<div className="checkout__total">
				<p className="checkout__total-text">Total ({data.isYearly ? 'per year' : 'per month'})</p>
				<p className="checkout__total-price">
					${totalPrice}/{data.isYearly ? 'yr' : 'mo'}
				</p>
			</div>
		</div>
	)
}

export default Checkout
