import { CartList, Container, Layout, EmpryCart } from 'components'
import { useAppSelector } from 'hooks'
import { Header } from 'layout'
import { FC } from 'react'

export const Cart: FC = (): JSX.Element => {
	const { items } = useAppSelector(state => state.cart)

	return (
		<Layout>
			<Container>
				<Header isCartButtonHide={true} />
				{items.length !== 0 ? <CartList items={items} /> : <EmpryCart />}
			</Container>
		</Layout>
	)
}
