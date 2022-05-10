import { IPizza, PizzaType } from 'components/PizzaCard/PizzaCard'
import { ActionType, ActionCreatorType } from '../actions/types'

interface IInitialState {
	pizzas: IPizza[]
	error: string | null
	isFetching: boolean
	pizzaType: PizzaType
}

const initialState: IInitialState = {
	pizzas: [],
	error: null,
	isFetching: false,
	pizzaType: 'all'
}

const pizzasReducer = (
	state: IInitialState = initialState,
	action: ActionCreatorType
): IInitialState => {
	switch (action.type) {
		case ActionType.SET_PIZZAS: {
			return {
				...state,
				isFetching: false,
				error: null,
				pizzas: [
					...action.payload.filter(pizza =>
						state.pizzaType !== 'all' ? pizza.type === state.pizzaType : pizza
					)
				]
			}
		}
		case ActionType.SET_PIZZA_TYPE: {
			return {
				...state,
				pizzaType: action.payload
			}
		}
		default:
			return state
	}
}

export default pizzasReducer
