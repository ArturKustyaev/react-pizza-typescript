import classNames from 'classnames'
import { FC } from 'react'
import { Skeleton } from 'ui-kit'
import classes from './PizzaCardSkeleton.module.scss'

interface Props {
	className?: string
}

export const PizzaCardSkeleton: FC<Props> = ({ className }): JSX.Element => {
	return (
		<div className={classNames(className, classes.body)}>
			<Skeleton className={classes.img} variant='circular' />
			<Skeleton className={classes.title} />
			<Skeleton className={classes.variants} />
			<div className={classes.actions}>
				<Skeleton className={classes.price} />
				<Skeleton className={classes.button} />
			</div>
		</div>
	)
}
