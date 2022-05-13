import cartReducer, {
    addPizzaToCart, deleteAllPizzasFromCart, deletePizzaFromCart
} from './cartReducer'
import pizzasReducer, { fetchPizzas } from './pizzasReducer'

export { cartReducer, pizzasReducer }
export { addPizzaToCart, deletePizzaFromCart, fetchPizzas, deleteAllPizzasFromCart }


