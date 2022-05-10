import { ICartPizza } from 'components/CartItem/CartItem'
import { ActionCreatorType, ActionType } from 'store/actions/cartActions/types'

interface IInitialState {
	cartPizzas: ICartPizza[]
	error: string | null
	isFetching: boolean
}

const initialState: IInitialState = {
	cartPizzas: [],
	error: null,
	isFetching: false
}

const cartReducer = (
	state: IInitialState = initialState,
	action: ActionCreatorType
): IInitialState => {
	switch (action.type) {
		case ActionType.SET_CART_PIZZAS: {
			return {
				...state,
				isFetching: false,
				error: null,
				cartPizzas: [...action.payload]
			}
		}
		case ActionType.ADD_PIZZA: {
			return {
				...state,
				cartPizzas: [...state.cartPizzas, action.payload]
			}
		}
		default:
			return state
	}
}

export default cartReducer
