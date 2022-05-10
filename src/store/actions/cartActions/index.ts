import { ICartPizza } from 'components/CartItem/CartItem';
import { ActionCreatorType, ActionType } from './types'

export const setPizzas = (pizzas: ICartPizza[]): ActionCreatorType => ({
	type: ActionType.SET_CART_PIZZAS,
	payload: pizzas
})

export const addPizza = (pizza: ICartPizza): ActionCreatorType => ({
	type: ActionType.ADD_PIZZA,
	payload: pizza
})
