import classNames from 'classnames'
import { FC, HTMLAttributes, memo } from 'react'
import classes from './Icon.module.scss'
import { IconType, IconTypes } from './types'

export interface Props extends HTMLAttributes<HTMLDivElement> {
	className?: string
	type: IconType
}

const getIcon = (type: IconType): JSX.Element => IconTypes.get(type) as JSX.Element

export const Icon: FC<Props> = memo(({ className, type, ...rest }): JSX.Element => {
	return (
		<div className={classNames(classes.icon, className)} {...rest}>
			{getIcon(type)}
		</div>
	)
})
