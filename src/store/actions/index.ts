import { IPizza } from 'components/PizzaCard/PizzaCard'
import { PizzaType } from 'store/reducers/pizzasReducer'
import { ActionCreatorType, ActionType } from './types'

export const setPizzas = (pizzas: IPizza[]): ActionCreatorType => ({
	type: ActionType.SET_PIZZAS,
	payload: pizzas
})

export const setPizzaType = (pizzaType: PizzaType): ActionCreatorType => ({
	type: ActionType.SET_PIZZA_TYPE,
	payload: pizzaType
})
