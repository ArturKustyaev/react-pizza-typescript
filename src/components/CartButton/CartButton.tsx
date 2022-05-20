import { useAppSelector } from 'hooks'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { getPizzasCount, getTotalPrice } from 'selectors'
import { Button, Icon } from 'ui-kit'
import classes from './CartButton.module.scss'

export const CartButton: FC = (): JSX.Element => {
	const { pizzas: cartPizzas } = useAppSelector(state => state.cart)

	return (
		<Link to='/react-pizza-typescript/cart'>
			<Button className={classes.button}>
				<span className={classes.price}>{`${getTotalPrice(cartPizzas)} ₽`}</span>
				<span className={classes.count}>
					<Icon className={classes.cartIcon} type='cart' />
					{getPizzasCount(cartPizzas)}
				</span>
			</Button>
		</Link>
	)
}
