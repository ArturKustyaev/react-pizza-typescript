import { CartList, Container, Layout } from 'components'
import EmpryCart from 'components/EmptyCart'
import { useAppSelector } from 'hooks'
import { Header } from 'layout'
import { FC } from 'react'

export const Cart: FC = (): JSX.Element => {
	const { pizzas: cartPizzas } = useAppSelector(state => state.cart)

	return (
		<Layout>
			<Container>
				<Header isCartButtonHide={true} />
				{ Object.keys(cartPizzas).length ? <CartList pizzas={cartPizzas} /> : <EmpryCart />} 
			</Container>
		</Layout>
	)
}
