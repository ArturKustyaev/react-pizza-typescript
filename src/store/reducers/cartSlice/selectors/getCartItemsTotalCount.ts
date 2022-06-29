import { RootState } from 'store'

const getCartItemsTotalCount = (state: RootState): number => {
	return state.cart.items.reduce((sum, cartItem) => (sum += cartItem.count), 0)
}

export default getCartItemsTotalCount
