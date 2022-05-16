import { FC, ReactNode } from 'react'
import classes from './Layout.module.scss'

interface Props {
	children?: ReactNode
}

export const Layout: FC<Props> = ({ children }): JSX.Element => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.layout}>{children}</div>
		</div>
	)
}
