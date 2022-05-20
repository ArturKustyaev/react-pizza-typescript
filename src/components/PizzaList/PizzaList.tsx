import PizzaCard from 'components/PizzaCard'
import { useAppDispatch, useAppSelector } from 'hooks'
import { ICartPizza } from 'models'
import { FC, useEffect } from 'react'
import { addPizzaToCart } from 'store/reducers'
import { fetchPizzas } from 'store/reducers/pizzasReducer'
import classes from './PizzaList.module.scss'

export const PizzaList: FC = (): JSX.Element => {
	const { pizzas, error } = useAppSelector(state => state.pizzas)
	const { pizzaType, sort } = useAppSelector(state => state.filter)

	const dispatch = useAppDispatch()

	const onAddPizzaToCart = (pizza: ICartPizza) => {
		dispatch(addPizzaToCart(pizza))
	}

	useEffect(() => {
		dispatch(fetchPizzas({ pizzaType, sort }))
	}, [pizzaType, sort])

	return (
		<div className={classes.pizzas}>
			<h1 className={classes.title}>
				{error && error}
				{!error && 'Все пиццы'}
			</h1>
			<div className={classes.pizzaList}>
				{/* //{[0,0,0,0].map(item =>)} */}
				{pizzas.map(pizza => (
					<PizzaCard
						className={classes.pizzaCard}
						key={pizza.id}
						pizza={pizza}
						onAddPizzaToCart={onAddPizzaToCart}
					/>
				))}
			</div>
		</div>
	)
}
