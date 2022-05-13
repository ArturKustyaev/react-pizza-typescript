import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { pizzasReducer, cartReducer } from './reducers'

const store = configureStore({
	reducer: combineReducers({
		pizzas: pizzasReducer,
		cart: cartReducer
	})
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
