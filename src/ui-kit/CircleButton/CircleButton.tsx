import classNames from 'classnames'
import { FC, HTMLAttributes, memo } from 'react'
import classes from './CircleButton.module.scss'

type CircleButtonType = 'minus' | 'plus' | 'delete'

interface Props extends HTMLAttributes<HTMLButtonElement> {
	className?: string
	type: CircleButtonType
}

export const CircleButton: FC<Props> = memo(({ className, type, ...rest }): JSX.Element => {
	const buttonClasses = classNames(
		classes.button,
		{
			[classes.button_minus]: type === 'minus',
			[classes.button_plus]: type === 'plus',
			[classes.button_delete]: type === 'delete'
		},
		className
	)
	return <button className={buttonClasses} {...rest} />
})
