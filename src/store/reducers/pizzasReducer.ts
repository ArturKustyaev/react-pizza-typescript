import { SortValueType } from './../../ui-kit/Select/Select'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { pizzasApi } from 'api'
import { IPizza, PizzaType } from 'models'

interface IInitialState {
	pizzas: IPizza[]
	error: string | null
	isFetching: boolean
}

const initialState: IInitialState = {
	pizzas: [],
	error: null,
	isFetching: false
}

const fetchPizzas = createAsyncThunk<
	IPizza[],
	{ pizzaType: PizzaType; sort: SortValueType },
	{ rejectValue: string }
>('pizzas/fetchPizzas', async ({ pizzaType, sort }, { rejectWithValue }) => {
	try {
		const response = await pizzasApi.fetchPizzas(pizzaType, sort)
		return response.data
	} catch (e) {
		return rejectWithValue('Ошибка при загрузке пицц!')
	}
})

const pizzasSlice = createSlice({
	name: 'pizzas',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchPizzas.pending, state => {
			state.error = ''
			state.isFetching = true
		})
		builder.addCase(fetchPizzas.fulfilled, (state, action) => {
			state.pizzas = action.payload
			state.isFetching = false
		})
		builder.addCase(fetchPizzas.rejected, (state, action) => {
			state.error = action.payload || 'ошибка'
			state.isFetching = false
		})
	}
})

export { fetchPizzas }

export default pizzasSlice.reducer
