import { Cart, Home, NotFound404 } from 'pages'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from 'store'
import './App.css'

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<BrowserRouter>
					<Routes>
						<Route path='/react-pizza-typescript' element={<Home />} />
						<Route path='/react-pizza-typescript/cart' element={<Cart />} />
						<Route path='*' element={<NotFound404 />} />
					</Routes>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	)
}

export default App
