import PizzaCard from 'components/PizzaCard'
import { useAppDispatch, useAppSelector } from 'hooks'
import { ICartPizza } from 'models'
import { FC, useEffect } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { addPizzaToCart } from 'store/reducers'
import { fetchPizzas } from 'store/reducers/pizzasReducer'
import classes from './PizzaList.module.scss'

export const PizzaList: FC = (): JSX.Element => {
	const { pizzas, pizzaType } = useAppSelector(state => state.pizzas)
	const dispatch = useAppDispatch()

	const navigate = useNavigate()

	const onAddPizzaToCart = (pizza: ICartPizza) => {
		dispatch(addPizzaToCart(pizza))
	}

	useEffect(() => {
		dispatch(fetchPizzas())

		navigate({
			search: `?${createSearchParams({
				pizza_type: pizzaType
			})}`
		})
	}, [pizzaType])

	return (
		<div className={classes.pizzas}>
			<h1 className={classes.title}>Все пиццы</h1>
			<div className={classes.pizzaList}>
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
