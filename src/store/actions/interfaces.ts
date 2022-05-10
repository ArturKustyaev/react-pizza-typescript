import { IPizza, PizzaType } from 'components/PizzaCard/PizzaCard'
import { ActionType } from './types'

export interface ISetPizzas {
	type: typeof ActionType.SET_PIZZAS
	payload: IPizza[]
}

export interface ISetPizzaType {
	type: typeof ActionType.SET_PIZZA_TYPE
	payload: PizzaType
}
