import { createAsyncThunk } from '@reduxjs/toolkit'
import { pizzasApi } from 'api'
import { IPizza, PizzaType } from 'models'
import { SortValueType } from 'ui-kit/Select'

export const fetchPizzas = createAsyncThunk<
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
