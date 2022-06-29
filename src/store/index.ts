import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { pizzasSlice, cartSlice, filterSlice } from './reducers'

const store = configureStore({
	reducer: combineReducers({
		cart: cartSlice,
		pizzas: pizzasSlice,
		filter: filterSlice
	})
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
