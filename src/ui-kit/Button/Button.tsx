import classNames from 'classnames'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import classes from './Button.module.scss'

type ButtonVariantType = 'filled' | 'outlined'
type ButtonColorType = 'orange' | 'black'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	children?: ReactNode
	color?: ButtonColorType
	variant?: ButtonVariantType
	to?: string
	disabled?: boolean
}

export const Button: FC<IButtonProps> = ({
	className,
	children,
	color = 'orange',
	variant = 'filled',
	to = '',
	disabled,
	...rest
}): JSX.Element => {
	const buttonClasses = classNames(classes.button, className, {
		[classes.button_black]: color === 'black',
		[classes.button_outlined]: variant === 'outlined',
		[classes.button_disabled]: disabled
	})

	return to ? (
		<Link className={buttonClasses} to={to}>
			{children}
		</Link>
	) : (
		<button className={buttonClasses} disabled={disabled} {...rest}>
			{children}
		</button>
	)
}
