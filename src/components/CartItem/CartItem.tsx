import { ICartPizza } from 'models'
import { FC } from 'react'
import { CircleButton } from 'ui-kit'
import classes from './CartItem.module.scss'

interface Props {
	pizza: ICartPizza
	onIncrementCounter: (pizza: ICartPizza) => void
	onDecrementCounter: (pizza: ICartPizza) => void
	onDeletePizzaFromCart: (pizza: ICartPizza) => void
}

export const CartItem: FC<Props> = ({
	pizza,
	onIncrementCounter,
	onDecrementCounter,
	onDeletePizzaFromCart
}): JSX.Element => {
	const incrementCounterHandler = () => {
		onIncrementCounter(pizza)
	}

	const decrementCounterHandler = () => {
		onDecrementCounter(pizza)
	}

	const deletePizzaHandler = () => {
		onDeletePizzaFromCart(pizza)
	}

	return (
		<div className={classes.cartItem}>
			<img className={classes.img} src={pizza.img} alt={`Пицца: ${pizza.title}`} />
			<div className={classes.info}>
				<p className={classes.title}>{pizza.title}</p>
				<p className={classes.params}> {`${pizza.dough} тесто, ${pizza.size} см.`}</p>
			</div>
			<div className={classes.countBlock}>
				<CircleButton
					className={classes.buttonCount}
					type='minus'
					onClick={decrementCounterHandler}
				/>
				<span className={classes.count}>{pizza.count}</span>
				<CircleButton
					className={classes.buttonCount}
					type='plus'
					onClick={incrementCounterHandler}
				/>
			</div>
			<p className={classes.price}>{`${pizza.price * pizza.count} ₽`}</p>
			<CircleButton className={classes.buttonDelete} type='delete' onClick={deletePizzaHandler} />
		</div>
	)
}
