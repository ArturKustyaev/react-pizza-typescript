import logo from 'assets/img/logo.png'
import { CartButton } from 'components'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppStateType } from 'store/reducers'
import classes from './Header.module.scss'

interface Props {
	isCartButtonHide?: boolean
}

export const Header: FC<Props> = ({ isCartButtonHide = false }): JSX.Element => {
	const { cartPizzas } = useSelector((state: AppStateType) => state.cart)
	let totalPrice = 0

	const price = () => {
		cartPizzas.reduce((sum, pizza) => sum + pizza.price, totalPrice)
	}

	return (
		<div className={classes.header}>
			<Link className={classes.logo} to='/'>
				<img className={classes.logoIcon} src={logo} alt='logo' />
				<div>
					<p className={classes.logoTitle}>REACT PIZZA</p>
					<p className={classes.logoSubtitle}>Самая реактивная пицца во вселенной</p>
				</div>
			</Link>

			{!isCartButtonHide && <CartButton />}
		</div>
	)
}
