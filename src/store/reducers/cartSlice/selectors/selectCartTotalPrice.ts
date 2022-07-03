import { RootState } from 'store'

const selectCartTotalPrice = (state: RootState): number => {
	return state.cart.items.reduce((sum, cartItem) => (sum += cartItem.count * cartItem.price), 0)
}

export default selectCartTotalPrice
