import { useAppSelector } from 'hooks'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { getCartItemsTotalCount, getCartTotalPrice } from 'store/reducers/cartSlice/selectors'
import { Button, Icon } from 'ui-kit'
import classes from './CartButton.module.scss'

export const CartButton: FC = (): JSX.Element => {
	const totalCount = useAppSelector(getCartItemsTotalCount)
	const totalPrice = useAppSelector(getCartTotalPrice)

	return (
		<Link to='/react-pizza-typescript/cart'>
			<Button className={classes.button}>
				<span className={classes.price}>{`${totalPrice} ₽`}</span>
				<span className={classes.count}>
					<Icon className={classes.cartIcon} type='cart' />
					{totalCount}
				</span>
			</Button>
		</Link>
	)
}
