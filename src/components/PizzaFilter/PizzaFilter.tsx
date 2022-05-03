import React, { FC } from 'react'
import { Icon, Select } from 'ui-kit'
import { FilterValueType } from 'ui-kit/Select/Select'
import classes from './PizzaFilter.module.scss'

const pizzaTypes = ['Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые']

export const PizzaFilter: FC = (): JSX.Element => {
	const onSelect = (selectedField: FilterValueType) => {
		console.log(selectedField)
	}
	return (
		<div className={classes.nav}>
			<ul className={classes.filter}>
				<li className={classes.item}>Все</li>
				{pizzaTypes.map(pizzaType => (
					<li key={pizzaType} className={classes.item}>
						{pizzaType}
					</li>
				))}
			</ul>
			<div className={classes.sort}>
				<Icon className={classes.sortIcon} type='arrow' /> Сортировка по:
				<Select className={classes.select} onSelectItem={onSelect} />
			</div>
		</div>
	)
}
