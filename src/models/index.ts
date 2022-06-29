export interface IPizza {
	id: number
	title: string
	img: string
	availableDough: string[]
	aviableSizes: number[]
	type: PizzaType | string
	price: { [key: string]: number[] }
}

export interface ICartItem {
	id: number
	title: string
	img: string
	count: number
	dough: string
	size: number
	price: number
}

export interface IFindPizzaParams {
	id: number
	dough: string
	size: number
}

export type PizzaType = 'all' | 'meat' | 'vegan' | 'mushroom' | 'spicy'
