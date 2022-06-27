import { ICartItemVariant } from './../../models/index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartPizza } from 'models'
import { ICartItem } from 'models/index'

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
		addPizzaToCart(state, action: PayloadAction<ICartPizza>) {
			const { id, title, img, dough, price, size } = action.payload

			const cartItemIndex = state.items.findIndex(cartItem => cartItem.id === id)

			if (cartItemIndex === -1) {
				const cartItem: ICartItem = {
					id,
					title,
					img,
					variants: [{ dough, size, price, count: 1 }]
				}

				state.items.push(cartItem)
			} else {
				const variantIndex = state.items[cartItemIndex].variants.findIndex(
					variant => variant.dough === dough && variant.size === size
				)

				if (variantIndex === -1) {
					const variant: ICartItemVariant = {
						dough,
						size,
						price,
						count: 1
					}

					state.items[cartItemIndex].variants.push(variant)
				} else {
					state.items[cartItemIndex].variants[variantIndex].count += 1
				}
			}
		},
		incrementPizzaCounter(state, action: PayloadAction<ICartPizza>) {
			const { id, size, dough } = action.payload

			state.items.map(cartItem =>
				cartItem.id === id
					? cartItem.variants.map(variant =>
							variant.dough === dough && variant.size === size ? (variant.count += 1) : variant
					  )
					: cartItem
			)
		},
		decrementPizzaCounter(state, action: PayloadAction<ICartPizza>) {
			const { id, size, dough } = action.payload

			state.items.map(cartItem =>
				cartItem.id === id
					? cartItem.variants.map(variant =>
							variant.dough === dough && variant.size === size && variant.count !== 1
								? (variant.count -= 1)
								: variant
					  )
					: cartItem
			)
		},
		deletePizzaFromCart(state, action: PayloadAction<ICartPizza>) {
			const { id, size, dough } = action.payload

			state.items.map(cartItem =>
				cartItem.id === id
					? (cartItem.variants = cartItem.variants.filter(
							variant => variant.size !== size || variant.dough !== dough
					  ))
					: cartItem
			)

			state.items = state.items.filter(cartItem => cartItem.variants.length !== 0)
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
