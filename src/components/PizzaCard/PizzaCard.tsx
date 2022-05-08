import classNames from 'classnames'
import { FC, HTMLAttributes } from 'react'
import { PizzaType } from 'store/reducers/pizzasReducer'
import { Button } from 'ui-kit'
import classes from './PizzaCard.module.scss'

interface Props extends HTMLAttributes<HTMLDivElement> {
	className?: string
	pizza: IPizza
}

export interface IPizza {
	id: number
	title: string
	img: string
	availableDough: number[]
	aviableSizes: number[]
	type: PizzaType | string
	price: number
}

export const PizzaCard: FC<Props> = ({ className, pizza }): JSX.Element => {
	return (
		<div className={classNames(classes.pizzaCard, className)}>
			<img className={classes.img} src={pizza.img} alt={`Пицца: ${pizza.title}`} />
			<p className={classes.title}>{pizza.title}</p>
			<div className={classes.params}>
				<div className={classes.dough}>
					<button className={classes.button}>тонкое</button>
					<button className={classes.button}>традиционное</button>
				</div>
				<div className={classes.sizes}>
					<button className={classes.button}>25см.</button>
					<button className={classes.button}>35см.</button>
					<button className={classes.button}>45см.</button>
				</div>
			</div>
			<div className={classes.actions}>
				<p className={classes.price}>{`от ${pizza.price} ₽`} </p>
				<Button>Добавить</Button>
			</div>
		</div>
	)
}
