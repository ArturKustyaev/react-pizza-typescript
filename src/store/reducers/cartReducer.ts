import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartPizza } from 'models'

interface IInitialState {
	cartPizzas: { [key: string]: ICartPizza[] }
}

const initialState: IInitialState = {
	cartPizzas: {}
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addPizzaToCart(state, action: PayloadAction<ICartPizza>) {
			if (!state.cartPizzas[action.payload.id]) {
				state.cartPizzas[action.payload.id] = []
			}

			const addedPizzaIndex = state.cartPizzas[action.payload.id].findIndex(
				pizza => pizza.dough === action.payload.dough && pizza.size === action.payload.size
			)

			addedPizzaIndex != -1
				? (state.cartPizzas[action.payload.id][addedPizzaIndex].count += 1)
				: state.cartPizzas[action.payload.id].push(action.payload)
		},
		deletePizzaFromCart(state, action: PayloadAction<number>) {
			//state.cartPizzas = state.cartPizzas[action.payload]
		},
		deleteAllPizzasFromCart(state) {
			state.cartPizzas = {}
		}
	}
})

export const { addPizzaToCart, deletePizzaFromCart, deleteAllPizzasFromCart } = cartSlice.actions

export default cartSlice.reducer
