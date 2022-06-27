import { SortValueType } from './../ui-kit/Select/Select'
import { PizzaType } from './../models/index'
import { IPizza } from 'models'
import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
	baseURL: 'https://621fb9dece99a7de1946cf5f.mockapi.io/api/v1'
	//baseURL: 'http://localhost:3001'
})

const pizzasApi = {
	fetchPizzas: (
		pizzaType: PizzaType = 'all',
		sort: SortValueType = 'price'
	): Promise<AxiosResponse<IPizza[]>> => {
		if (pizzaType === 'all') {
			return instance.get('/pizzas', {
				params: {
					sortBy: sort,
					order: sort === 'title' ? 'asc' : 'desc'
				}
			})
		}

		return instance.get('/pizzas', {
			params: {
				type: pizzaType,
				sortBy: sort,
				order: sort === 'title' ? 'asc' : 'desc'
			}
		})
	}
}

export default pizzasApi
