import classNames from 'classnames'
import { count } from 'console'
import { useAppDispatch } from 'hooks'
import { ICartPizza, IPizza } from 'models'
import { FC, HTMLAttributes, useState } from 'react'
import { AppDispatch } from 'store'
import { addPizzaToCart } from 'store/reducers/cartReducer'
import { Button } from 'ui-kit'
import classes from './PizzaCard.module.scss'

interface Props extends HTMLAttributes<HTMLDivElement> {
	className?: string
	pizza: IPizza
	onAddPizzaToCart: (pizza: ICartPizza) => void
}

type pizzaParamsType = {
	dough: string
	size: number
}
export const PizzaCard: FC<Props> = ({ className, pizza, onAddPizzaToCart }): JSX.Element => {
	const [pizzaParams, setPizzaParams] = useState<pizzaParamsType>({
		dough: pizza.availableDough[0],
		size: pizza.aviableSizes[0]
	})

	const setPizzaDoughtHandler = (dough: string) => {
		setPizzaParams({ ...pizzaParams, dough: dough })
	}

	const setPizzaSizeHandler = (size: number) => {
		setPizzaParams({ ...pizzaParams, size: size })
	}

	const addPizzaInCartHandler = () => {
		const cartPizza: ICartPizza = {
			id: pizza.id,
			title: pizza.title,
			img: pizza.img,
			dough: pizzaParams.dough,
			size: pizzaParams.size,
			price: pizza.price,
			count: 1
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
				<p className={classes.price}>{`от ${pizza.price} ₽`} </p>
				<Button onClick={addPizzaInCartHandler}>Добавить</Button>
			</div>
		</div>
	)
}
