import CartItem from 'components/CartItem'
import { useAppDispatch, useAppSelector } from 'hooks'
import { ICartPizza, ICartItem } from 'models'
import { FC, useCallback } from 'react'
import { getPizzasCount, getTotalPrice } from 'selectors'
import getPizzaCountByParams from 'selectors/getPizzaCountByParams'
import {
	clearCart,
	decrementPizzaCounter,
	deletePizzaFromCart,
	incrementPizzaCounter
} from 'store/reducers'
import { Button, Icon } from 'ui-kit'
import classes from './CartList.module.scss'

interface Props {
	pizzas: ICartItem[]
}

export const CartList: FC<Props> = ({ pizzas }): JSX.Element => {
	const { items: cartPizzas } = useAppSelector(state => state.cart)
	const dispatch = useAppDispatch()

	const onIncrementCounter = useCallback((pizza: ICartPizza) => {
		dispatch(incrementPizzaCounter(pizza))
	}, [])

	const onDecrementCounter = useCallback((pizza: ICartPizza) => {
		dispatch(decrementPizzaCounter(pizza))
	}, [])

	const onDeletePizzaFromCart = useCallback((pizza: ICartPizza) => {
		dispatch(deletePizzaFromCart(pizza))
	}, [])

	const deleteAllPizzasHandler = useCallback(() => {
		dispatch(clearCart())
	}, [])

	return (
		<div className={classes.root}>
			<div className={classes.titleBlock}>
				<h2>
					<Icon className={classes.cartIcon} type='cart' />
					Корзина
				</h2>
				<button className={classes.buttonTrash} onClick={deleteAllPizzasHandler}>
					<Icon className={classes.trashIcon} type='trash' />
					Очисить корзину
				</button>
			</div>
			<ul className={classes.cartList}>
				{pizzas.map(cartItem =>
					cartItem.variants.map(variant => {
						const cartPizza: ICartPizza = {
							id: cartItem.id,
							title: cartItem.title,
							img: cartItem.img,
							dough: variant.dough,
							count: variant.count,
							price: variant.price,
							size: variant.size
						}

						return (
							<li key={cartItem.id + variant.dough + variant.size}>
								<CartItem
									pizza={cartPizza}
									onIncrementCounter={onIncrementCounter}
									onDecrementCounter={onDecrementCounter}
									onDeletePizzaFromCart={onDeletePizzaFromCart}
								/>
							</li>
						)
					})
				)}
			</ul>
			{/* <div className={classes.orderInfo}>
				<span>
					Всего пицц:
					<span className={classes.totalCount}>{`${getPizzasCount(cartPizzas)} шт.`}</span>
				</span>
				<span>
					Сумма заказа:
					<span className={classes.totalPrice}>{`${getTotalPrice(cartPizzas)} ₽`}</span>
				</span>
			</div> */}
			<div className={classes.actions}>
				<Button className={classes.buttonBack} variant='outlined' to='/react-pizza-typescript'>
					<Icon className={classes.arrowIcon} type='arrow_back' /> Вернуться назад
				</Button>
				<Button className={classes.buttonPay}>Оплатить сейчас</Button>
			</div>
		</div>
	)
}
