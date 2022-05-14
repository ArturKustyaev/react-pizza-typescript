import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartPizza } from 'models'

interface IInitialState {
	pizzas: { [key: string]: ICartPizza[] }
}

const initialState: IInitialState = {
	pizzas: {}
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addPizzaToCart(state, action: PayloadAction<ICartPizza>) {
			if (!state.pizzas[action.payload.id]) {
				state.pizzas[action.payload.id] = []
			}

			const addedPizzaIndex = state.pizzas[action.payload.id].findIndex(
				pizza => pizza.dough === action.payload.dough && pizza.size === action.payload.size
			)

			addedPizzaIndex !== -1
				? (state.pizzas[action.payload.id][addedPizzaIndex].count += 1)
				: state.pizzas[action.payload.id].push(action.payload)
		},
		incrementPizzaCounter(state, action: PayloadAction<ICartPizza>) {
			state.pizzas[action.payload.id].map(pizza =>
				pizza.dough === action.payload.dough && pizza.size === action.payload.size
					? (pizza.count += 1)
					: pizza
			)
		},
		decrementPizzaCounter(state, action: PayloadAction<ICartPizza>) {
			const id = action.payload.id

			state.pizzas[id].map(pizza =>
				pizza.dough === action.payload.dough && pizza.size === action.payload.size
					? (pizza.count -= 1)
					: pizza
			)

			state.pizzas[id] = state.pizzas[id].filter(pizza => pizza.count !== 0)

			if (state.pizzas[id].length === 0) {
				delete state.pizzas[id]
			}
		},
		deletePizzaFromCart(state, action: PayloadAction<ICartPizza>) {
			const id = action.payload.id

			state.pizzas[id] = state.pizzas[id].filter(
				pizza => pizza.dough !== action.payload.dough || pizza.size !== action.payload.size
			)

			if (state.pizzas[id].length === 0) {
				delete state.pizzas[id]
			}
		},
		clearCart(state) {
			state.pizzas = {}
		}
	}
})

export const {
	addPizzaToCart,
	incrementPizzaCounter,
	decrementPizzaCounter,
	deletePizzaFromCart,
	clearCart
} = cartSlice.actions

export default cartSlice.reducer
