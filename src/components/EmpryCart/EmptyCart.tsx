import { FC } from 'react'
import { Button, Icon } from 'ui-kit'
import classes from './EmptyCart.module.scss'

export const EmptyCart: FC = (): JSX.Element => {
	return (
		<div className={classes.emptyCart}>
			<h2 className={classes.title}>Корзина пустая😕</h2>
			<p className={classes.subtitle}>
				Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на
				главную страницу.
			</p>
			<Icon className={classes.icon} type='empty_cart' />
			<Button className={classes.button} color='black' to='/' >
				Вернуться назад
			</Button>
		</div>
	)
}
