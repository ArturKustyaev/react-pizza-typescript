import cartReducer, {
	addPizzaToCart,
	clearCart,
	decrementPizzaCounter,
	deletePizzaFromCart,
	incrementPizzaCounter
} from './cartReducer'
import filterReducer, { setFilter, setSort } from './filterReducer'
import pizzasReducer, { fetchPizzas } from './pizzasReducer'

export { cartReducer, filterReducer, pizzasReducer }

export {
	addPizzaToCart,
	incrementPizzaCounter,
	decrementPizzaCounter,
	deletePizzaFromCart,
	fetchPizzas,
	clearCart,
	setFilter,
	setSort
}
