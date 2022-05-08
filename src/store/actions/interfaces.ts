import { IPizza } from 'components/PizzaCard/PizzaCard'
import { PizzaType } from 'store/reducers/pizzasReducer'
import { ActionType } from './types'

export interface ISetPizzas {
	type: typeof ActionType.SET_PIZZAS
	payload: IPizza[]
}

export interface ISetPizzaType {
	type: typeof ActionType.SET_PIZZA_TYPE
	payload: PizzaType
}
