import { SortValueType } from 'ui-kit/Select'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PizzaType } from 'models'

interface IInitialState {
	pizzaType: PizzaType
	sort: SortValueType
}

const initialState: IInitialState = {
	pizzaType: 'all',
	sort: 'famous'
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setFilter(state, action: PayloadAction<PizzaType>) {
			state.pizzaType = action.payload
		},
		setSort(state, action: PayloadAction<SortValueType>) {
			state.sort = action.payload
		}
	}
})

export const { setFilter, setSort } = filterSlice.actions

export default filterSlice.reducer
