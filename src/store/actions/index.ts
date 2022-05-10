import { IPizza, PizzaType } from 'components/PizzaCard/PizzaCard'
import { ActionCreatorType, ActionType } from './types'

export const setPizzas = (pizzas: IPizza[]): ActionCreatorType => ({
	type: ActionType.SET_PIZZAS,
	payload: pizzas
})

export const setPizzaType = (pizzaType: PizzaType): ActionCreatorType => ({
	type: ActionType.SET_PIZZA_TYPE,
	payload: pizzaType
})
