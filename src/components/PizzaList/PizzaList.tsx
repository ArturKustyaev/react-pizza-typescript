import PizzaCard from 'components/PizzaCard'
import { PizzaCardSkeleton } from 'components'
import { useAppDispatch, useAppSelector } from 'hooks'
import { ICartItem } from 'models'
import { FC, useEffect } from 'react'
import { addPizzaToCart } from 'store/reducers'
import { fetchPizzas } from 'store/reducers/pizzasSlice'
import classes from './PizzaList.module.scss'

export const PizzaList: FC = (): JSX.Element => {
	const { pizzas, error, isFetching, isSuccesed } = useAppSelector(state => state.pizzas)
	const { pizzaType, sort } = useAppSelector(state => state.filter)

	const dispatch = useAppDispatch()

	const onAddPizzaToCart = (pizza: ICartItem) => {
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
				{isFetching &&
					[0, 0, 0, 0].map((_, index) => (
						<PizzaCardSkeleton key={index} className={classes.pizzaCard} />
					))}
				{isSuccesed &&
					pizzas.map(pizza => (
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
