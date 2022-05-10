import classNames from 'classnames'
import { PizzaType } from 'components/PizzaCard/PizzaCard'
import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPizzaType } from 'store/actions'
import { AppStateType } from 'store/reducers'
import { Button, Select } from 'ui-kit'
import { FilterValueType } from 'ui-kit/Select/Select'
import classes from './PizzaFilter.module.scss'

interface IPizzaType {
	value: PizzaType
	text: string
}

const pizzaTypes: IPizzaType[] = [
	{
		value: 'all',
		text: 'Все'
	},
	{
		value: 'meat',
		text: 'Мясные'
	},
	{
		value: 'vegan',
		text: 'Вегетерианские'
	},
	{
		value: 'grill',
		text: 'Гриль'
	},
	{
		value: 'spicy',
		text: 'Острые'
	}
]

export const PizzaFilter: FC = (): JSX.Element => {
	const { pizzaType: storePizzaType } = useSelector((state: AppStateType) => state.pizzas)
	const dispatch = useDispatch()

	const onSelect = (selectedField: FilterValueType) => {
		console.log(selectedField)
	}

	const selectPizzaTypeHandler = (pizzaType: PizzaType) => {
		dispatch(setPizzaType(pizzaType))
	}

	return (
		<div className={classes.nav}>
			<ul className={classes.filter}>
				{pizzaTypes.map(pizzaType => (
					<li key={pizzaType.value}>
						<Button
							className={classNames(classes.buttonPizzaType, {
								[classes.buttonPizzaType_active]: storePizzaType === pizzaType.value
							})}
							onClick={() => selectPizzaTypeHandler(pizzaType.value)}
						>
							{pizzaType.text}
						</Button>
					</li>
				))}
			</ul>
			<div className={classes.sort}>
				<Select className={classes.select} defaultItemChecked={0} onSelectItem={onSelect} />
			</div>
		</div>
	)
}
