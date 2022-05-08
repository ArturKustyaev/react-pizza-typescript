import PizzaCard from 'components/PizzaCard'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { setPizzas } from 'store/actions'
import { AppStateType } from 'store/reducers'
import data from '../../data.json'
import classes from './PizzaList.module.scss'

export const PizzaList: FC = (): JSX.Element => {
	const { pizzas, pizzaType } = useSelector((state: AppStateType) => state.pizzas)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		console.log(data.pizzas)
		dispatch(setPizzas(data.pizzas))
		
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
					<PizzaCard className={classes.pizzaCard} key={pizza.id} pizza={pizza} />
				))}
			</div>
		</div>
	)
}
