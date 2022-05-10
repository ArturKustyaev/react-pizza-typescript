import { ISetCartPizzas, IAddPizza } from './interfaces'

export enum ActionType {
	SET_CART_PIZZAS = 'SET_CART_PIZZAS',
	ADD_PIZZA = 'ADD_PIZZA'
}

export type ActionCreatorType = ISetCartPizzas | IAddPizza
