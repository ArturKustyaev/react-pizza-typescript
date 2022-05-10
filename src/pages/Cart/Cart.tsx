import { CartList, Container, Layout } from 'components'
import EmpryCart from 'components/EmptyCart'
import { Header } from 'layout'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { AppStateType } from 'store/reducers'

export const Cart: FC = (): JSX.Element => {
	const { cartPizzas } = useSelector((state: AppStateType) => state.cart)

	return (
		<Layout>
			<Container>
				<Header isCartButtonHide={true} />
				{cartPizzas.length ? <CartList pizzas={cartPizzas} /> : <EmpryCart />}
			</Container>
		</Layout>
	)
}
