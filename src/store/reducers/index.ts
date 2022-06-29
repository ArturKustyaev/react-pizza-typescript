import {
	addPizzaToCart,
	cartSlice,
	clearCart,
	decrementPizzaCounter,
	deletePizzaFromCart,
	incrementPizzaCounter
} from './cartSlice'
import { filterSlice, setFilter, setSort } from './filterSLice'
import { pizzasSlice } from './pizzasSlice'

export { cartSlice, filterSlice, pizzasSlice }

export {
	addPizzaToCart,
	incrementPizzaCounter,
	decrementPizzaCounter,
	deletePizzaFromCart,
	clearCart,
	setFilter,
	setSort
}
