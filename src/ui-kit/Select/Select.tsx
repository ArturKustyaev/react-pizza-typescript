import classNames from 'classnames'
import { FC, HTMLAttributes, KeyboardEvent, memo, useState } from 'react'
import Icon from 'ui-kit/Icon'
import classes from './Select.module.scss'

export type FilterValueType = 'famous' | 'price' | 'alphabet'

interface IFilterItem {
	text: string
	value: FilterValueType
}

export const orderFields: Array<IFilterItem> = [
	{
		text: 'популярности',
		value: 'famous'
	},
	{
		text: 'цене',
		value: 'price'
	},
	{
		text: 'алфавиту',
		value: 'alphabet'
	}
]

interface Props extends HTMLAttributes<HTMLDivElement> {
	className?: string
	tabIndex?: number
	items?: Array<IFilterItem>
	placeholder?: string
	defaultItemChecked?: number
	onSelectItem: (value: FilterValueType) => void
}

export const Select: FC<Props> = memo(
	({
		className,
		tabIndex = 0,
		defaultItemChecked = -1,
		items = orderFields,
		placeholder = 'Выберите...',
		onSelectItem,
		...rest
	}): JSX.Element => {
		const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false)
		const [selectedIndex, setSelectedIndex] = useState<number>(defaultItemChecked)

		const toggleDropdownHandler = () => {
			setIsDropdownVisible(!isDropdownVisible)
		}

		const clickHandler = (index: number) => {
			onSelectItem(items[index].value)
			setSelectedIndex(index)
			closeHandler()
		}

		const closeHandler = () => {
			setIsDropdownVisible(false)
		}

		const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
			e.preventDefault()
			if (e.code === 'Space') {
				setIsDropdownVisible(true)
			}

			if (e.code === 'ArrowDown') {
				if (selectedIndex !== orderFields.length - 1 && isDropdownVisible) {
					setSelectedIndex(selectedIndex + 1)
				}
			}

			if (e.code === 'ArrowUp') {
				if (selectedIndex !== 0 && isDropdownVisible) {
					setSelectedIndex(selectedIndex - 1)
				}
			}

			if (e.code === 'Enter') {
				if (isDropdownVisible) {
					clickHandler(selectedIndex)
				}
			}
		}

		return (
			<>
				<Icon
					className={classNames(classes.arrow, {
						[classes.arrow_active]: isDropdownVisible
					})}
					type='arrow'
				/>
				Сортировка по:
				<div
					className={classNames(classes.select, className)}
					tabIndex={tabIndex}
					role='combobox'
					onClick={toggleDropdownHandler}
					onKeyDown={keyDownHandler}
					onBlur={closeHandler}
					{...rest}
				>
					<div className={classNames(classes.field)}>
						<span
							className={classNames(classes.value, {
								[classes.placeholder]: selectedIndex === -1
							})}
						>
							{selectedIndex !== -1 ? items[selectedIndex].text : placeholder}
						</span>
					</div>
					<ul
						className={classNames(classes.dropdown, {
							[classes.dropdown_active]: isDropdownVisible
						})}
						data-testid='test-dropdown'
					>
						{items.map((item, index) => (
							<li
								className={classNames(classes.item, {
									[classes.item_selected]: index === selectedIndex
								})}
								key={item.value}
								onClick={() => clickHandler(index)}
							>
								{item.text}
							</li>
						))}
					</ul>
				</div>
			</>
		)
	}
)
