import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon } from 'ui-kit'
import classes from './CartButton.module.scss'

export const CartButton: FC = (): JSX.Element => {
	return (
		<Link to='/cart'>
			<Button className={classes.button}>
				<span className={classes.price}>0 ₽</span>
				<span className={classes.count}>
					<Icon className={classes.cartIcon} type='cart' />0
				</span>
			</Button>
		</Link>
	)
}
