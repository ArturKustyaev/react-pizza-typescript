import { ICartPizza } from 'components/CartItem/CartItem';
import { ActionType } from './types';

export interface ISetCartPizzas {
	type: typeof ActionType.SET_CART_PIZZAS
	payload: ICartPizza[]
}

export interface IAddPizza {
	type: typeof ActionType.ADD_PIZZA
	payload: ICartPizza
}
