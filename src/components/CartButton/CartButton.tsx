import { useAppSelector } from 'hooks'
import { FC } from 'react'
import { selectCartItemsTotalCount, selectCartTotalPrice } from 'store/reducers/cartSlice/selectors'
import { Button, Icon } from 'ui-kit'
import classes from './CartButton.module.scss'

export const CartButton: FC = (): JSX.Element => {
	const totalCount = useAppSelector(selectCartItemsTotalCount)
	const totalPrice = useAppSelector(selectCartTotalPrice)

	return (
		<Button className={classes.button} to='/react-pizza-typescript/cart'>
			<span className={classes.price}>{`${totalPrice} ₽`}</span>
			<span className={classes.count}>
				<Icon className={classes.cartIcon} type='cart' />
				<span>{totalCount}</span>
			</span>
		</Button>
	)
}
