import classNames from 'classnames'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import classes from './Button.module.scss'

export type ButtonVariantType = 'filled' | 'outlined'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	children?: ReactNode
	disabled?: boolean
}

export const Button: FC<IButtonProps> = ({
	className,
	children,
	disabled,
	...rest
}): JSX.Element => {
	const btnClasses = classNames(classes.button, className, {
		[classes.button_disabled]: disabled
	})

	return (
		<button className={btnClasses} disabled={disabled} {...rest}>
			{children}
		</button>
	)
}
