import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartItem } from 'models'

interface IInitialState {
	items: ICartItem[]
}

const initialState: IInitialState = {
	items: []
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addPizzaToCart(state, action: PayloadAction<ICartItem>) {
			const { id, dough, size } = action.payload

			const cartItemIndex = state.items.findIndex(
				cartItem => cartItem.id === id && cartItem.dough === dough && cartItem.size === size
			)

			if (cartItemIndex === -1) {
				state.items.push(action.payload)
			} else {
				state.items[cartItemIndex].count += 1
			}
		},
		incrementPizzaCounter(state, action: PayloadAction<ICartItem>) {
			const { id, size, dough } = action.payload

			state.items.map(cartItem =>
				cartItem.id == id && cartItem.dough === dough && cartItem.size === size
					? (cartItem.count += 1)
					: cartItem
			)
		},
		decrementPizzaCounter(state, action: PayloadAction<ICartItem>) {
			const { id, size, dough } = action.payload

			state.items.map(cartItem =>
				cartItem.id == id && cartItem.dough === dough && cartItem.size === size
					? (cartItem.count -= 1)
					: cartItem
			)
		},
		deletePizzaFromCart(state, action: PayloadAction<ICartItem>) {
			const { id, size, dough } = action.payload
			state.items = state.items.filter(
				cartItem => cartItem.id !== id || cartItem.dough !== dough || cartItem.size !== size
			)
		},
		clearCart(state) {
			state.items = []
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
