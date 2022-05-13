import { IPizza } from 'models'
import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
	baseURL: 'http://localhost:3001/'
})

const pizzasApi = {
	fetchPizzas: (): Promise<AxiosResponse<IPizza[]>> => {
		return instance.get('/pizzas')
	}
}

export default pizzasApi
