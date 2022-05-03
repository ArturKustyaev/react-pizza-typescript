import { ReactComponent as Cart } from './Icons/cart.svg'
import { ReactComponent as Arrow } from './Icons/arrow.svg'

export type IconType = 'cart' | 'arrow'

export const IconTypes: Map<IconType, JSX.Element> = new Map([
	['cart', <Cart />],
	['arrow', <Arrow />]
])
