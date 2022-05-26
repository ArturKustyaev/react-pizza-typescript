import { ICartPizza } from 'models'
import { FC, memo, useCallback } from 'react'
import { CircleButton } from 'ui-kit'
import classes from './CartItem.module.scss'

interface Props {
	pizza: ICartPizza
	onIncrementCounter: (pizza: ICartPizza) => void
	onDecrementCounter: (pizza: ICartPizza) => void
	onDeletePizzaFromCart: (pizza: ICartPizza) => void
}

export const CartItem: FC<Props> = memo(
	({ pizza, onIncrementCounter, onDecrementCounter, onDeletePizzaFromCart }): JSX.Element => {
		const incrementCounterHandler = useCallback(() => {
			onIncrementCounter(pizza)
		}, [])

		const decrementCounterHandler = useCallback(() => {
			onDecrementCounter(pizza)
		}, [])

		const deletePizzaHandler = useCallback(() => {
			onDeletePizzaFromCart(pizza)
		}, [])

		return (
			<div className={classes.cartItem}>
				<div className={classes.pizzaInfo}>
					<img className={classes.img} src={pizza.img} alt={`Пицца: ${pizza.title}`} />
					<div className={classes.info}>
						<p className={classes.title}>{pizza.title}</p>
						<p className={classes.params}> {`${pizza.dough} тесто, ${pizza.size} см.`}</p>
					</div>
				</div>
				<div className={classes.priceInfo}>
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
				</div>
				<CircleButton className={classes.buttonDelete} type='delete' onClick={deletePizzaHandler} />
			</div>
		)
	}
)
