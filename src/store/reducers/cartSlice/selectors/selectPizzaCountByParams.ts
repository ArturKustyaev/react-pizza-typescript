import { createSelector } from '@reduxjs/toolkit'
import { IFindPizzaParams } from 'models'
import { RootState } from 'store'

export const selectPizzaCountByParams = (pizza: IFindPizzaParams) =>
	createSelector(
		[(state: RootState) => state.cart.items],
		cartItems =>
			cartItems.find(
				cartItem =>
					cartItem.id === pizza.id && cartItem.dough === pizza.dough && cartItem.size === pizza.size
			)?.count || 0
	)

export default selectPizzaCountByParams
