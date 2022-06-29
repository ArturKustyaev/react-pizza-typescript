import { RootState } from 'store'

const getCartTotalPrice = (state: RootState): number => {
	return state.cart.items.reduce((sum, cartItem) => (sum += cartItem.count * cartItem.price), 0)
}

export default getCartTotalPrice
