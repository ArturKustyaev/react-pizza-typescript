import { CartList, Container, Layout } from 'components'
import EmpryCart from 'components/EmpryCart'
import { Header } from 'layout'
import { FC } from 'react'

export const Cart: FC = (): JSX.Element => {
	const a = 4
	
	return (
		<Layout>
			<Container>
				<Header isCartButtonHide={true} />
				{a > 0 ? <CartList /> : <EmpryCart />}
			</Container>
		</Layout>
	)
}
