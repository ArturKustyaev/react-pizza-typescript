import logo from 'assets/img/logo.png'
import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon } from 'ui-kit'
import classes from './Header.module.scss'

interface Props {
	isCartButtonHide?: boolean
}

export const Header: FC<Props> = ({ isCartButtonHide = false }): JSX.Element => {
	return (
		<div className={classes.header}>
			<Link className={classes.logo} to='/'>
				<img className={classes.logoIcon} src={logo} alt='logo' />
				<div>
					<p className={classes.logoTitle}>REACT PIZZA</p>
					<p className={classes.logoSubtitle}>Самая вкусная пицца во вселенной</p>
				</div>
			</Link>

			{!isCartButtonHide && (
				<Link to='/cart'>
					<Button className={classes.buttonCart}>
						<span className={classes.price}>0 ₽</span>
						<span className={classes.count}>
							<Icon className={classes.buttonCart_cart} type='cart' />0
						</span>
					</Button>
				</Link>
			)}
		</div>
	)
}
