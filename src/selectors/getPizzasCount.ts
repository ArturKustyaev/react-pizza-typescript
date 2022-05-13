import { ICartPizza } from 'models'

const getPizzasCount = (cartPizzas: { [key: string]: ICartPizza[] }) => {
	const allPizzas: ICartPizza[] = []

	Object.keys(cartPizzas).map(pizzaId => allPizzas.push(...cartPizzas[pizzaId]))

	return allPizzas.reduce((sum, pizza) => sum + pizza.count, 0)
}

export default getPizzasCount
