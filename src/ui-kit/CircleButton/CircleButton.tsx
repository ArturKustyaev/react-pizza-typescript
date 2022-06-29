import { useWhyDidYouUpdate } from 'ahooks'
import classNames from 'classnames'
import { AllHTMLAttributes, FC } from 'react'
import classes from './CircleButton.module.scss'

type CircleButtonType = 'minus' | 'plus' | 'delete'

interface Props extends AllHTMLAttributes<HTMLButtonElement> {
	className?: string
	type: CircleButtonType
}

export const CircleButton: FC<Props> = ({ className, type, ...rest }): JSX.Element => {
	const buttonClasses = classNames(classes.button, classes[`button_${type}`], className)
	return <button className={buttonClasses} {...rest} />
}
