import CartItem from 'components/CartItem'
import { useAppDispatch, useAppSelector } from 'hooks'
import { ICartItem } from 'models'
import { FC, useCallback } from 'react'
import { clearCart, decrementPizzaCounter, deletePizzaFromCart, incrementPizzaCounter } from 'store/reducers'
import { selectCartItemsTotalCount, selectCartTotalPrice } from 'store/reducers/cartSlice/selectors'
import { Button, Icon } from 'ui-kit'
import classes from './CartList.module.scss'

interface Props {
	items: ICartItem[]
}

export const CartList: FC<Props> = ({ items }): JSX.Element => {
	const dispatch = useAppDispatch()

	const totalPrice = useAppSelector(selectCartTotalPrice)
	const totalCount = useAppSelector(selectCartItemsTotalCount)

	const onIncrementCounter = useCallback(
		(pizza: ICartItem) => {
			dispatch(incrementPizzaCounter(pizza))
		},
		[dispatch]
	)

	const onDecrementCounter = useCallback(
		(pizza: ICartItem) => {
			dispatch(decrementPizzaCounter(pizza))
		},
		[dispatch]
	)

	const onDeletePizzaFromCart = useCallback(
		(pizza: ICartItem) => {
			dispatch(deletePizzaFromCart(pizza))
		},
		[dispatch]
	)

	const clearCartHandler = useCallback(() => {
		dispatch(clearCart())
	}, [dispatch])

	return (
		<div className={classes.root}>
			<div className={classes.titleBlock}>
				<h2>
					<Icon className={classes.cartIcon} type='cart' />
					Корзина
				</h2>
				<button className={classes.buttonTrash} onClick={clearCartHandler}>
					<Icon className={classes.trashIcon} type='trash' />
					Очистить корзину
				</button>
			</div>
			<ul className={classes.cartList}>
				{items.map(cartItem => (
					<li key={cartItem.id + cartItem.dough + cartItem.size}>
						<CartItem
							pizza={cartItem}
							onIncrementCounter={onIncrementCounter}
							onDecrementCounter={onDecrementCounter}
							onDeletePizzaFromCart={onDeletePizzaFromCart}
						/>
					</li>
				))}
			</ul>
			<div className={classes.orderInfo}>
				<span>
					Всего пицц:
					<span className={classes.totalCount}>{`${totalCount} шт.`}</span>
				</span>
				<span>
					Сумма заказа:
					<span className={classes.totalPrice}>{`${totalPrice} ₽`}</span>
				</span>
			</div>
			<div className={classes.actions}>
				<Button className={classes.buttonBack} variant='outlined' to='/react-pizza-typescript'>
					<Icon className={classes.arrowIcon} type='arrow_back' />
					Вернуться назад
				</Button>
				<Button className={classes.buttonPay}> Оплатить сейчас</Button>
			</div>
		</div>
	)
}
