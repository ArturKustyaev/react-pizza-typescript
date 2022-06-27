import { ICartItem, IFindPizzaParams } from 'models'

const getPizzaCountByParams = (cartItems: ICartItem[], pizza: IFindPizzaParams) => {
	return (
		cartItems
			.find(cartItem => cartItem.id === pizza.id)
			?.variants.find(variant => variant.dough === pizza.dough && variant.size === pizza.size)
			?.count || 0
	)
}

export default getPizzaCountByParams
