import { useWhyDidYouUpdate } from 'ahooks'
import classNames from 'classnames'
import { useAppSelector } from 'hooks'
import { ICartPizza, IPizza } from 'models'
import { FC, HTMLAttributes, useCallback, useState } from 'react'
import getPizzaCountByParams from 'selectors/getPizzaCountByParams'
import { Button } from 'ui-kit'
import classes from './PizzaCard.module.scss'

interface Props extends HTMLAttributes<HTMLDivElement> {
	className?: string
	pizza: IPizza
	onAddPizzaToCart: (pizza: ICartPizza) => void
}

type PizzaParamsType = {
	dough: string
	size: number
	price: number
}

export const PizzaCard: FC<Props> = ({ className, pizza, onAddPizzaToCart }): JSX.Element => {
	const { items: pizzas } = useAppSelector(state => state.cart)

	const [pizzaParams, setPizzaParams] = useState<PizzaParamsType>({
		dough: pizza.availableDough[0],
		size: pizza.aviableSizes[0],
		price: pizza.price[pizza.aviableSizes[0]][0]
	})

	const addedPizzasCount = getPizzaCountByParams(pizzas, {
		id: pizza.id,
		size: pizzaParams.size,
		dough: pizzaParams.dough
	})

	const setPizzaDoughtHandler = (dough: string) => {
		setPizzaParams({
			...pizzaParams,
			dough,
			price:
				pizza.price[pizzaParams.size][
					pizza.availableDough.findIndex(aviableDough => dough === aviableDough)
				]
		})
	}

	const setPizzaSizeHandler = (size: number) => {
		setPizzaParams({
			...pizzaParams,
			size,
			price:
				pizza.price[size][
					pizza.availableDough.findIndex(aviableDough => pizzaParams.dough === aviableDough)
				]
		})
	}

	const addPizzaInCartHandler = () => {
		const cartPizza: ICartPizza = {
			id: pizza.id,
			title: pizza.title,
			img: pizza.img,
			count: 1,
			dough: pizzaParams.dough,
			size: pizzaParams.size,
			price: pizzaParams.price
		}

		onAddPizzaToCart(cartPizza)
	}

	return (
		<div className={classNames(classes.pizzaCard, className)}>
			<img className={classes.img} src={pizza.img} alt={`Пицца: ${pizza.title}`} />
			<p className={classes.title}>{pizza.title}</p>
			<div className={classes.params}>
				<div className={classes.dough}>
					{pizza.availableDough.map(dough => (
						<button
							className={classNames(classes.button, {
								[classes.button_active]: dough === pizzaParams.dough
							})}
							key={dough}
							onClick={() => setPizzaDoughtHandler(dough)}
						>
							{dough}
						</button>
					))}
				</div>
				<div className={classes.sizes}>
					{pizza.aviableSizes.map(size => (
						<button
							className={classNames(classes.button, {
								[classes.button_active]: size === pizzaParams.size
							})}
							key={size}
							onClick={() => setPizzaSizeHandler(size)}
						>
							{`${size} см.`}
						</button>
					))}
				</div>
			</div>
			<div className={classes.actions}>
				<p className={classes.price}>{`${pizzaParams.price} ₽`} </p>
				<Button onClick={addPizzaInCartHandler}>
					Добавить {addedPizzasCount !== 0 && addedPizzasCount}
				</Button>
			</div>
		</div>
	)
}
