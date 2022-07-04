import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { cartSlice, filterSlice, pizzasSlice } from './reducers'

const rootReducer = combineReducers({
	cart: cartSlice,
	pizzas: pizzasSlice,
	filter: filterSlice
})

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['pizzas']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		})
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)

export default store
