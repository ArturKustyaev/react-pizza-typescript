import { SortValueType } from './../../ui-kit/Select/Select'
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

const cartSlice = createSlice({
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

export const { setFilter, setSort } = cartSlice.actions

export default cartSlice.reducer
