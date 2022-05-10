import { FC } from 'react'
import { CircleButton } from 'ui-kit'
import classes from './CartItem.module.scss'

export interface ICartPizza {
	id: number
	title: string
	img: string
	dough: string
	size: number
	price: number
}

interface Props {
	pizza: ICartPizza
}

export const CartItem: FC<Props> = ({ pizza }): JSX.Element => {
	return (
		<div className={classes.cartItem}>
			<img className={classes.img} src={pizza.img} alt={`Пицца: ${pizza.title}`} />
			<div className={classes.info}>
				<p className={classes.title}>{pizza.title}</p>
				<p className={classes.params}> {`${pizza.dough}, ${pizza.size} см.`}</p>
			</div>
			<div className={classes.countBlock}>
				<CircleButton type='minus' />
				<span className={classes.count}>1</span>
				<CircleButton type='plus' />
			</div>
			<p className={classes.price}>{`${pizza.price} ₽`}</p>
			<CircleButton className={classes.buttonDelete} type='delete' />
		</div>
	)
}
