import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { pizzasReducer, cartReducer, filterReducer } from './reducers'

const store = configureStore({
	reducer: combineReducers({
		cart: cartReducer,
		pizzas: pizzasReducer,
		filter: filterReducer
	})
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
