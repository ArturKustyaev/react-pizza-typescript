import { IFindPizzaParams } from 'models'
import { RootState } from 'store'

const getPizzaCountByParams =
	(pizza: IFindPizzaParams) =>
	(state: RootState): number => {
		return (
			state.cart.items.find(
				cartItem =>
					cartItem.id === pizza.id && cartItem.dough === pizza.dough && cartItem.size === pizza.size
			)?.count || 0
		)
	}

export default getPizzaCountByParams
