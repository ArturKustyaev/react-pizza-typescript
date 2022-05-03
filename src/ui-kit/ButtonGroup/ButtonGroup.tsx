import React, { FC, ReactNode } from 'react'
import classes from './ButtonGroup.module.scss'

interface Props {
	children?: ReactNode
}

export const ButtonGroup: FC<Props> = ({ children }): JSX.Element => {
	return <div className={classes.buttonGroup}>{children}</div>
}
