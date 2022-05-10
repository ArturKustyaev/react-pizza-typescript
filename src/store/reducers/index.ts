import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import pizzasReducer from './pizzasReducer'

const rootReducer = combineReducers({
	pizzas: pizzasReducer,
	cart: cartReducer
})

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>

export default rootReducer
