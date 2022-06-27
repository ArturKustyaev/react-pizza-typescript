import { ICartItem } from 'models'

const getTotalPrice = (cartItems: ICartItem[]) => {
	return cartItems.reduce(
		(sum, cartItem) =>
			(sum += cartItem.variants.reduce(
				(sum, variant) => (sum += variant.count * variant.price),
				0
			)),
		0
	)
}

export default getTotalPrice
