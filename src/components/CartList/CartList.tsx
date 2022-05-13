import CartItem from 'components/CartItem'
import { useAppDispatch, useAppSelector } from 'hooks'
import { ICartPizza } from 'models'
import { FC } from 'react'
import { getPizzasCount, getTotalPrice } from 'selectors'
import { deleteAllPizzasFromCart, deletePizzaFromCart } from 'store/reducers'
import { Button, Icon } from 'ui-kit'
import classes from './CartList.module.scss'

interface Props {
	pizzas: { [key: string]: ICartPizza[] }
}

export const CartList: FC<Props> = ({ pizzas }): JSX.Element => {
	const { cartPizzas } = useAppSelector(state => state.cart)
	const dispatch = useAppDispatch()

	const onDeletePizzaFromCart = (id: number) => {
		dispatch(deletePizzaFromCart(id))
	}

	const deleteAllPizzasHandler = () => {
		dispatch(deleteAllPizzasFromCart())
	}

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
				{Object.keys(pizzas).map(pizzaId =>
					pizzas[pizzaId].map(pizza => (
						<li key={pizza.dough + pizza.size}>
							<CartItem pizza={pizza} onDeletePizzaFromCart={onDeletePizzaFromCart} />
						</li>
					))
				)}
			</ul>
			<div className={classes.orderInfo}>
				<span>
					Всего пицц:
					<span className={classes.totalCount}>{`${getPizzasCount(cartPizzas)} шт.`}</span>
				</span>
				<span>
					Сумма заказа:
					<span className={classes.totalPrice}>{`${getTotalPrice(cartPizzas)} ₽`}</span>
				</span>
			</div>
			<div className={classes.actions}>
				<Button className={classes.buttonBack} variant='outlined' to='/'>
					<Icon className={classes.arrowIcon} type='arrow_back' /> Вернуться назад
				</Button>
				<Button className={classes.buttonPay}>Оплатить сейчас</Button>
			</div>
		</div>
	)
}
