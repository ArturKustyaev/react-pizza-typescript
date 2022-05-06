import { FC } from 'react'
import classes from './PizzaList.module.scss'
import data from '../../data.json'
import PizzaCard from 'components/PizzaCard'

export const PizzaList: FC = (): JSX.Element => {
	return (
		<div className={classes.pizzas}>
			<h1 className={classes.title}>Все пиццы</h1>
			<div className={classes.pizzaList}>
				{data.pizzas.map(pizza => (
					<PizzaCard className={classes.pizzaCard} key={pizza.id} pizza={pizza} />
				))}
			</div>
		</div>
	)
}
