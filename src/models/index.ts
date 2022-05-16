export interface IPizza {
	id: number
	title: string
	img: string
	availableDough: string[]
	aviableSizes: number[]
	type: PizzaType | string
	price: number
}

export interface ICartPizza {
	id: number
	title: string
	img: string
	dough: string
	size: number
	price: number
	count: number
}

export interface IFindPizzaParams {
	id: number
	dough: string
	size: number
}

export type PizzaType = 'all' | 'meat' | 'vegan' | 'mushroom' | 'spicy'
