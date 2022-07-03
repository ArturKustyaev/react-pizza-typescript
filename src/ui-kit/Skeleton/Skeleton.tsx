import { FC } from 'react'
import classNames from 'classnames'
import classes from './Skeleton.module.scss'

export type VariantType = 'circular' | 'rectangle'

interface Props {
	className?: string
	variant?: VariantType
}

export const Skeleton: FC<Props> = ({ className, variant = 'rectangle' }): JSX.Element => {
	return <div className={classNames(classes.root, classes[`variant__${variant}`], className)} />
}
