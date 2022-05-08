import CartItem from 'components/CartItem'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { AppStateType } from 'store/reducers'
import { Button, Icon } from 'ui-kit'
import classes from './CartList.module.scss'

export const CartList: FC = (): JSX.Element => {
	const { pizzas } = useSelector((state: AppStateType) => state.pizzas)

	return (
		<div className={classes.root}>
			<div className={classes.titleBlock}>
				<h2>
					<Icon className={classes.cartIcon} type='cart' />
					Корзина
				</h2>
				<button className={classes.buttonTrash}>
					<Icon className={classes.trashIcon} type='trash' />
					Очисить корзину
				</button>
			</div>
			<ul className={classes.cartList}>
				{pizzas.map(pizza => (
					<li key={pizza.id}>
						<CartItem pizza={pizza} />
					</li>
				))}
			</ul>
			<div className={classes.orderInfo}>
				<span>
					Всего пицц: <span className={classes.totalCount}>3 шт.</span>
				</span>
				<span>
					Сумма заказа: <span className={classes.totalPrice}>950 ₽</span>
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
