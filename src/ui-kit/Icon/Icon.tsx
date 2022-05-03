import classNames from 'classnames'
import { FC, HTMLAttributes } from 'react'
import { IconType, IconTypes } from './types'
import classes from './Icon.module.scss'

export interface IIconProps extends HTMLAttributes<HTMLDivElement> {
	className?: string
	type: IconType
}

const getIcon = (type: IconType): JSX.Element => IconTypes.get(type) as JSX.Element

export const Icon: FC<IIconProps> = ({ className, type, ...rest }): JSX.Element => {
	return (
		<div className={classNames(classes.icon, className)} {...rest}>
			{getIcon(type)}
		</div>
	)
}
