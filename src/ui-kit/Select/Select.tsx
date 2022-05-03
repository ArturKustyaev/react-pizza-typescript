import classNames from 'classnames'
import { FC, HTMLAttributes, KeyboardEvent, useState } from 'react'
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
	onSelectItem: (value: FilterValueType) => void
}

export const Select: FC<Props> = ({
	className,
	tabIndex = 0,
	items = orderFields,
	placeholder = 'Select something...',
	onSelectItem,
	...rest
}): JSX.Element => {
	const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false)
	const [selectedIndex, setSelectedIndex] = useState<number>(-1)

	const toggleDropdownClickHandler = () => {
		setIsDropdownVisible(!isDropdownVisible)
	}

	const clickHandler = (index: number) => {
		onSelectItem(items[index].value)
		setSelectedIndex(index)
		closeHandler()
	}

	const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.code === 'Space') {
			e.preventDefault()
			setIsDropdownVisible(true)
		}

		if (e.code === 'ArrowDown') {
			e.preventDefault()
			if (selectedIndex !== orderFields.length - 1 && isDropdownVisible) {
				setSelectedIndex(selectedIndex + 1)
			}
		}

		if (e.code === 'ArrowUp') {
			e.preventDefault()
			if (selectedIndex !== 0 && isDropdownVisible) {
				setSelectedIndex(selectedIndex - 1)
			}
		}

		if (e.code === 'Enter') {
			e.preventDefault()
			if (isDropdownVisible) {
				clickHandler(selectedIndex)
			}
		}
	}

	const closeHandler = () => {
		setIsDropdownVisible(false)
	}

	return (
		<div
			className={classNames(classes.select, className)}
			tabIndex={tabIndex}
			role='combobox'
			onClick={toggleDropdownClickHandler}
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
							[classes.itemSelected]: index === selectedIndex
						})}
						key={item.value}
						onClick={() => clickHandler(index)}
					>
						{item.text}
					</li>
				))}
			</ul>
		</div>
	)
}
