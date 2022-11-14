import classNames from 'classnames'
import { useAppSelector } from 'hooks'
import { PizzaType } from 'models'
import { FC, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { setFilter, setSort } from 'store/reducers'
import { Button, Select } from 'ui-kit'
import { SortValueType } from 'ui-kit/Select/Select'
import classes from './PizzaFilter.module.scss'

export interface IPizzaType {
	value: PizzaType
	text: string
}

const pizzaTypes: IPizzaType[] = [
	{
		value: 'all',
		text: 'Абсолютно все пиццы'
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
		value: 'mushroom',
		text: 'Грибные'
	},
	{
		value: 'spicy',
		text: 'Острые'
	}
]

export const PizzaFilter: FC = (): JSX.Element => {
	const { pizzaType } = useAppSelector(state => state.filter)
	const dispatch = useDispatch()

	const onSelect = useCallback((selectedField: SortValueType) => {
		dispatch(setSort(selectedField))
	}, [])

	const setPizzaTypeHandler = (pizzaType: PizzaType) => {
		dispatch(setFilter(pizzaType))
	}

	return (
		<div className={classes.nav}>
			<ul className={classes.filter}>
				{pizzaTypes.map(type => (
					<li key={type.value}>
						<Button
							className={classNames(classes.buttonPizzaType, {
								[classes.buttonPizzaType_active]: pizzaType === type.value
							})}
							onClick={() => setPizzaTypeHandler(type.value)}
						>
							{type.text}
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
