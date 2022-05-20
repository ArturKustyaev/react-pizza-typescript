import { Cart, Home } from 'pages'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import store from 'store'
import './App.css'

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/react-pizza-typescript' element={<Home />} />
					<Route path='/react-pizza-typescript/cart' element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	)
}

export default App
