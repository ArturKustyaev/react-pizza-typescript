import { ICartItem } from 'models'

const getPizzasCount = (cartItems: ICartItem[]): number => {
	return cartItems.reduce(
		(sum, cartItem) =>
			(sum += cartItem.variants.reduce((sum, variant) => sum += variant.count, 0)),
		0
	)
}

export default getPizzasCount
