import { combineReducers } from 'redux'
import photosReducer from './pizzasReducer'

const rootReducer = combineReducers({
	pizzas: photosReducer
})

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>

export default rootReducer