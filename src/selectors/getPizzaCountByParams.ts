import { ICartPizza, IFindPizzaParams } from 'models'

const getPizzaCountByParams = (
	cartPizzas: { [key: string]: ICartPizza[] },
	pizza: IFindPizzaParams
) => {
	const findPizza = cartPizzas[pizza.id]?.find(
		cartPizza => cartPizza.dough === pizza.dough && cartPizza.size === pizza.size
	)

	return findPizza?.count || null
}

export default getPizzaCountByParams
