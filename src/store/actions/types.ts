import { ISetPizzas, ISetPizzaType } from './interfaces'

export enum ActionType {
	SET_PIZZAS = 'SET_PIZZAS',
	SET_PIZZA_TYPE = 'SET_PIZZA_TYPE'
}

export type ActionCreatorType = ISetPizzas | ISetPizzaType
