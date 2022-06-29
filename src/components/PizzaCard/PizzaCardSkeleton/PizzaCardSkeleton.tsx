import classNames from 'classnames'
import { FC } from 'react'
import classes from './PizzaCardSkeleton.module.scss'

interface Props {
	className?: string
}

export const PizzaCardSkeleton: FC<Props> = ({ className }): JSX.Element => {
	return (
		<div className={classNames(className, classes.body)}>
			<div className={classes.img}></div>
			<div className={classes.title}></div>
			<div className={classes.variants}></div>
			<div className={classes.actions}>
				<div className={classes.price}></div>
				<div className={classes.button}></div>
			</div>
		</div>
	)
}
