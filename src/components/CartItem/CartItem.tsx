import { useAppDispatch } from 'hooks'
import { ICartPizza } from 'models'
import { FC } from 'react'
import { AppDispatch } from 'store'
import { deletePizzaFromCart } from 'store/reducers'
import { CircleButton } from 'ui-kit'
import classes from './CartItem.module.scss'

interface Props {
	pizza: ICartPizza
	onDeletePizzaFromCart: (id: number) => void
}

export const CartItem: FC<Props> = ({ pizza, onDeletePizzaFromCart }): JSX.Element => {
	const deletePizzaHandler = () => {
		onDeletePizzaFromCart(pizza.id)
	}

	return (
		<div className={classes.cartItem}>
			<img className={classes.img} src={pizza.img} alt={`Пицца: ${pizza.title}`} />
			<div className={classes.info}>
				<p className={classes.title}>{pizza.title}</p>
				<p className={classes.params}> {`${pizza.dough} тесто, ${pizza.size} см.`}</p>
			</div>
			<div className={classes.countBlock}>
				<CircleButton type='minus' />
				<span className={classes.count}>{pizza.count}</span>
				<CircleButton type='plus' />
			</div>
			<p className={classes.price}>{`${pizza.price} ₽`}</p>
			<CircleButton className={classes.buttonDelete} type='delete' onClick={deletePizzaHandler} />
		</div>
	)
}
