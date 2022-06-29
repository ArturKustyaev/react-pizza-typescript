import { createSlice } from '@reduxjs/toolkit'
import { IPizza } from 'models'
import { fetchPizzas } from './thunkActions'

interface IInitialState {
	pizzas: IPizza[]
	error: string
	isFetching: boolean
	isSuccesed: boolean
}

const initialState: IInitialState = {
	pizzas: [],
	error: '',
	isFetching: false,
	isSuccesed: false
}

const pizzasSlice = createSlice({
	name: 'pizzas',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchPizzas.pending, state => {
			state.error = ''
			state.isFetching = true
			state.isSuccesed = false
		})
		builder.addCase(fetchPizzas.fulfilled, (state, action) => {
			state.pizzas = action.payload
			state.isFetching = false
			state.isSuccesed = true
		})
		builder.addCase(fetchPizzas.rejected, (state, action) => {
			state.error = action.payload || 'Ошибка'
			state.isFetching = false
		})
	}
})

export default pizzasSlice.reducer
