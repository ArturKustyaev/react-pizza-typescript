import { SortValueType } from './../ui-kit/Select/Select'
import { PizzaType } from './../models/index'
import { IPizza } from 'models'
import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
	baseURL: 'http://localhost:3001/'
})

const pizzasApi = {
	fetchPizzas: (
		pizzaType: PizzaType = 'all',
		sort: SortValueType = 'price'
	): Promise<AxiosResponse<IPizza[]>> => {
		if (pizzaType === 'all') {
			return instance.get('/pizzas', {
				params: {
					_sort: sort,
					_order: sort === 'title' ? 'asc' : 'desc'
				}
			})
		}

		return instance.get('/pizzas', {
			params: {
				_sort: sort,
				_order: sort === 'title' ? 'asc' : 'desc',
				type: pizzaType
			}
		})
	}
}

export default pizzasApi
